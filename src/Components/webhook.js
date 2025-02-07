const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


app.post('/quiz-webhook', (req, res) => {
  const { score, user } = req.body;
  console.log(`Received Quiz Score: ${score} for User: ${user}`);
  res.status(200).send('Data received!');
});

app.listen(5000, () => {
  console.log('Listening for quiz results on port 5000...');
});
