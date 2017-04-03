import Ember from 'ember';

export function calcTotalPages([limit, totalStreams, ...rest]) {
  return Math.floor(totalStreams/limit) + 1;
}

export default Ember.Helper.helper(calcTotalPages);
