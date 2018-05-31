var movies = [
  {	
  	id: 1,
  	title: "Ojciec Chrzestny",
    desc: "Totalnie ulubione filmy, ponadczasowe i oddające klimat. Moja ulubiona częśc druga:",
    image: "http://1.fwcdn.pl/po/10/90/1090/7196616.3.jpg"
  },

  {
  	id: 2,
    title: "China Town",
    desc: "Film o wartkiej akcji i z młodym Jackiem Nicholsonem :)",
    image: "http://1.fwcdn.pl/ph/10/27/1027/426887.1.jpg"
  },

  {
  	id: 3,
    title: "Sekretne okno",
    desc: "Film trzymający z niewiedzy do samego końca",
    image: "http://1.fwcdn.pl/po/85/86/98586/6906598.3.jpg"
  },

  {
  	id: 4,
    title: "Crazy, stiupid, love",
    desc: "Komedia, mimo tytułu wcale nie romantyczna zdecydowanie obyczajowa. Wiele Facetów w tajemnicy ją uwielbia:)",
    image: "https://is4-ssl.mzstatic.com/image/thumb/Video30/v4/fd/1f/f1/fd1ff191-8578-2fe9-a40c-ac90bd055d53/source/1200x630bb.jpg"
  },
];

var moviesElements = movies.map(function(movie) {
  return React.createElement("li", {key: movie.id},
      React.createElement("h2", {}, movie.title),
      React.createElement("p", {}, movie.desc),
      React.createElement("img",{src: movie.image},)
    );
});


var element = 
	React.createElement("div", {}, 
		React.createElement("h1", {}, "Moje ulubione filmy"),
		React.createElement("ul", {}, moviesElements)
		
	);

ReactDOM.render(element, document.getElementById("app"));
