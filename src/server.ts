import App from './app';
import ProductController from './controllers/ProductController';

const app = new App([ new ProductController() ]);

app.listen(3000);