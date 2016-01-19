define([],
function() {

  var ANGLE = Math.PI / 3;

  return function Seven(drawCircle, color, padding, child) {
    var offset = 2 * child.radius + padding;
    var radius = offset + child.radius + padding;

    function draw(container, x, y) {
      var group = drawCircle(container, x, y, radius, color, true);
      child.draw(group, 0, 0);
      for (var i = 0; i < 6; ++i) {
        var angle = ANGLE * i;
        var dx = offset * Math.sin(angle);
        var dy = -offset * Math.cos(angle);
        child.draw(group, dx, -dy);
      }
      return group;
    }

    return {
      draw: draw,
      radius: radius
    }
  }

});
