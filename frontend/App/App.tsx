import React from 'react';
import {useEffect, useState} from 'react';
import List from './containers/List';
import Loader from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [users, setUsers] = useState([]);
  const [nextPage, setNextPage] = useState(2);

  const baseUrl = "http://localhost:4000/api";

  const fetchData = () => {
    return fetch(baseUrl + "?results=8")
      .then((response) => response.json())
      .then((data) => setUsers(data));}

  useEffect(() => {
    fetchData()
      .then(() => setLoading(false))
  }, []);

  const showMore = () => {
    setLoadingMore(true)
    return fetch(baseUrl + "?results=8&page=" + nextPage)
      .then((response) => response.json())
      .then((data) => {

        const newUsers = users.concat(data);
        setUsers(newUsers);

        const page = nextPage + 1
        setNextPage(page)
        setLoadingMore(false)
      });
  };

  const loadButton = () => {
    if(loadingMore) {
      return (
       <Loader
          type="BallTriangle"
          color="#575453"
          height={20}
          width={20}
        />
      )
    } else {
      return (
        <button onClick={showMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Visa fler</button>
      )
    }
  }

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
          <div>
            <List users={users}/>
            <div className="flex justify-center mt-5">
              { loadButton() }
            </div>
          </div>
        }
      
      </div>
    </div>
  );
}

export default App;
