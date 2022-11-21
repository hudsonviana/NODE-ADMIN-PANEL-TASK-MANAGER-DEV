import 'dotenv/config';

import './database';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';

AdminJS.registerAdapter(AdminJSSequelize);

const port = 3000;

const app = express();

const adminJS = new AdminJS({
  databases: [],
  rootPath: '/admin',
  resources: [],
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);

app.listen(port, () => {
  console.log(`AdminJS is running in http://localhost:${port}${adminJS.options.rootPath}`);
});

// https://www.youtube.com/watch?v=_pLOceLpRjo
// parei no min: 43:00