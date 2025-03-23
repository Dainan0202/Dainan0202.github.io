const movies = [
    { id: 1, title: "Encontros e desencontros: Drama", synopsis: "Bob é um ator decadente e está no Japão para fazer um comercial. Charlotte está acompanhando seu marido ausente. Por acaso, eles se cruzam e rodam juntos por Tóquio.", image: 'image/encontros.jpg' },
    { id: 2, title: "Interstellar:", synopsis: "Uma equipe de astronautas viaja por um buraco de minhoca para encontrar um novo lar para a humanidade.", image: 'image/interstelar.png' },
    { id: 3, title: "O primeiro homem:", synopsis: "A fascinante história por trás da primeira missão tripulada à Lua, contada pela perspectiva do astronauta Neil Armstrong.", image: 'image/homem.jpeg' },
    { id: 4, title: "Chico Bento e a goiabera maraviosa:", synopsis: "Chico Bento passou a vida catando goiabas na goiabeira do Nhô Lau. Mas, agora que o Dotô Agripino vai construir uma estrada que vai derrubar a goiabeira, Chico e seus amigos vão fazer de tudo pra impedir.", image: 'image/chico.jpeg' },
    { id: 5, title: "Nosso sonho:", synopsis: "A dupla de funk da década de 90 conta uma história de amizade e superação. Claudinho e Buchecha conquistaram o Brasil e transformaram o cenário musical nacional.", image: 'image/nosso.jpg' },
    { id: 6, title: "Capitão fantástico", synopsis: "Um pai cria seus seis filhos longe da civilização.", image: 'image/capitao.webp' }
];

const moviesContainer = document.querySelector('.movies-container');
const movieTitle = document.getElementById('movie-title');

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie');
    
    movieCard.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.synopsis}</p>
    `;
    
    movieCard.addEventListener('click', () => {
        movieTitle.textContent = `Você escolheu: ${movie.title} mostre para Dainan ( pois o site ainda não tem um bando de dados para ela ver de longe)`;
    });
    
    moviesContainer.appendChild(movieCard);
});
