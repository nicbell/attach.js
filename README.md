attach.js
=========

Attaches JavaScript to HTML without messy selectors. Also takes care out reattaching JavaScript to HTML when HTML is dynamically injected (ie. via AJAX). 

This project was inspired but ClientCide's Behavior project and DOM instantiation in Twitter Bootstrap.

Why:
----
Ever thought CSS selectors in your JavaScript were messy or wanted to reatttach JavaScript to the DOM after content was dynamically loaded.
```html
<div class="someSelector">..</div>
<div class="anotherSelector">..</div>
```
```javascript
$(document).ready(function(){
  $('.someSelector').pluginName();
  //or
  var x = new SomeThing($('.anotherSelector'));
});
```
Pretty messy and what if the class name changes?

Now using attach.js.
```html
<div class="someSelector" data-attach="pluginName">..</div>
<div class="anotherSelector" data-attach="SomeThing">..</div>
```
```javascript
Attach.add('pluginName',function(ele){
  $(ele).pluginName();
});
Attach.add('SomeThing',function(ele){
   new SomeThing($(ele));
});

$(document).ready(function(){
  Attach.run();
});
```
