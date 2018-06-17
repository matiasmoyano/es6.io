/*
  Pizza Types
*/
const pizzas = ['Deep Dish', 'Peperoni', 'Hawaiian', 'Meatzza', 'Spicy Mama', 'Margherita'];

const results = pizzas.map(function(name) {
	return `Pizza ${name}`;
});
const results1 = pizzas.map((name) => {
	return `Pizza ${name}`;
});
const results2 = pizzas.map(name => `Pizza ${name}`);

const results3 = pizzas.map(() => `Cool Pizza`);

const results4 = pizzas.map((name, i) => ({name: name, position: i + 1}));

const results5 = pizzas.map((name, i) => ({name, position: i + 1}));

console.table(results5);

const cuts = ['Chuck', 'Brisket', 'Shank', 'Rib', 'Plate', 'Flank', 'Short Loin', 'Tenderloin', 'Sirloin', 'Round'];

const results6 = cuts.filter(name => name.length > 5);

console.log(results6);