const asyncFetchUsers = async () => {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      if (!response.ok) {
        throw new Error('Нестабильное соединение');
      }
    const data = await response.json();
    console.log(data);
    } catch(error) {
      console.error('Ошибка:',error)
    }
  }
  
  asyncFetchUsers();