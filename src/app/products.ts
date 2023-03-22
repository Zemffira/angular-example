export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Стильный телефон с большим экраном'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Телефон с лучшей камерой'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Нестареющая классика с привычным функционалом'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/