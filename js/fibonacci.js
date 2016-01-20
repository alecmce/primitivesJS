define([],
function() {

  var MULTIPLIER = 1.25;
  var PHI = (Math.sqrt(5) + 1) / 2;
  var PHI_2PI = (PHI * 2) * Math.PI;

  return function Fibonacci(count, drawCircle, color, padding, child) {
    var offset = child.radius + padding / 2;
    var radius = Math.sqrt(count) * MULTIPLIER * offset + child.radius + padding;

    function draw(container, x, y) {
      var group = drawCircle(container, x, y, radius, color, true);
      for (var i = 1; i <= count; ++i) {
        var r = Math.sqrt(i) * MULTIPLIER * offset;
        var theta = i * PHI_2PI;
        child.draw(group, Math.cos(theta) * r, -Math.sin(theta) * r);
      }
      return group;
    }

    return {
      draw: draw,
      radius: radius
    }
  }

});
