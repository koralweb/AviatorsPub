import {action, makeObservable, observable} from 'mobx';
import menuList from '../data/menuList';

class Products {
  list = [...menuList];

  constructor() {
    makeObservable(this, {
      list: observable,
      addProduct: action,
      removeProduct: action,
      refreshCount: action,
      removeAllProducts: action,
    });
  }

  addProduct(id, cnt) {
    this.list.find(el => el.id === id).count = cnt;
    this.list.find(el => el.id === id).added = true;
  }

  removeProduct(id) {
    this.list.find(el => el.id === id).added = false;
  }

  removeAllProducts() {
    this.list.forEach(el => {
      el.added = false;
      el.count = 1;
    });
  }

  refreshCount(id) {
    this.list.find(el => el.id === id).count = 1;
  }
}

const products = new Products();

export default products;
