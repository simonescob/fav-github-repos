import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/graphql';
// const PERSONAL_ACCESS_TOKEN = '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';
// const PERSONAL_ACCESS_TOKEN = '9ff94b7ed643aab675d855635de29af1a4b4de8c';
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