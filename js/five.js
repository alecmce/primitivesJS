define([],
function() {

  var SCALAR = Math.sqrt(2) / 2;

  return function Five(drawCircle, color, padding, child) {
    var offset = 2 * child.radius + padding;
    var radius = offset + child.radius + padding;
    var delta = SCALAR * offset;

    function draw(container, x, y) {
      var group = drawCircle(container, x, y, radius, color, true);
      child.draw(group, 0, 0);
      child.draw(group, delta, delta);
      child.draw(group, delta, -delta);
      child.draw(group, -delta, -delta);
      child.draw(group, -delta, delta);
      return group;
    }

    return {
      draw: draw,
      radius: radius
    }
  }

});
