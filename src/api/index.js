// aqui vai ser feito as chamadas da api
export const callApi = () => {
  fetch("https://geolocation-routeasy.herokuapp.com/getLocation")
    .then((res) => res.json())
    .then((response) => console.log(response));
};
