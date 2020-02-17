import createReducer from '../../../utils/createReducer';
import initialState from './initialState';
import { UPDATE_NETWORK_STATUS } from './actions';

const testItemReducer = {
  [UPDATE_NETWORK_STATUS]: (state, { payload = {}, error = null }) => ({
    ...state,
    ...payload,
    networkError: error,
  }),
};

export default createReducer(testItemReducer, initialState);
