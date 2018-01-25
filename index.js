import utilities from '@source4society/scepter-utility-lib'
import { Map as immutableMap } from 'immutable'

export const namespacedReducerHandler = (state, action, reducerKey, reducerCode) => {
  if (reducerKey !== action.reducerKey && action.type)  {
    return state
  }

  return reducerCode(state, action, reducerKey)
}

export const setFieldDataValues = (formData, fieldData) => {  
  let updatedFieldData = fieldData
  for ( let field of fieldData.get('data') ) {
    let valueData = formData[field[0]];
    if (utilities.isNotEmpty(valueData)) {
      let checkedData = utilities.ifTrueElseDefault(
        field[1].get('widget') === 'checkbox', 
        formData[field[0]], 
        utilities.ifTrueElseDefault(
          utilities.isNotEmpty(fieldData.get('views')) && utilities.isNotEmpty(fieldData.getIn(['views',field[0]])), 
          fieldData.getIn(['views',field[0], 'value']),
          false 
        )
      );
      updatedFieldData = updatedFieldData.setIn(['views',field[0]], immutableMap({ value: valueData, isValid: true, checked: checkedData }));
    }
  }

  return updatedFieldData;
}


export const fetchedDataReducer = (state, fieldData, formData, reducerKey) => {
  let updatedFieldData = setFieldDataValues(formData, fieldData)
  return state
    .set(reducerKey, updatedFieldData)
}

