/**
 * Attach.js v1.0.0
 * Attaches JavaScript to HTML without messy selectors. 
 *
 * https://github.com/nicbell/attach.js
 * MIT License
 * Copyright 2013 Nic Bell
 */

(function (Attach) {
    Attach.engine = null;

    Attach.items = [];

    Attach.add = function (id, fn) {
        this.items.push({ id: id, func: fn });
    };

    Attach.remove = function (fn) {
        this.items.splice(this.items.indexOf(fn), 1);
    };

    Attach.run = function () {
        var elements = this.engine ? this.engine('[data-attach]') : document.querySelectorAll('[data-attach]');

        for (var i = 0; i < elements.length; i++) {
            this._attach(elements[i]);
        }
    };

    Attach._attach = function (element) {
        var ids = element.getAttribute('data-attach').split(' ');

        for (var i = 0; i < this.items.length; i++) {
            if (ids.indexOf(this.items[i].id) >= 0 && typeof this.items[i].func === 'function') {
                this.items[i].func.call(this, element);
            }
        }
    };
})(window.Attach = window.Attach || {});
