test('namespacedReducerHandler returns if the reducer key does not match the key and there is an action type, otherwise runs the reducer code', (done) => {
  const namespacedReducerHandler = require('../index').namespacedReducerHandler
  const mockState = { hasProperties: 'mockState' }
  const mockReducerKey = 'mockReducerKey'
  const mockActionNoKey = { hasProperties: 'mockActionNoKey', type: 'mockType' }
  const mockActionNoType = { hasProperties: 'mockActionNoType', reducerKey: 'mockInvalidReducerKey', type: 'mockType' }
  const mockActionValid = { hasProperties: 'mockActionValid', reducerKey: mockReducerKey, type: 'mockType' }
  const mockReducerCode = (state, action, reducerKey) => {
    expect(state).toEqual(mockState)
    expect(action).toEqual(mockActionValid)
    expect(reducerKey).toEqual(mockReducerKey)
    done()
  }
  expect(namespacedReducerHandler(mockState, mockActionNoKey, mockReducerKey, mockReducerCode)).toEqual(mockState)
  expect(namespacedReducerHandler(mockState, mockActionNoType, mockReducerKey, mockReducerCode)).toEqual(mockState)
  namespacedReducerHandler(mockState, mockActionValid, mockReducerKey, mockReducerCode)
})
