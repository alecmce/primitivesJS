define([
  'svg',
  'prime_factors',
  'circle',
  'primitive',
  'update_tags'
],
function(Svg, PrimeFactors, Circle, Primitive, UpdateTags) {
  var ATOM_RADIUS = 4;
  var OUTLINE_WIDTH = 2;

  var drawCircle = Circle(OUTLINE_WIDTH);
  var makePrimitive = Primitive(drawCircle, ATOM_RADIUS, ATOM_RADIUS);
  var updateTags = UpdateTags(makePrimitive);

  function make(input) {
    if (input instanceof Array) {
      return makePrimitive(input);
    } else {
      return makePrimitive(PrimeFactors(input));
    }
  }

  updateTags();

  return {
    factors: PrimeFactors,
    make: make,
    updateTags: updateTags,
    svg: svg
  }
});
