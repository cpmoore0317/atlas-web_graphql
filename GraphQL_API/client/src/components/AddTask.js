import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getProjectsQuery } from '../queries/queries';

function AddTask(props) {
  const [state, setState] = useState({
    title: '',
    weight: 0,
    description: '',
    projectId: ''
  });

  function displayProjects() {
    var data = props.data;
    if (data.loading) {
      return <option>Loading projects...</option>;
    } else {
      return data.projects.map(project => {
        return (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        );
      });
    }
  }

  return (
    <form id="add-task">
      <div className="field">
        <label>Task title:</label>
        <input type="text" onChange={(e) => setState({ ...state, title: e.target.value })} />
      </div>
      <div className="field">
        <label>Weight:</label>
        <input type="number" onChange={(e) => setState({ ...state, weight: parseInt(e.target.value) })} />
      </div>
      <div className="field">
        <label>Description:</label>
        <input type="text" onChange={(e) => setState({ ...state, description: e.target.value })} />
      </div>
      <div className="field">
        <label>Project:</label>
        <select onChange={(e) => setState({ ...state, projectId: e.target.value })}>
          <option>Select project</option>
          {displayProjects()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default graphql(getProjectsQuery)(AddTask);
