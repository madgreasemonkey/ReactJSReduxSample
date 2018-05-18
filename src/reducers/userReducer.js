import { UPDATE_USER } from '../actions/user-actions';

export default function userReducer(state='', { type, payload }){
  console.log('reducer state = '+JSON.stringify(state));
  console.log('reducer action = '+JSON.stringify(type));
  switch (type) {
    case 'UPDATE_USER':
      return payload.user;
    default:
      return state;
  }
}
