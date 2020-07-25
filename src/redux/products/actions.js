export const getItems = (items) => {
  return {
    type: "GET_ITEM",
    payload: items,
  };
};
