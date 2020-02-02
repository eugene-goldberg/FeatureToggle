var faker = require('faker');
var database = { products: [] };
for (let i=1; i<=5; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    state: faker.commerce.price(),
    inProd: false
  });
}
console.log(JSON.stringify(database));
