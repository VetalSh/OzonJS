const getData = (str) => {
  return fetch(
    `https://test-f1670-default-rtdb.firebaseio.com/goods.json`
    )
  .then((response) => {
    return response.json();
  });
};


export default getData;