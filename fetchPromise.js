const promiseFetchUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => {
      if (!response.ok) {
        throw new Error ('Ошибка с соединением');
      }
      return response.json();
    })
  .then(data => {
      const userDetails = data.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }));
      console.log(userDetails)
    })
  .catch(error => console.error('Ошибка:',error));
}

promiseFetchUser();