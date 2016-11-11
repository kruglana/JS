import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/taskMy', (req, res) =>{
  const summary = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(summary.toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
