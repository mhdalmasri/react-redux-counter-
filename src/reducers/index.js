const initialState = {
  show: true,
  count: 0,
  click: 0,
  status: "INIT",
  date: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        click: state.click + 1,
        status: "INCREASED",
        date: new Date(),
        show: state.show
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
        click: state.click + 1,
        status: "DECREASED",
        date: new Date(),
        show: state.show
      };
    case "RESET":
      return {
        count: 0,
        click: state.click,
        status: "RESETED",
        date: new Date(),
        show: state.show
      };
    case "TOGGLECLICK":
      return {
        show: !state.show,
        click: state.click + 1,
        date: new Date(),
        count: state.count
      };
    default:
      return state;
  }
};
