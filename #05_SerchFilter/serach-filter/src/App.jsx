import { useState } from 'react';
import './App.css';
import { Table } from './comp/Table';
import { Users } from './users';

function App() {

  const [query, useQuery] = useState("");

  const keys = ["first_name", "last_name", "email"]

  const search = (data) => {
    return data.filter(item => 
      keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }
  console.log(query)
  return (
    <div className="App">
      <input type="text" placeholder='Search...' className='search' onChange={e => useQuery(e.target.value)} />
      <Table data={search(Users)}/>

    </div>
  );
}

export default App;
