import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getProjectsQuery = gql`
  {
    projects {
      id
      title
    }
  }
`;

function displayProjects(props) {
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

  class AddTask extends Component {
    render() {
      return (
        <form>
          <div className="field">
            <label>Project:</label>
            <select>
              {displayProjects(this.props)}
            </select>
          </div>
          {/* Add other form fields here */}
        </form>
      );
    }
  }
  
  export default graphql(getProjectsQuery)(AddTask);
  