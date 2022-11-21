import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';

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
