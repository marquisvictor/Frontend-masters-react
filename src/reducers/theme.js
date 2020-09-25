export default function theme(state = "Seattle, WA", action) {
    switch (action.type) {
      case "CHANGE_THEME":
        return action.payload;
      default:
        return state;
    }
  }