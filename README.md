# TextShadow

jQuery Widget that creates cross-browser consistent (for the most part) text shadows for elements.  It can apply multiple shadows for various effects and works in most browsers including IE6-9.

## Requires

* jQuery v1.3+
* jQuery UI v1.6.2 +

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

## Options

Option      | Default  | Description
------------|----------|------------------
x           | 0        | Shadow horizontal offset in pixels
y           | 1        | Shadow vertical offset in pixels
blur        | 1        | Amount in pixels of the shadow blur
color       | #000     | Shadow color


## License

(The MIT License)

Copyright (c) 2012 Lindsay Donaghe <lindsay@donaghe.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.