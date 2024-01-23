import './App.css';
import Navbar from './componet/Navbar';
import About from './componet/About';

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Users from './componet/Users';
import Search from './componet/Search';
import UserDetail from './componet/UserDetail';

function App() {
  
  
  const [users,setUsers]=useState([]);
  const [user,setUser]=useState({});
  const [repose,setRepose]=useState([]);

  //for our reference
  // useEffect(()=>{
  //   (async()=>{
  //     const res= await axios.get('https://api.github.com/users');
  //     setUsers(res.data);
 
  //   })()
   
 
  // },[])

  const searchName = async (name) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
    setUsers(res.data.items);

  }

  const showClear = () => {
    return users.length>0?true:false;
  }
 
  const clearProf = () => {
    setUsers([])

}

  //to get the details of the individual user

  const getDetails=async(login)=>{
    const res=await axios.get(`https://api.github.com/users/${login}`);
    setUser(res.data);
  }

  //to get repositoy

  const getRepo=async(username) => {
    const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=asc`);
    setRepose(res.data);
  }
  

  return (
    <>
      <Router>
        
        <Navbar />
        <div className="container">
          
          <Routes>
            
          <Route
              path="/"
              element={
                <>
                <Search
                  searchName={searchName}
                  showClear={showClear}
                  clearProf={clearProf}
                />
                <Users
                 users={users} />
                </>
                
                
              }
            />
            
            <Route path="/about" element={<About /> }/>
            <Route path="/user/:anything" element={
            <>
            <UserDetail
              getDetails={getDetails}
              user={user} 
              getRepo={getRepo}
              repose={repose}
             />
            </>
            
             }/>

            
            
            
          </Routes>

        </div>
        
        
        
        

      </Router>
      
     
    </>
  );
}

export default App;


 

