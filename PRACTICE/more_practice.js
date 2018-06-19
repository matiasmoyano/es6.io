/*
  A list of inventors
*/
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879 },
  { first: 'Isaac', last: 'Newton', year: 1643 },
  { first: 'Galileo', last: 'Galilei', year: 1564 },
  { first: 'Marie', last: 'Curie', year: 1867 },
  { first: 'Matt', last: 'Moyano', year: 1977 },
  { first: 'Johannes', last: 'Kepler', year: 1571 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
  { first: 'Max', last: 'Planck', year: 1858 }
];

const markup = `<div>
					<h1>Inventors</h1>
						${inventors.map(inventor => `<p>${inventor.first} ${inventor.last} ${inventor.year ? `(Age: ${2018 - inventor.year})` : ``}</p>`).join('')}
				</div>`;

// document.body.innerHTML = markup;
const selector = document.querySelector('#container');
selector.innerHTML = markup;