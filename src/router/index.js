import Product from '../components/Product';
import Layout from '../components/Layout';
import App from '../App';

export default {
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/product'
    },
    {
      path: '/product/:shop_id',
      component: Layout,
    },
    {
      path: '/product/:shop_id/:user_id',
      component: Layout,
    }
      // {
      //   path: '/product/:shop_id',
      //   component: Product,
      // }
  ]
}
