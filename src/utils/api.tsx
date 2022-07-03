const BASE_URL = "https://62af1c073bbf46a3521c2bcf.mockapi.io/mock";

export const ApiPOSTUtils = async (endpoint: string, body: any) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(body);

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(`${BASE_URL}${endpoint}`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export const ApiGETUtils = async (endpoint: string) => {
  var requestOptions: any = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${BASE_URL}${endpoint}`, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};
