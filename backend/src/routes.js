const express = require('express');
const githubService = require('./services/githubService');

const router = express.Router();

router.get('/repos/:username', async (req, res) => {
  try {
    const repos = await githubService.getRepositories(req.params.username);
    res.json(repos);
  } catch (error) {
    console.error('Route Error:', error);
    res.status(500).json({ 
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

module.exports = router; 