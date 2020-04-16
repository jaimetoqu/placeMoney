import {ADD_FOOD, DELETE_FOOD} from './types';

export const addFood = (food) => {
    {
        type: ADD_FOOD,
        data: food
    }
};

export const deleteFood = (id) => {
    {
        type: DELETE_FOOD,
        id: id
    }
};