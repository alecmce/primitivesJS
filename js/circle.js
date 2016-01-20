define([
  'svg'
],
function(Svg) {
  var TWO_PI = Math.PI * 2;
  var SVG_NAMESPACE = "http://www.w3.org/2000/svg";

  return function Circle(lineWidth) {
    return function draw(container, x, y, radius, color, stroke) {
      var translate = 'translate(' + [x || 0, y || 0].join(',') + ')';
      var group = Svg('g')
        .appendTo(container.element)
        .setAttribute('transform', translate);

      var circle = Svg('circle')
        .appendTo(group.element)
        .setAttribute('r', radius)
        .setAttribute('fill', color);

      if (stroke) {
        circle
          .setAttribute('stroke', 'black')
          .setAttribute('stroke-width', lineWidth);
      }
      return group;
    }
  }

});
