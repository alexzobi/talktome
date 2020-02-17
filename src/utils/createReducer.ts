import { Action } from 'redux';

export default function createReducer(obj, initialState) {
  return (state = initialState, action: Action = null) => {
    if (!action || !action.type || !obj[action.type]) {
      return state;
    }

    const nextState = obj[action.type](state, action);
    return { ...state, ...nextState };
  };
}
