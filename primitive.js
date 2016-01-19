define([
  'primitive/prime_factors',
  'primitive/colors',
  'primitive/circle',
  'primitive/atom',
  'primitive/two',
  'primitive/three',
  'primitive/five',
  'primitive/seven',
  'primitive/fibonacci'
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
        return list.concat(PrimeFactors(factor));
      }, []);
      return factors.reduce(function(node, factor) {
        return makeNode(factor, node);
      }, atom);
    }
  }

});