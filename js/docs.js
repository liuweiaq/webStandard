!function(a) {
	"use strict";
	a(function() {
		var b = a(window),
			c = a(document.body);
		c.scrollspy({
			target: ".oso-docs-sidebar"
		}), b.on("load", function() {
			c.scrollspy("refresh")
		}), a(".oso-docs-container [href=#]").click(function(a) {
			a.preventDefault()
		}), setTimeout(function() {
			var b = a(".oso-docs-sidebar");
			b.affix({
				offset: {
					top: function() {
						var c = b.offset().top,
							d = parseInt(b.children(0).css("margin-top"), 10),
							e = a(".oso-docs-nav").height();
						return this.top = c - e - d;
					}
				}
			})
		}, 100)
	})
}(jQuery);