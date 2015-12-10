export class Datasource {
  constructor () {
    'ngInject';

    const milkcocoa = new MilkCocoa("hotif8ab67j.mlkcca.com");
    this.datastore_ = milkcocoa.dataStore('pepper/app');
  }

  datastore() {
    return this.datastore_;
  }
}
