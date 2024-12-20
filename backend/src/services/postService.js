const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com';

class PostService {
  async getPosts() {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      const formattedData = response.data.map(post => ({
        id: post.id,
        title: this.formatTitle(post.title),
        body: this.formatBody(post.body),
        summary: this.createSummary(post.body)
      }));
      return formattedData;
    } catch (error) {
      throw new Error('Error fetching posts');
    }
  }

  async getPostById(id) {
    try {
      const response = await axios.get(`${API_URL}/posts/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching post');
    }
  }

  formatTitle(title) {
    return title.charAt(0).toUpperCase() + title.slice(1);
  }

  formatBody(body) {
    return body.split('\n').map(paragraph => paragraph.trim()).join('\n');
  }

  createSummary(body) {
    return body.slice(0, 100) + '...';
  }
}

module.exports = new PostService(); 