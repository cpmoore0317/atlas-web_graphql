import gql from 'apollo-boost';

// Query to get all tasks
export const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;

// Query to get all projects
export const getProjectsQuery = gql`
  {
    projects {
      id
      title
    }
  }
`;
