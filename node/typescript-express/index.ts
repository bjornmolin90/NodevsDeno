import { Express, Request, Response } from 'express';
import * as express from 'express';

const app: Express = express();
const port = 3000;

app.get('/small', (req: Request, res: Response) => {
    const small = require('../../data/small')
    res.send(JSON.stringify(small));
});

app.get('/medium', (req: Request, res: Response) => {
    const medium = require('../../data/medium')
    res.send(JSON.stringify(medium));
});
app.get('/big', (req: Request, res: Response) => {
    const big = require('../../data/big')
    res.send(JSON.stringify(big));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});