import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/graphql';

export const fetchGithubData = async (access_token: string, username: string): Promise<any> => {

  try {
    const response = await axios.post(GITHUB_API_URL, {
      query: `
        query {
          user(login: "${username}") {
            name
            login
            email
            repositories(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
              nodes {
                id
                name
                description
                url
              }
            }
          }
        }
      `,
    }, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return response.data.data;

  } catch (error) {
    console.log(error);
  }
};