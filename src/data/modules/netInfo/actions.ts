export const UPDATE_NETWORK_STATUS = 'netInfo/UPDATE_NETWORK_STATUS';

export const updateNetworkStatus = networkInfo => ({
  type: UPDATE_NETWORK_STATUS,
  payload: networkInfo,
});
