import { createStore } from 'redux';

import { defaultState} from '../../server/state';

// create store with reducer function
export const store = createStore(
    function reducer(state=defaultState,action){
        return state;
    }
)
