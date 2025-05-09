async function fetchRandomCatImage() {
  try {
    console.log('buscando imagem de gato...')
    const response = await fetch("https://api.thecatapi.com/v1/images/search")

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    const catImage = data[0];

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

  const infoElement =  document.createElement('p');
  infoElement.textContent = `ID da imagem: ${AMINEImage.id}, largura: ${AMINEImage.width}px, Altura: ${AMINEImage.height}px`

  const container = document.getElementById('AMINE-container');

  container.innerHTML = '';
  container.appendChild(imageElement);
  container.appendChild(infoElement);
}

async function loadCatImage() {
  try {
    document.getElementById('status').textContent = 'Carregando...';

    const catImage = await fetchRandomCatImage();

    displayCatImage(AMINEImage);

    document.getElementById('status').textContent = "imagem carregada com sucesso!";

  } catch (error) {
    document.getElementById('status').textContent = "Falha ao carregar imagem";
  }
}