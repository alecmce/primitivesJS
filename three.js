define([],
function() {

  var ANGLE = Math.PI * 2 / 3;
  var DIVISOR = Math.cos(Math.PI / 6);

  return function Three(drawCircle, color, padding, child) {
    var offset = (child.radius + padding / 2) / DIVISOR;
    var radius = offset + child.radius + padding;

    function draw(container, x, y) {
      var group = drawCircle(container, x, y, radius, color, true);
      for (var i = 0; i < 3; ++i) {
        var angle = ANGLE * i;
        var dx = offset * Math.sin(angle);
        var dy = -offset * Math.cos(angle);
        child.draw(group, dx, dy);
      }
      return group;
    }

    return {
      draw: draw,
      radius: radius
    }
  }

});
