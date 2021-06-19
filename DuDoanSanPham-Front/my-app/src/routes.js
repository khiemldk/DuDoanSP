import DetailProduct from './DetailProduct/DetailProduct'
import Product from './Product/Product'
const routes = [
  {
    path: '/product/:id',
    exact: true,
    component: DetailProduct, Product
  },
  {
    path: '/',
    exact: true,
    component: Product
  }

];
export default routes;