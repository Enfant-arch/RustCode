const initialState = {
     count: 0 
  };
  
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/increment':
        return { ...state,  count: state.count + 1  };
        default:
        return state;
    }
};

export {counterReducer}
