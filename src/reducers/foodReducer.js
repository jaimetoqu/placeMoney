import {ADD_FOOD, DELETE_FOOD} from '../actions/types';

const initialState = {
    foodList: []
}

const foodReducer = (state = initialState, action =>{
    switch(action.type) {
        case ADD_FOOD:
            return {...state,
                foodList: state.foodList.concat({
                    id: Math.random(),
                    name: action.data,
                    street: 'Providencia',
                    city: 'Santiago',
                    state: 'Region Metropolitana'
                })
            }
        case DELETE_FOOD:
            return;
        default:
            return state;
    }
})

export default foodReducer;