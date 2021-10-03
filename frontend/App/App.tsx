import {useEffect, useState} from 'react';
import List from './containers/List';
import Loader from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:4000/api/")
      .then((response) => response.json())
      .then((data) => setUsers(data));}

  useEffect(() => {
    fetchData()
      .then(() => setLoading(false))
  }, []);

  return (
    <div className="min-h-screen p-5 pb-10 bg-gray-100">
      <div className="container max-w-5xl pt-10 mx-auto">
        <p className="font-bold text-center">Find some random users</p>
        { loading && 
          <div className="flex justify-center pt-10">
           <Loader
              type="BallTriangle"
              color="#575453"
              height={30}
              width={30}
            />
          </div>
        }
        { !loading && 
          <List users={users}/>
        }
      </div>
    </div>
  );
}

export default App;
