import axios from 'axios';
const TOKEN = import.meta.env.VITE_GIT_TOKEN;

export const customAxios = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react/issues?state=open&sort=comments',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});
