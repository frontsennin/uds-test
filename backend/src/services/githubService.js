const axios = require('axios');
const config = require('../config/auth');

class GithubService {
  constructor() {
    this.api = axios.create({
      baseURL: config.github.baseURL,
      headers: {
        'Authorization': `Bearer ${config.github.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
  }

  async getRepositories(username) {
    try {
      const response = await this.api.get(`/users/${username}/repos`);
      return response.data.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        url: repo.html_url
      }));
    } catch (error) {
      console.error('GitHub API Error:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || 
        'Error fetching repositories'
      );
    }
  }
}

module.exports = new GithubService(); 