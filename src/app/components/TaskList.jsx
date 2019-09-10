import React from 'react';
import {connect} from 'react-redux';

import {requestTaskCreation} from '../store/mutations';

export const TaskList=({tasks,name,createNewTask,id})=>(
    <div>
        <h2>{name}</h2>
      {tasks.map((task,i)=>(
            <div key={i}>{task.name}
            </div>
            
            ))}
            <div>
            <button onClick={()=>createNewTask(id)}>Add New</button>
        </div>
    </div>
);

const mapStateToProps=(state,ownProps)=>{

    let groupID=ownProps.id;
    return{
        name:ownProps.name,
        id:ownProps.id,
        tasks:state.tasks.filter(task=>task.group===groupID)
    };
};

const mapDispatchToProps = (dispatch, {id})=>({
    createNewTask(){
     
        dispatch(requestTaskCreation(id));
    }
});

export const ConnectedTaskList =connect(mapStateToProps,mapDispatchToProps)(TaskList)