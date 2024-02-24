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
