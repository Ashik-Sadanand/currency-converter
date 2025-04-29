export async function handler(event, context) {
  const apiKey = "86d3624bf7b3e7c77e85b2a31b1cdedf"; // your real API key
  const { from, to, amount } = event.queryStringParameters;

  const url = `https://api.exchangerate.host/convert?access_key=${apiKey}&from=${from}&to=${to}&amount=${amount}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
