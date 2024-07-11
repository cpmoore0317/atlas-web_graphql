import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;

function displayTasks(props) {
    console.log(props.data);
    var data = props.data;
  
    if (data.loading) {
      return <div>Loading tasks...</div>;
    } else {
      return data.tasks.map(task => {
        return (
          <li key={task.id} onClick={(e) => { this.setState({ selected: task.id }); }}>
            {task.title}
          </li>
        );
      });
    }
  }

  class TaskList extends React.Component {
    render() {
      return (
        <div>
          <ul>
            {displayTasks(this.props)}
          </ul>
        </div>
      );
    }
  }
  
  export default graphql(getTasksQuery)(TaskList);
  