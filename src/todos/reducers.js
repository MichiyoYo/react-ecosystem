import { CREATE_TODO, MARK_AS_COMPLETED, REMOVE_TODO } from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      //we use state.concat instead of push becasue
      //concat doesn't mutate the array, which is very important
      return state.concat(newTodo);
    }

    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }

    case MARK_AS_COMPLETED: {
      const { text } = payload;
      const updatedState = [...state];
      const taskIdx = updatedState.findIndex((todo) => todo.text === text);
      if (taskIdx > -1) {
        updatedState[taskIdx].isCompleted = true;
        return updatedState;
      }
      return state;
    }

    default:
      return state;
  }
};
