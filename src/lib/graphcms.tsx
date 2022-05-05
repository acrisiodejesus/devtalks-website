import { GraphQLClient } from 'graphql-request';
const graphcms_token = process.env.GRAPHCMS_TOKEN;
const graphcms_client = process.env.GRAPHCMS_CLIENT;

export const graphcms = new GraphQLClient(`${graphcms_client}`,
  {
    headers: {
      Authorization: `Bearer ${graphcms_token}`
    }
  }
);