const initialState = [
  {
    name: "Item 1",
    price: 34,
    id: 1,
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 2",
    price: 34,
    id: 2,
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 3",
    price: 34,
    id: 3,
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 4",
    price: 34,
    id: 4,
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 5",
    price: 34,
    id: 5,
    tags: ["UX", "React", "Vue"],
  },
];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITEM":
      return state;

    default:
      return state;
  }
};
