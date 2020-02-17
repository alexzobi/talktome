import { AsyncStorage } from 'react-native';

let cache = {};

export default (key, selector) => ({
  load() {
    return AsyncStorage.getItem(key).then(
      jsonState => JSON.parse(jsonState) || {}
    );
  },

  save(state) {
    const selectedState = selector(state);

    const jsonState = JSON.stringify(selectedState);

    if (jsonState === cache) {
      return Promise.resolve();
    }

    cache = jsonState;

    return AsyncStorage.setItem(key, jsonState);
  },
});
