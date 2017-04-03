import Ember from 'ember';

export function isTypeChannels([type, ...rest]) {
  if (type == 'channels'){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(isTypeChannels);
