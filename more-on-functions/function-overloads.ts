// 🙋🏻 Fix this, so u can accept both arg types in 1 func
interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object") {
    coord = { ...(arg1 as Coordinate) };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}

console.log(parseCoordinate({ x: 10, y: 20 }));
console.log(parseCoordinate(30, 40));

// 🙋🏻 What if u want to accept this too?
console.log(parseCoordinate("x: 11, y: 12"));
