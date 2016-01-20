define([],
function() {

  var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

  return function make(elementOrType) {
    var element = elementOrType;
    if (typeof elementOrType == 'string') {
      element = document.createElementNS(SVG_NAMESPACE, elementOrType);
    }

    function append(child) {
      element.appendChild(child);
      return object;
    }

    function appendTo(container) {
      container.appendChild(element);
      return object;
    }

    function setAttribute(attribute, value) {
      element.setAttributeNS(null, attribute, value);
      return object;
    }

    function position(x, y) {
      setAttribute('transform', 'translate(' + x + ',' + y + ')');
      return object;
    }

    function scale(scalar) {
      setAttribute('transform', 'scale(' + scalar + ')');
      return object;
    }

    function remove() {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }

    var object = {
      element: element,
      append: append,
      appendTo: appendTo,
      remove: remove,
      setAttribute: setAttribute,
      position: position,
      scale: scale
    };

    return object;
  }

});
