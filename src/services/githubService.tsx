import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/graphql';
const PERSONAL_ACCESS_TOKEN = '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';

export const fetchGithubData = async (): Promise<any> => {

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
        Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`,
      },
    });

    return response.data.data;

  } catch (error) {
    console.log(error);
  }
};