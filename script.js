<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Imagem Aleatória de Anime</title>
</head>
<body>
  <h1>Imagem Aleatória de Anime (Neko)</h1>
  <button onclick="loadCatImage()">Carregar Imagem</button>
  <p id="status"></p>
  <div id="AMINE-container"></div>

  <script>
    async function fetchRandomCatImage() {
      try {
        console.log('Buscando imagem de gato...');
        const response = await fetch('https://nekos.best/api/v2/neko');

        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        const catImage = data.results[0]; // Correto!

        console.log("Imagem de gato encontrada!");
        return catImage;
      } catch (error) {
        console.error('Erro ao buscar imagem de gatos: ', error);
        throw error;
      }
    }

    function displayCatImage(AMINEImage) {
      const imageElement = document.createElement('img');
      imageElement.src = AMINEImage.url;
      imageElement.alt = 'Foto de um ANIME';
      imageElement.style.maxWidth = '100%';

      const infoElement = document.createElement('p');
      infoElement.textContent = `Anime: ${AMINEImage.anime_name} | Artista: ${AMINEImage.artist_name || 'Desconhecido'}`;

      const container = document.getElementById('AMINE-container');
      container.innerHTML = ''; // limpa conteúdo anterior
      container.appendChild(imageElement);
      container.appendChild(infoElement);
    }

    async function loadCatImage() {
      try {
        document.getElementById('status').textContent = 'Carregando...';
        const catImage = await fetchRandomCatImage();
        displayCatImage(catImage);
        document.getElementById('status').textContent = "Imagem carregada com sucesso!";
      } catch (error) {
        document.getElementById('status').textContent = "Falha ao carregar imagem";
      }
    
  </script>
</body>
</html>
