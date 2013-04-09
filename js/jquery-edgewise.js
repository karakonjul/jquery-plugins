(function($){
	$.widget('rlib.edgewise', {
		options : {
			value : 0,
			label : '',
			min : '0',
			max : '100',
			needle_offset_min : 0,
			needle_offset_max : 200,
			duration : 0,
			easing : 'easeOutCubic'
		},
		_create : function(){
			this.element.empty().addClass('edgewise')
				.append($('<div class="edgewise-scale-min"></div>').text(this.options.min))
				.append($('<div class="edgewise-scale-max"></div>').text(this.options.max))
				.append($('<div class="edgewise-scale-label"></div>').text(this.options.label))
				.append($('<div class="edgewise-scale-gradient"></div>'))
				.append($('<div class="edgewise-needle" style="background-position: 0px top;"></div>'))
				.append($('<div class="edgewise-frame"></div>'));
			this._refresh();
		},
		_getNeedleOffset : function(){
			return Math.round(this.options.needle_offset_min + (this.options.needle_offset_max - this.options.needle_offset_min) * this.options.value / 100);
		},
		_refresh : function(){
			var easing = this.options.easing;
			if ($.easing[easing]==undefined) easing = null;
			this.element.find('.edgewise-needle').animate({'background-position-x':this._getNeedleOffset()+'px'}, parseInt(this.options.duration), easing);
		},
		value : function(value){
			this.options.value = value;
			this._refresh();
		}
	});
})(jQuery);