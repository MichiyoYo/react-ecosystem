//ACTIONS are the constants we switch on in the reducer
export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_AS_COMPLETED = "MARK_AS_COMPLETED";

//ACTION CREATORS are functions that return an action object
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});

export const markAsCompleted = (text) => ({
  type: MARK_AS_COMPLETED,
  payload: { text },
});
