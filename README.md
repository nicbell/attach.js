#Intro [![Build Status](https://travis-ci.org/nicbell/attach.js.png?branch=master)](https://travis-ci.org/nicbell/attach.js) [![NPM](https://nodei.co/npm/shimly.png?mini=true)](https://nodei.co/npm/shimly/)

Attach.js removes dependancy on messy CSS selectors when attaching JavaScript to the page. Attach.js also encapsulates all your DOM "attachments" so that they can easily be reattached when the page is dynamically updated (ie. via AJAX). 

I have written Attach.js in pure JavaScript but in the examples I have shown how to use it with jQuery and Mootools.

##The problem
Ever thought CSS selectors in your JavaScript were messy or wanted to reatttach JavaScript to the DOM after content was dynamically loaded?
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
Pretty messy, and what if the class name changes? 

##Usage
```html
<div data-attach="id">..</div> <!-- Attachments matching id will be added to this element -->
<div data-attach="id2">..</div> <!-- Attachments matching id2 will be added to this element -->
<div data-attach="id id2">..</div> <!-- Attachments matching id and id2 will be added to this element -->
```
```javascript
Attach.add('id',function(el){..}); //Add an attachment for id
Attach.add('id2',function(el){..}); //Add an attachment for id2
Attach.run(); //Attach to DOM
```

##Example
```html
<div class="someSelector" data-attach="pluginName">..</div>
<div class="anotherSelector" data-attach="SomeThing">..</div>
```
```javascript
Attach.add('pluginName',function(el){
  $(el).pluginName();
});
Attach.add('SomeThing',function(el){
   new SomeThing($(el));
});

$(document).ready(function(){
  Attach.run();
});
```

##API
- `Attach.add(id, callback)` {Function} Adds callback for id (matches 'data-attach' value). The callback has one parameter 'el' (DOM element).
- `Attach.remove(id)` {Function} Removes callback for id.
- `Attach.run()` {Function} Queries DOM and runs callbacks for 'data-attach' values.
- `Attach.engine` {Object} Set this to replace the query engine an engine of your choice.
- `Attach.items` {Array} List of attachments.

##More detailed examples:
* [Attaching multiple plugins and classes to a single element](https://github.com/nicbell/attach.js/wiki/Attaching-multiple-plugins-and-classes-to-a-single-element).
* [Attaching plugins and classes with parameters](https://github.com/nicbell/attach.js/wiki/Attaching-plugins-and-classes-with-parameters).
* [Storing instance references](https://github.com/nicbell/attach.js/wiki/Storing-instance-references).
* [Reattaching after a DOM update](https://github.com/nicbell/attach.js/wiki/Reattaching-after-a-DOM-update).
* [Advanced Mootools example](https://github.com/nicbell/attach.js/wiki/Advanced-Mootools-example).

--
This project was inspired by ClientCide's Behavior project and DOM instantiation in Twitter Bootstrap.
