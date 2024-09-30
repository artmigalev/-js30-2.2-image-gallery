const API_key = `HcZveMbMinxtGFKaRbIXz7wWrja9x-C9ncmh7B4A4M8`;
const url = `https://api.unsplash.com/search/collections/?client_id=${API_key}`;
// const main = document.querySelector(".main");


const fetchSummerCollections = async () => {
  try {
    const response = await fetch(`${url}&query=summer&per_page=12`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const { results } = await response.json();
    console.log(results);
  } catch (error) {
    console.error();
  }



  main.append(...renderCollections(results));
};
fetchSummerCollections();
function renderCollections(data) {
  const renderedCards = data.map((collection) => {
    const {
      links: { html },
      cover_photo: { alt_description, description },
    } = collection;

    return `
      <div class="card-img">
        <img
          class="img-gallery"
          src=${html}
          alt=${alt_description}
        />
        <h2 class="title-img">${description}</h2>
      </div>
    `;
  });

  return renderedCards;
}
