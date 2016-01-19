define([],
function() {

  return function Atom(drawCircle, radius) {

    function drawAtom(container, x, y) {
      return drawCircle(container, x, y, radius, 'black', false);
    }

    return {
      draw: drawAtom,
      radius: radius
    }
  }

});
