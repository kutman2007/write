import React from 'react';
import './App.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import d from "./components/d.jpeg"
import s from "./components/s.png"
// JSON data with the list of users
const jsonData = {
  "page": 1,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 1,
      "email": "argenduishobekov@gmail.com",
      "first_name": "Argen",
      "last_name": "Duishobekov",
      "avatar": "https://avatars.githubusercontent.com/u/76588142?v=4"
    },
    {
      "id": 2,
      "email": "kyialkiziyeva@gmail.com",
      "first_name": "Kyial",
      "last_name": "Kiziyeva",
      "avatar": "https://avatars.githubusercontent.com/u/116427081?v=4"
    },
    {
      "id": 3,
      "email": "adilkanatbecov@gmail.com",
      "first_name": "Adil",
      "last_name": "Kanatbecov",
      "avatar": d
    },
    {
      "id": 4,
      "email": "anjelapsamatova@gmail.com",
      "first_name": "Anjela",
      "last_name": "Apsamatova",
      "avatar": "https://avatars.githubusercontent.com/u/116427072?v=4"
    },
    {
      "id": 5,
      "email": "siymikdushebaev@gmail.com",
      "first_name": "Siymik",
      "last_name": "Dushebaev",
      "avatar": s
    },
    {
      "id": 6,
      "email": "manapmalikov@gmail.com",
      "first_name": "Manap",
      "last_name": "Malikov",
      "avatar": "data:image/png;base64,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"
    },
  ],
  "support": {
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
};

function App() {
  const [users, setuser] = React.useState([]);
  const [initsted, setinisted] = React.useState([]);
  const [sacsess, setsascsess] = React.useState(false);
  const [loading, setloading] = React.useState(true);
  const [Search, setSearch] = React.useState('');

  React.useEffect(() => {
    // Set the users state with the jsonData data
    setuser(jsonData.data);
    setloading(false);
  }, []);

  const onChage = (event) => {
    setSearch(event.target.value);
  };

  const onclickinist = (id) => {
    if (initsted.includes(id)) {
      setinisted((prev) => prev.filter((_id) => _id !== id));
    } else {
      setinisted((prev) => [...prev, id]);
    }
  };

  const onclicksas = () => {
    setsascsess(true);
  };

  return (
    <div className="App">
      {sacsess ? <Success count={initsted.length} /> : <Users onChage={onChage}
        initsted={initsted}
        onclickinist={onclickinist}
        Search={Search}
        items={users}
        loading={loading}
        onclicksas={onclicksas}
      />}
    </div>
  );
}

export default App;
