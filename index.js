function initInput() {
  const searchInput = document.getElementById("searchInput");
  const searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("click", function (e) {
    const searchQuery = searchInput.value;

    if (e.target.id === "searchBtn") {
      requestGIF(searchQuery);
      console.log(searchQuery);
    }
  });
  searchBar.addEventListener("keypress", function (e) {
    const searchQuery = searchInput.value;

    if (e.key === "Enter") {
      requestGIF(searchQuery);
      console.log(searchQuery);
    }
  });
}

async function requestGIF(input) {
  const apiKey = "V24mmeLDR4Xbrr9oAb1wsqYsxxC62j79";
  const url = `https://api.giphy.com/v1/gifs/translate?s=${input}&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (response.ok === false) {
      throw new Error(`Status: ${response.status}`);
    } else {
      const data = await response.json();
      dataResult(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function dataResult(data) {
  const searchResults = document.getElementById("searchResults");
  const img = document.createElement("img");
  img.src = data.data.images.downsized.url;
  searchResults.appendChild(img);

  console.log(data);
}
initInput();
