// 🙋🏻 How to handle error for different types of data
interface CommonHandler<T> {
  status: "success" | "fail";
  data?: T;
  reason?: string;
}

interface User {
  id: string;
  name: string;
}

const result: CommonHandler<User> = {
  status: "success",
  data: { id: "1", name: "Joy" },
  reason: "User created",
};

// 🙋🏻 There're many kinds of book in the store with the same base data.
// How can we prevent the imposter book that don't have base data?
interface Item {
  id: number;
  name: string;
}
type CheckType<T> = T extends Item ? T : never;

const item: CheckType<Item> = {
  id: 0,
  name: "Jess",
};

interface BigBook extends Item {
  onSale: boolean;
}
const book: CheckType<BigBook> = {
  id: 0,
  name: "Jess",
  onSale: true,
};
