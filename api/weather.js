// weather route handling
export default async function handler(req, res) {
  const apiKey = "232f36b248a6d3f4b730230b5203f015";
  const city_name = req.query.city;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    return res.json({
      status: response.status,
      payload: await response.json(),
    });
  }
  const data = await response.json();

  return res.json({
    status: response.status,
    temp: data.main.temp,
    city: data.name,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    weathIcon: data.weather[0].main,
  });
}
