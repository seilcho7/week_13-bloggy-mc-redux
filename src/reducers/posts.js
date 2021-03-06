import { ACTION_CREATE_POST, ACTION_DELETE_POST, ACTION_UPDATE_POST } from "../actions";
import { generateId } from '../utils';
// A reducer is a function that accepts the current state and an action
// then calculates/returns the next new version of state
export default function posts(state={}, action={type: ''}) {
    switch(action.type) {
        case ACTION_CREATE_POST:
            // create post!
            // console.log(`You called ${action.type}`);
            const id = generateId();
            // console.log(id);
            const newState = {
                ...state,
                // To use a variable as a key
                // in an object literal,
                // wrap the variable in []
                [id]: action.payload
            };
            // To get the equivalent result, you can use the familiar
            // assignment syntax:
            // newState[id] = action.payload;
            return newState;
        break;
        case ACTION_UPDATE_POST:
            const postToUpdate = state[action.payload.id];
            if (postToUpdate) {
                return {
                    ...state,
                    [action.payload.id]: {
                        title: action.payload.title || postToUpdate.title,
                        content: action.payload.content || postToUpdate.content
                    }
                };
            } else {
                return state;
            }
        break;
        case ACTION_DELETE_POST:
            const deleteState = {
                ...state
            };
            delete deleteState[action.payload.id];
            return deleteState;
        break;
        default:
            return state;
        break;
    }
}