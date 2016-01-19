define([
  'primitive/svg',
  'primitive/primitive'
],
function(Svg, Primitive) {

  return function UpdateTags(makePrimitive) {
    function wrap(svg, factors) {
      var wrapper = Svg('g').appendTo(svg);

      var width = svg.clientWidth;
      var height = svg.clientHeight;
      var size = width < height ? width : height;
      var primitive = makePrimitive(factors);
      var element = primitive.draw(wrapper, 0, 0);

      wrapper.position(width / 2, height / 2);
      element.scale(Math.min(1, size / (2.2 * primitive.radius)));
    }

    return function updateTags() {
      var svgs = document.getElementsByTagName('svg');
      for (var i = 0; i < svgs.length; i++) {
        var svg = svgs[i];
        var data = svg.getAttribute('data-primitive');
        if (data) {
          svg.removeAttribute('data-primitive');
          wrap(svg, data.split(','));
        }
      }
    }
  }

});
