const initialState = {
  data: [],
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id,
          },
        ],
      };
    case "DELETE_TASK":
      const tasks = state.data.filter((task) => task.id !== action.id);
      return {
        ...state,
        data: tasks,
      };
    default:
      return state;
  }
};

export default tasks;
