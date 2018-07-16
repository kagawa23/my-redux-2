const ADD_GUNS = "ADD_GUNS"
const REMOVE_GUNS = "REMOVE_GUNS"

export function num(state=10,action){
    switch(action.type){
        case ADD_GUNS:
            return state +1;
        case REMOVE_GUNS:
            return state -1;
        default:
            return state;
    }
}

export function addGuns(){
    return {type:ADD_GUNS};
}

export function removeGuns(){
    return {type:REMOVE_GUNS};
}