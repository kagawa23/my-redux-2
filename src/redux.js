export function createStore(reducer){
    let currentState;
    let currentListeners = [];
    function getState(){
        return currentState;
    }
    function dispatch(action){
        currentState = reducer(currentState,action);
        currentListeners.forEach(v=>v());
        return action;
    }
    function subscribe(listener){
        currentListeners.push(listener)
    }
    dispatch({type:'@immoc/init'})
    return {getState,dispatch,subscribe}
}