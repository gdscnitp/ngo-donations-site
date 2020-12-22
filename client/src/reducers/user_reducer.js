import { LOGIN, SIGN_UP, LOGOUT } from "./action_types";

export default function(prevState = {}, action) {
    let newState = {}

        // @todo
    switch(action.type) {
        case LOGIN: {

            break;
        }
        case SIGN_UP: {

            break;
        }
        case LOGOUT: {
            localStorage.removeItem( 'user' );

            break;
        }

        default: return prevState;
    }
}
