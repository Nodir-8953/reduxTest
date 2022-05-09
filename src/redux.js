const redux = require('redux')

const initialState = {
    counter: 0
}

//reducer
const reducer =(state = initialState, action)=>{
    if(action.type === 'Add'){
        return{
            counter: state.counter+1
        }
    }
    if(action.type === 'Sub'){
        return{
            counter: state.counter-1
        }
    }
    if(action.type === 'AddNumber')
        return{
            counter: state.counter + action.value
        }
    return state
}

//stores
const store = redux.createStore(reducer)
store.subscribe(()=>{
    console.log('Subscribe', store.getState());
})
//action
const addCounter = {
    type: 'Add',
}
store.dispatch(addCounter)
store.dispatch({type: 'Sub'})
store.dispatch({type: 'AddNumber', value: 20})
