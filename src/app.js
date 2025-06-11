import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('PlanOcean Server is running'));

export default app;
