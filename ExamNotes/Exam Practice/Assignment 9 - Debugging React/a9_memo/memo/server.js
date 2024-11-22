import express from 'express';
import fs from 'fs';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/recipes', (req, res) => {
  fs.readFile('public/recipes.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});