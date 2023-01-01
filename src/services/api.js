const KEY = "6632fe8c139b41a5a47153120230101";

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
};

export default fetchData;
