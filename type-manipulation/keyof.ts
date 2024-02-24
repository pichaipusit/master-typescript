// 🙋🏻 You don't need an age for part-time staff, so what do you do?
type Staff = {
  id: number;
  name: string;
  age: number;
};

type PartialStaff = {};

const partTimeStaff: Staff = {
  id: 22,
  name: "Kitty",
};
