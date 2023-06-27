import HomeScreen from './HomeScreen';
import MarketScreen from './MarketScreen';
import CartScreen from './CartScreen';
import OrderScreen from './OrderScreen';
import BroadcastsScreen from './BroadcastsScreen';
import ContactsScreen from './ContactsScreen';

const screensList = [
  {
    name: 'Home',
    component: HomeScreen,
    title: 'Главная',
    icon: 'home',
  },
  {
    name: 'Market',
    component: MarketScreen,
    title: 'Магазин',
    icon: 'handshake',
  },
  {
    name: 'Cart',
    component: CartScreen,
    title: 'Корзина',
    icon: 'shopping-cart',
  },
  {
    name: 'Order',
    component: OrderScreen,
    title: 'Бронь столика',
    icon: 'tag',
  },
  {
    name: 'Broadcasts',
    component: BroadcastsScreen,
    title: 'Трансляции',
    icon: 'file-text',
  },
  {
    name: 'Contacts',
    component: ContactsScreen,
    title: 'Контакты',
    icon: 'shield',
  },
];

export default screensList;
