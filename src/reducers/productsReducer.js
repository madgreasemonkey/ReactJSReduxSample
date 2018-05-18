export default function productsReducer(state = [], action){
  console.log('reducer state = '+JSON.stringify(state));
  console.log('reducer action = '+JSON.stringify(action));
  return state;
}
