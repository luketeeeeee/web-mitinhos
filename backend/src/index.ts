import express, { Response } from 'express';
import cors from 'cors';
import log from './utils/logger';

import { usersRoutes } from './modules/users';

const port = 8080;
const url = `http://localhost:${port}`;

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/users', usersRoutes);

app.listen(port, () => {
  log.info(`servidor iniciado em ${url}`);
});
