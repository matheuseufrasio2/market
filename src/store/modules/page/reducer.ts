import { Reducer } from "redux";

const INITIAL_STATE = 1;

const page: Reducer<number> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT_PAGE": {
      const { lastPage } = action.payload;
      console.log(state + 1);
      if (state > lastPage) {
        return state;
      }
      return state + 1;
    }
    case "PREVIOUS_PAGE": {
      if (state === 1) return state;
      return state - 1;
    }
    default: {
      return state;
    }
  }
};

export default page;
