// 🙋🏻 Fix this, so u can accept both arg types in 1 func
interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return { ...obj };
}
function parseCoordinateFromNumber(x: number, y: number): Coordinate {
  return { x, y };
}
