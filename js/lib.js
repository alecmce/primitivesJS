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
    var value = input instanceof Array ? input : PrimeFactors(input);
    return makePrimitive(value);
  }

  updateTags();

  return {
    factors: PrimeFactors,
    make: make,
    updateTags: updateTags,
    svg: Svg
  }
});
