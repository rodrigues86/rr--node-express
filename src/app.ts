import express from 'express';
import bodyParser from 'body-parser';
import TopicRouter from './topic/topic.router';

const app = express();
app.use(bodyParser.json());

app.use('/api', TopicRouter);

export default app;
