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

// 🙋🏻 Help the vet check a property of clients' pets.
// The property should only be of that kind of animal."
interface Cat {
  name: string;
  age: number;
}
interface Dog extends Cat {
  breed: "Poodle" | "Chihuahua";
}

function printAnimalProperty<T extends Dog | Cat>(
  animal: T,
  property: keyof T
) {
  console.log(`The animal's ${String(property)} is ${animal[property]}`);
}

let cat: Cat = { name: "Alice", age: 2 };
printAnimalProperty(cat, "age");

// 🙋🏻 Prevent user from getting a key that don't exist
interface AppConfig {
  apiUrl: string;
  timeout: number;
  loggingEnabled: boolean;
}

const appConfig: AppConfig = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  loggingEnabled: true,
};

function getConfigValue<K extends keyof AppConfig>(key: K): AppConfig[K] {
  return appConfig[key];
}

const validUrl = getConfigValue("apiUrl");
const invalidUrl = getConfigValue("apiUze"); //Error should appear here
