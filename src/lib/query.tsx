import { gql } from 'graphql-request';

export const Query_Events = gql`
  {
    events {
      id
      title
      slug
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
`;
