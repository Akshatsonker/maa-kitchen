
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.post('/api/gemini', async (req, res) => {
  const { prompt } = req.body;
  
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCzo69iKO12O2h4TVK17zaOyDBmYOrCmZ8`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });
  
  res.json(await response.json());
});

app.listen(3001, () => console.log('Proxy running on port 3001'));