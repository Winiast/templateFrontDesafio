// aqui vai ser feito as chamadas da api
let latitude;
let longitude;

export const callApi = () => {
  fetch("https://geolocation-routeasy.herokuapp.com/getLocation")
    .then((res) => res.json())
    .then((response) => response.lat);
};

// export const latELgn = () => {
//   let arrayValues = [latitude, longitude];
//   return arrayValues;
// };
