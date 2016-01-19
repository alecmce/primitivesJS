define([],
function() {

  var COLORS = {
    2: 'yellow',
    3: 'dodgerblue',
    5: 'red',
    7: 'darkorchid',
    11: 'lawngreen',
    13: 'limegreen',
    17: 'skyblue',
    19: 'salmon'
  }

  function random() {
    return 100 + Math.floor(Math.random() * 156);
  }

  return function Color(index) {
    var color = COLORS[index];
    if (!color) {
      color = 'rgb(' + [random(), random(), random()].join(',') + ')';
      COLORS[index] = color;
    }
    return color;
  }

});
