#Intro
Attach.js removes dependancy on messy CSS selectors when attaching JavaScript to the page. Attach.js also encapsulates all your DOM "attachments" so that they can easily be reattached when the page is dynamically updated (ie. via AJAX). 

I have written Attach.js in pure JavaScript but in the examples I have shown how to use it with jQuery and Mootools.

##The problem
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

##Example
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

##Usage

##API

##More detailed examples (coming soon, sleep now):
* Attaching multiple plugins and classes to a single element.
* Attaching plugins and classes with parameters.
* Storing instance references.
* Reattaching after a DOM update.
* Advanced Mootools example.

--
This project was inspired by ClientCide's Behavior project and DOM instantiation in Twitter Bootstrap.
