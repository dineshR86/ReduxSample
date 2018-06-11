//State argument is not application state but only the state this reducer is responsible for.
// state=null is an es6 syntax which means when state is not passed take null as state value.
export default function(state=null,action){
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    
return state;
}