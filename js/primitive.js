define([
  'prime_factors',
  'colors',
  'circle',
  'atom',
  'two',
  'three',
  'five',
  'seven',
  'fibonacci'
],
function(PrimeFactors, Colors, Circle, Atom, Two, Three, Five, Seven, Fibonacci) {

  return function Primitive(drawCircle, atomRadius, spacing) {

    var atom = Atom(drawCircle, atomRadius);

    function makeNode(factor, node) {
      switch (factor * 1) {
        case 2:
          return Two(drawCircle, Colors(2), spacing, node);
        case 3:
          return Three(drawCircle, Colors(3), spacing, node);
        case 5:
          return Five(drawCircle, Colors(5), spacing, node);
        case 7:
          return Seven(drawCircle, Colors(7), spacing, node);
        default:
          return Fibonacci(factor, drawCircle, Colors(factor), spacing, node);
      }
    }

    return function make(factors) {
      factors = factors.reduce(function(list, factor) {
        return factor == 1 ? list : list.concat(PrimeFactors(factor));
      }, []);
      return factors.reduce(function(node, factor) {
        return makeNode(factor, node);
      }, atom);
    }
  }

});
