import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/graphql';
// const PERSONAL_ACCESS_TOKEN = '95c3c4e5954e4c5418cbd768219548faaa4d2740';

export const fetchGithubData = async (access_token: string): Promise<any> => {

  try {
    const response = await axios.post(GITHUB_API_URL, {
      query: `
        query {
          user(login: "simonescob") {
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