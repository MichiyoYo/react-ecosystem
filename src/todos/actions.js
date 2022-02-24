//ACTIONS are the constants we switch on in the reducer
export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

//ACTION CREATORS are functions that return an action object
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});
