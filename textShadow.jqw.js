/* ***************************************************
 * Text Shadow Widget
 *  
 * The Text Shadow Widget is a jQuery Widget that creates 
 * cross-browser consistent (for the most part) text shadows 
 * for elements. It can apply multiple shadows for various 
 * effects and works in most browsers including IE6-9.
 * ------------------------------------------------
 * Requires jQuery and jQuery UI (Widget Factory)
 * ------------------------------------------------
 * Copyright 2012 Lindsay Donaghe (@lindsayd)
 * ------------------------------------------------
 * Released under the MIT License.
 * ------------------------------------------------
 * author:  Lindsay Donaghe
 * version: 0.1
 * url:     https://github.com/LindsayD/TextShadow
 * source:  https://github.com/LindsayD/TextShadow
* *****************************************************/
(function ($)
{
    var TextShadow = {
        options: {
            x: 0,
            y: 1,
            blur: 1,
            color: '#000'
        },

        // == Required Methods ===================================
        // called on widget initialization.
        _create: function ()
        {
            // call the base widget's create method we are overriding
            this.element.addClass(this.widgetBaseClass);
            this._applyShadow(this.options);  
        },
       
        // called when the widget element is removed from the DOM.
        destroy: function ()
        {
            this.element
                .removeClass(this.widgetBaseClass)
                .css("text-shadow", '')
            this.element.find(".ts-dupe").remove();
            this.element.find(".ts-original").unwrap();
            this.element.find(".ts-position").unwrap();

            $.Widget.prototype.destroy.call(this);
        },

        // == Private methods/properties =========================
        _applyShadow: function(o) {
            // For IE, create a dupe and blur it
            if ($.browser.msie)
            {
                var ver = $.browser.version;
                var verInt = ver.substr(0, ver.indexOf("."));
                var height = this.element.height();

                var original = this.element.find('.ts-original');
                if (original.length == 0)
                    this.element.wrapInner('<span class="ts-original" style="position:absolute; top:0; left:0;"></span>');
                var original = this.element.find('.ts-original');
                
                var dupe = original.clone()
                    .prependTo(this.element)
                    .removeClass("ts-original")
                    .addClass("ts-dupe");
                
                var css = {
                    position: "absolute",
                    color: o.color,
                    left: o.x - o.blur
                };

                var blur = o.blur;
                switch (parseInt(verInt))
                {
                    case 9:
                    case 8:
                        blur = (o.blur - (o.blur > 2 ? 1 : (o.blur == 2 ? 0.5 : 0)));
                        css.top = o.y - blur; // have to move it up by the blur amount.
                        break;

                    default: // 7 and below
                        css.top = o.y - (blur + 1);
                        break;
                }
                css.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=80, Style=0) progid:DXImageTransform.Microsoft.Blur(PixelRadius='" + blur + "', MakeShadow='false')"; ;

                dupe.css(css);
                // make the element a "layout anchor" so we can position the original and dupe in it.
                var position = this.element.find('ts-position');
                if (position.length === 0) 
                    this.element.wrapInner('<div class="ts-position" style="position:relative; display: block; height: ' + height + 'px;"></div>');
            } 
            else {// for everyone else, do the nice CSS version.
                // FF is heavy on the blur... take it down a notch for consistency
                var blur = $.browser.mozilla ? o.blur - 1 : o.blur;                           
                var prev = this.element.get(0).style.textShadow;           
                var val = o.x + "px " + o.y + "px " + blur + "px " + o.color;
                val = prev && prev !== '' ? prev + ', ' + val : val;
                this.element.css("text-shadow", val);
            }
        },
        // == Public methods/properties ===========================
        apply: function(o) {
            o = $.extend({}, this.options, o);
            this._applyShadow(o);            
        }
    }

    $.widget("gd.textShadow", TextShadow); // create the widget
})(jQuery);
