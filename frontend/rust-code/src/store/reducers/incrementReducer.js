const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'counter/increment':
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  };

export {counterReducer};