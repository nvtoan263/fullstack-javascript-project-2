import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

import userRoutes from './handlers/user';
import productRoutes from './handlers/product';
import orderRoutes from './handlers/order_controller';

const app: express.Application = express();
let port = 3000;
const address: string = `127.0.0.1:${port}`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function (req: Request, res: Response) {
    res.send('Hello! This is Storefront Application');
})

userRoutes(app);
productRoutes(app);
orderRoutes(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
})

export default app;