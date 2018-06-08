const COLORS: { [key: number]: string } = {
  2: 'yellow',
  3: 'dodgerblue',
  5: 'red',
  7: 'darkorchid',
  11: 'lawngreen',
  13: 'limegreen',
  17: 'skyblue',
  19: 'salmon'
};

export function getColor(index: number): string {
  var color = COLORS[index];
  if (!color) {
    COLORS[index] = `rgb(${random()},${random()},${random()})`;
  }
  return color;
}

function random() {
  return 100 + Math.floor(Math.random() * 156);
}