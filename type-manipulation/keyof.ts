// 🙋🏻 You don't need an age for part-time staff, so what do you do?
type Staff = {
  id: number;
  name: string;
  age: number;
};

type PartialStaff<T> = {
  [K in keyof T]?: T[K];
};

const partTimeStaff: PartialStaff<Staff> = {
  id: 22,
  name: "Kitty",
};
