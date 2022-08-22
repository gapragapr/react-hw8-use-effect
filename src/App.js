import { useEffect } from 'react';
import List from './Components/List/List';
import Details from './Components/Details/Details';
import './App.css';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((response) => {return response.json()})
      .then((data) => {return setUserList(data)});
  }, [])

  useEffect(() => {
    if (!userId){
      return
    }      
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${userId}.json`)
        .then((response) => {return response.json()})
        .then((data) => {return setCurrentUser(data)})
    }, [userId])

  
  return(
    <div className="App">
      <List userList={userList} setUserID={setUserId}></List>
      {currentUser && 
        <Details user={currentUser}></Details>
      }
    </div>
  )
}

export default App;
