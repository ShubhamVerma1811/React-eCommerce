import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Item 1",
    price: 34,
    id: 1,
    description: "Mast product hai",
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"',
    ratings: 4,
    brand: "Nike",
    reviews: "5,010",
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 2",
    price: 1134,
    id: 2,
    description: "Mast product hai",
    image:
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG5pa2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ratings: 3,
    brand: "Nike",
    reviews: "15,000",
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 3",
    price: 874,
    id: 3,
    description: "Mast product hai",
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"',
    ratings: 5,
    brand: "Nike",
    reviews: "330",
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 4",
    id: 4,
    description: "Mast product hai",
    price: 644,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"',
    ratings: 3,
    brand: "Nike",
    reviews: "12,470",
    tags: ["UX", "React", "Vue"],
  },
  {
    name: "Item 5",
    price: 9511,
    id: 5,
    description: "Mast product hai",
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"',
    ratings: 2,
    brand: "Nike",
    reviews: "1,000",
    tags: ["UX", "React", "Vue"],
  },
];

// TODO ACTION FILTER

export const slice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    filters: (state, action) => {
      if (action.payload == "lowest") {
        state.sort((a, b) => a.price - b.price);
      }
      if (action.payload == "highest") {
        state.sort((a, b) => b.price - a.price);
      }
      if (action.payload == "recommended") {
        return initialState;
      }
    },
  },
});

export const { filters } = slice.actions;
export default slice.reducer;
