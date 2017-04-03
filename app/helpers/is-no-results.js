import Ember from 'ember';

export function isNoResults([totalResults, ...rest]) {
  if (totalResults == 0){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(isNoResults);
