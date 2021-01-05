export const categories = [
  { value: "size", name: "Размер" },
  { value: "dough", name: "Толщина" },
  { value: "sauce", name: "Соус" },
  { value: "cheese", name: "Сыр" },
  { value: "veggies", name: "Овощи" },
  { value: "meat", name: "Мясо" }
];

let HOST = process.env.REACT_APP_HOST_LOCAL;
if (process.env.NODE_ENV === "production") {
  HOST = process.env.REACT_APP_HOST;
}

export { HOST };
