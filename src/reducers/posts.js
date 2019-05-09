import { ACTION_CREATE_POST } from "../actions";

// A reducer is a function that accepts the current state and an action
// then calculates/returns the next new version of state
export function posts(state={}, action={type: ''}) {
    switch(action.type) {
        case ACTION_CREATE_POST:
            // create post!
            console.log(`You called ${action.type}`);
            return;
        break;
        default:
            return state;
        break;
    }
}