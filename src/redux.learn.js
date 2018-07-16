import { createStore } from './redux';
const ADD_GUNS = 'ADD_GUNS';
const REMOVE_GUNS = 'REMOVE_GUNS';

function num(state=0,action){
    switch(action.type){
        case ADD_GUNS:
            return state +1;
        case REMOVE_GUNS:
            return state +1;
        default:
            return state;
    }
}   

let store = createStore(num);
console.log(store.getState());
store.subscribe(()=>{
    const num = store.getState();
    console.log(num);
});

store.dispatch({type:'ADD_GUNS'});
store.dispatch({type:'ADD_GUNS'});
store.dispatch({type:'ADD_GUNS'});


