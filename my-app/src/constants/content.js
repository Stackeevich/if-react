import React from 'react';

const [data, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

export default data;
