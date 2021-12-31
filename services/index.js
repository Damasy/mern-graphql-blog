import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            id
            title
            author {
              id
              name
              photo {
                url
              }
              bio
            }
            createdAt
            slug
            excerpt
            featuredPost
            featuredimage {
              url
            }
            categories {
              id
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
}