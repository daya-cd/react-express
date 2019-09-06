import React from 'react';
import {connect} from 'react-redux';

export const TaskList=({tasks,name})=>(
    <div>
        <h2>{name}</h2>
      {tasks.map((task,i)=>(
            <div key={i}>{task.name}</div>
      ))}
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

export const ConnectedTaskList =connect(mapStateToProps)(TaskList)