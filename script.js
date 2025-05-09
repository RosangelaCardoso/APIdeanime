// Função para buscar imagem da API
async function fetchRandomAnimeImage() {
  try {
    const response = await fetch('https://nekos.best/api/v2/neko');

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    console.log("Dados recebidos:", data);
    return data.results[0]; // objeto com { url, anime_name, artist_name, etc. }
  } catch (error) {
    console.error('Erro ao buscar imagem de anime:', error);
    throw error;
  }
}

// Exibir imagem e informações
function displayAnimeImage(animeImage) {
  const imageElement = document.createElement('img');
  imageElement.src = animeImage.url;
  imageElement.alt = 'Imagem de personagem de anime';

  const infoElement = document.createElement('p');
  infoElement.textContent = `Anime: ${animeImage.anime_name || 'Desconhecido'} | Artista: ${animeImage.artist_name || 'Não informado'}`;

  const container = document.getElementById('ANIME-container');
  container.innerHTML = '';
  container.appendChild(imageElement);
  container.appendChild(infoElement);
}

// Carregar imagem ao clicar
async function loadAnimeImage() {
  try {
    document.getElementById('status').textContent = 'Carregando...';
    const animeImage = await fetchRandomAnimeImage();
    displayAnimeImage(animeImage);
    document.getElementById('status').textContent = "Imagem carregada com sucesso!";
  } catch (error) {
    document.getElementById('status').textContent = "Falha ao carregar imagem.";
  }
}
