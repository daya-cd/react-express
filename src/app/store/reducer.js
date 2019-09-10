  
import { combineReducers } from 'redux';
import * as mutations from './mutations'

import { defaultState} from '../../server/state';
export const reducer = combineReducers({
    
    tasks(tasks = defaultState.tasks,action){
        switch(action.type) {
            case mutations.CREATE_TASK:
                return [...tasks,{
                    id:action.taskID,
                    name:"New Task",
                    group:action.groupID,
                    owner:action.ownerID,
                    isComplete:false
                }]
        }
        return tasks;
    },
    groups:(groups = defaultState.groups,action)=>{
        return groups;
    },
    users:(users = defaultState.users,action)=>{
        return users;
    },
    comments:(comments = defaultState.comments,action)=>{
        return comments;
    },

});