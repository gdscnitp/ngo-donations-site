import { STORE_AUTH, CLEAR_AUTH } from "./action_types";

function clearStorage() {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
}

/**
 * 
 * @param rememberMe - Whether the user to be stored permanently (until logged out), or only for session 
 * 
 * @note -> Can be helpful, commented only since eslint gives this as warning hence blocking the deploy
 */
// function choseStorage(rememberMe) {
//     return rememberMe ? localStorage : sessionStorage;
// }

const initialState = {
    user: JSON.parse( localStorage.getItem('user') ) || JSON.parse( sessionStorage.getItem('user') ),
    isLoggedIn: (localStorage.getItem('user') || sessionStorage.getItem('user')) ? true : false// if use object present in storage then consider Logged in ELSE logged out
}

export default function AuthReducer(state = initialState, action) {
        // @todo
    switch(action.type) {
        case STORE_AUTH: {
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
        }

        case CLEAR_AUTH: {
            clearStorage();

            return {
                ...state,
                user: null,
                isLoggedIn: false
            }
        }

        default: return state;
    }
}
