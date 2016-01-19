define([],
function() {

  return function Two(drawCircle, color, padding, child) {
    var radius = (4 * child.radius + 3 * padding) / 2;

    function draw(container, x, y) {
      var offset = child.radius + padding / 2;
      var group = drawCircle(container, x, y, radius, color, true);
      child.draw(group, +offset, 0);
      child.draw(group, -offset, 0);
      return group;
    }

    return {
      draw: draw,
      radius: radius
    }
  }

});
