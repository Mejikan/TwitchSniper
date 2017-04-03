import Ember from 'ember';

export function calcTimeSinceStream([date, ...rest]) {
  let response = date.toString();

  let current = new Date();
  let millis = current.getTime() - date.getTime();
  let hours = Math.floor(millis/1000/60/60);
  if (hours == 0){
    // calc minutes
    let minutes = Math.floor(millis/1000/60);
    if (minutes == 0){
      response = 'Began streaming just now!';
    } else {
      response = 'Began streaming ' + minutes + ' minutes ago.';
    }
  } else {
    response = 'Began streaming ' + hours + ' hours ago.';
  }
  return response;
}

export default Ember.Helper.helper(calcTimeSinceStream);
