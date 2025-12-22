const loader = document.getElementById("loader");
const items = document.getElementById("items");
const URL = "https://students.netoservices.ru/nestjs-backend/slow-get-courses";
const CACHE_KEY = "currencyData";

function renderCurrencies(data){
  items.innerHTML = "";

  const valutes = data.response.Valute;

  for (const key in valutes){
    const currency = valutes[key];

    const item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `
      <div class="item__code">${currency.CharCode}</div>
      <div class="item__value">${currency.Value}</div>
      <div class="item__currency">руб.</div>
    `;

    items.appendChild(item);
  }

}

const cachedData = localStorage.getItem(CACHE_KEY);

if (cachedData) renderCurrencies(JSON.parse(cachedData));

const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.responseType = "json";
xhr.send();

xhr.onload = () => {
  const data = xhr.response;
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  renderCurrencies(data);
  loader.classList.remove("loader_active");

};