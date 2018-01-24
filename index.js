export const namespacedReducerHandler = (state, action, reducerKey, reducerCode) => {
  if (reducerKey !== action.reducerKey && action.type)  {
    return state
  }

  return reducerCode(state, action, reducerKey)
}
