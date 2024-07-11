import gql from 'apollo-boost';

export const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;

export const getProjectsQuery = gql`
  {
    projects {
      id
      title
    }
  }
`;

export const addTaskMutation = gql`
  mutation($title: String!, $weight: Int!, $description: String!, $projectId: ID!) {
    addTask(title: $title, weight: $weight, description: $description, projectId: $projectId) {
      id
      title
    }
  }
`;

export const addProjectMutation = gql`
  mutation($title: String!, $weight: Int!, $description: String!) {
    addProject(title: $title, weight: $weight, description: $description) {
      id
      title
    }
  }
`;
