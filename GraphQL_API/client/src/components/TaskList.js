import React from 'react';
import { graphql } from 'react-apollo';
import { getTasksQuery } from '../queries/queries';

function TaskList(props) {
  function displayTasks() {
    var data = props.data;
    if (data.loading) {
      return <div>Loading tasks...</div>;
    } else {
      return data.tasks.map(task => {
        return (
          <li key={task.id} onClick={(e) => { setState({ selected: task.id }); }}>
            {task.title}
          </li>
        );
      });
    }
  }

  return (
    <div>
      <ul id="task-list">
        {displayTasks()}
      </ul>
    </div>
  );
}

export default graphql(getTasksQuery)(TaskList);
