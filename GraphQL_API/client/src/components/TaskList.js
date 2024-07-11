import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getTasksQuery } from '../queries/queries';
import TaskDetails from './TaskDetails';

function TaskList(props) {
  const [state, setState] = useState({
    selected: null
  });

  function displayTasks() {
    var data = props.getTasksQuery;
    if (data.loading) {
      return <div>Loading tasks...</div>;
    } else {
      return data.tasks.map(task => {
        return (
          <li key={task.id} onClick={(e) => setState({ selected: task.id })}>
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
      <TaskDetails taskId={state.selected} />
    </div>
  );
}

export default compose(
  graphql(getTasksQuery, { name: 'getTasksQuery' })
)(TaskList);
