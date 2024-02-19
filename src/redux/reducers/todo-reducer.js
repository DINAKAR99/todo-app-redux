import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../action/action-types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      //add todo
      console.log("Adding Todo");
      console.log(action.payload);
      return [...state, action.payload];
    case DELETE_TODO:
      //delete todo
      const newState = state.filter((todo) => todo.id !== action.payload);
      console.log("dsdscc");

      return newState;
    case UPDATE_TODO:
      //update todo
      const updateState = state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            title: action.payload.todo.title,
            description: action.payload.todo.description,
            id: todo.id,
          };
        } else {
          return todo;
        }
      });
      console.log("in update tod:", updateState);
      return updateState;
    default:
      return state;
  }
};
