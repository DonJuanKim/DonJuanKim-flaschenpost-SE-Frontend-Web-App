import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterServiceService {
  constructor() {}
  sortByPrice(bottles: any, ascendingOrder: boolean) {
    return bottles.sort((a: any, b: any) => {
      if (ascendingOrder) {
        return a.articles[0].price - b.articles[0].price;
      } else {
        return b.articles[0].price - a.articles[0].price;
      }
    });
  }
  filterExpensiveBeers(bottles: any) {
    return bottles.filter((bottle: any) => {
      const str = bottle.articles[0].pricePerUnitText;
      const priceRegex = /(\d+(?:,\d+)?)/;
      const match = str.match(priceRegex);
      const price = match ? parseFloat(match[1].replace(',', '.')) : null;
      return price ? price <= 2 : null;
    });
  }
}
