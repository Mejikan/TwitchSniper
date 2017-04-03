import Ember from 'ember';

export function isTypeStreams([type, ...rest]) {
  if (type == 'streams'){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(isTypeStreams);
