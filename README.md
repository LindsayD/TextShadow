# TextShadow

jQuery Widget that creates cross-browser consistent (for the most part) text shadows for elements.  It can apply multiple shadows for various effects and works in most browsers including IE6-9.

Why is this cool?  CSS3 can do all this, right?  Not for IE, and there are a few stylistic differences in the implementation of the styles in the other browsers.
This plugin uses CSS3 where available and with a few adjustments for a consistent look, and also takes care of IE.

## Examples 
### Screenshot
![example shadows](https://github.com/LindsayD/TextShadow/blob/master/TextShadowWidget.png?raw=true "example shadows")
### Demo
[On jsFiddle.net] (http://jsfiddle.net/BlueCockatoo/tb2uc/)
## Requires

* jQuery v1.4+
* jQuery UI v1.6.2+ (UI core + widget factory addon only)

## Usage

Add dependencies:

```html
<script type="text/javascript" src="[your version]/jquery.min.js"></script>
<script type="text/javascript" src="[your version]/jquery-ui.min.js"></script>
<script type="text/javascript" src="textShadow.jqw.js"></script>
```

Apply textShadow to an element with text:

```html
<div class="shadow">Awesome shadowed text!</div>
<script>
  $(".shadow").textShadow({});
</script>
```
    
You can override the defaults for the options:

```html
<div class="shadow">Awesome shadowed text!</div>
<script>
  $(".shadow").textShadow({
  	x: 1,
  	y: 1,
  	blur: 2,
  	color: '#009'
  });
</script>
```
You can also apply multiple shadows to the same element

```html
<div class="shadow">Awesome shadowed text!</div>
<script>
  $('.shadow')
    .textShadow({ color: '#005', x:1, y:1, blur: 2 })
    .textShadow('apply', { color: '#cce', x:7, y:7 } );
</script>
```

Any options not specified when calling the `apply` method will default to the ones in the initialization call to the widget.  
For example, `blur` would be `2` in the `apply` call above since it was not specified.

## Options

Option      | Default  | Description
------------|----------|------------------
x           | 0        | Shadow horizontal offset in pixels
y           | 1        | Shadow vertical offset in pixels
blur        | 1        | Amount in pixels of the shadow blur
color       | #000     | Shadow color

## Methods

Method      | Params   | Description
------------|----------|------------------
`apply`     | options  | Applies another text shadow to the element
`destroy`   |          | Removes all effects and DOM manipulations by the widget

## License

(The MIT License)

Copyright (c) 2012 Lindsay Donaghe <lindsay@donaghe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.