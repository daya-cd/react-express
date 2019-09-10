  
import { take, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as mutations from './mutations';
import uuid from 'uuid';

export function* taskCreationSaga(){
    while (true){
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownerID = 'u1';
        const taskID = uuid();
        yield put(mutations.createTask(taskID, groupID, ownerID));
    }
}