import express from 'express';
import cors from 'cors';
import log from './utils/logger';

import { usersRoutes } from './modules/users';
import { itemsRoutes } from './modules/items';
import { photosRoutes } from './modules/photos';

const port = 8080;
const url = `http://localhost:${port}`;

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/users', usersRoutes);
app.use('/items', itemsRoutes);
app.use('/photos', photosRoutes);

app.listen(port, () => {
  log.info(`servidor iniciado em ${url}`);
});
