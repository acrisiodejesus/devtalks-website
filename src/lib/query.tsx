import { gql } from 'graphql-request';

export const Query_Events = gql`
{
  evento {
    id
    title
    image {
      url
    }
    link
    content {
      html
    }
    description
  }
}
`;
