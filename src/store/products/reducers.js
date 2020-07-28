const initialState = [
  {
    name: "Item 1",
    price: 34,
    id: 1,
    description: "Mast product hai",
    rating: 4,
    reviews: "5,010",
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 2",
    price: 1134,
    id: 2,
    description: "Mast product hai",
    rating: 3,
    reviews: "15,000",
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 3",
    price: 874,
    id: 3,
    description: "Mast product hai",
    rating: 5,
    reviews: "330",
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 4",
    id: 4,
    description: "Mast product hai",
    price: 644,
    rating: 3,
    reviews: "12,470",
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 5",
    price: 9511,
    id: 5,
    description: "Mast product hai",
    rating: 2,
    reviews: "1,000",
    tags: ["UX", "React", "Vue"],
  },
];

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      // return [
      //   ...state,
      //   state.filter((item) => item.name === action.payload.name),
      // ];
      return [state.filter((item) => item.name.match(action.payload.item))];

    default:
      return state;
  }
};
