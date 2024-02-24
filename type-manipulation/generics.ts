// 🙋🏻 How to handle error for different types of data

interface CommonHandler {
  status: "success" | "fail";
  reason?: string;
}

interface User {
  id: string;
  name: string;
}

const result = {
  status: "success",
  data: { id: "1", sa: "Joy" },
  reason: "User created",
};
