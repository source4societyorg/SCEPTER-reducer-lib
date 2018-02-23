const utilities = require('@source4society/scepter-utility-lib')

const namespacedReducerHandlerFunction = (state, action, reducerKey, reducerCode) => {
  if (reducerKey !== action.reducerKey && utilities.isNotEmpty(action.type)) {
    return state
  }

  return reducerCode(state, action, reducerKey)
}

module.exports.namespacedReducerHandler = namespacedReducerHandlerFunction
