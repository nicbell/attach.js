/**
 * Attach.js v1.0.5
 * Attaches JavaScript to HTML without messy selectors. 
 *
 * https://github.com/nicbell/attach.js
 * MIT License
 * Copyright 2015 Nic Bell
 */

(function (global) {
    'use strict';

    var Attach = {
        engine: null,
        items: [],

        add: function (id, fn) {
            this.items.push({ id: id, func: fn });
        },

        remove: function (id) {
            for (var i = this.items.length; i--;) {
                if (this.items[i].id === id) {
                    this.items.splice(i, 1);
                    break;
                }
            }
        },

        run: function () {
            var elements = this.engine ? this.engine('[data-attach]') : document.querySelectorAll('[data-attach]');

            for (var i = 0; i < elements.length; i++) {
                this._attach(elements[i]);
            }
        },

        _attach: function (element) {
            var ids = element.getAttribute('data-attach').split(' ');

            for (var i = 0; i < this.items.length; i++) {
                if (ids.indexOf(this.items[i].id) >= 0 && typeof this.items[i].func === 'function') {
                    this.items[i].func.call(this, element, this.items[i].id);
                }
            }
        }
    };


    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function () { return Attach; });
    }
    else if (typeof exports !== 'undefined') {
        // Support Node.js specific 'module.exports' (which can be a function)
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Attach;
        }
        // But always support CommonJS module 1.1.1 spec ('exports' cannot be a function)
        exports.Attach = Attach;
    }
    else {
        global.Attach = Attach;
    }

})(this);