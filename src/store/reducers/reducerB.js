
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        "bbb":"bbbb"
      };
    }
    default:
      return state;
  }
}