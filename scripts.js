var movies = [
  {	
  	id: 1,
  	title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'http://1.fwcdn.pl/po/10/90/1090/7196616.3.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'http://wywrota.pl:8080/pliki/site_images/8848bded_jpeg-lg'
  },
  {
  	id: 3,
    title: 'Star Wars: Ostatni Jedi',
    desc: 'Film o tym jak Luke Skywalker założył farmę',
    image: 'https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2017/12/star-wars-the-last-jedi-gwiezdne-wojny-ostatni-jedi-recenzja-16-1180x788.jpeg'
  },
  {
  	id: 4,
    title: 'Avengers',
    desc: 'Film o grupie kolesi',
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MDMxODE3MF5BMl5BanBnXkFtZTcwMDEzOTY0Nw@@._V1_SY500_CR0,0,337,500_AL_.jpg'
  },
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img',{src: movie.image},)
    );
});


var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
		
	);

ReactDOM.render(element, document.getElementById('app'));

/*
    <div>
      <h1>Lista filmów</h1>
      <ul>
        <li>
          <h2>Harry Potter</h2>
          <p>Film o czarodzieju</p>
        </li>
        <li>
          <h2>Król Lew</h2>
          <p>Film opowiadający historię króla sawanny</p>
        </li>
      </ul>
    </div>
*/