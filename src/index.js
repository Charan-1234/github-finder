import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Project-Git hub Finder

//1 Introduction to Project
//In this section we will see what we learned in react concept by using that we will building aproject
//We are applying what we are learned here
//Application is very important in any field
//We are building the project by using the basic understanding of the react
//we here first building a github finder project

//In git finder project we have a one navigation bar
//We will see how to think this project in very depth in next vedio
//we also have search bar
//search button

//if we get the Manikanta Nair then we get the Manikanta Nair profile
//If we search only ma we getting all the user name with ma
//if we click the more then it is going to their profile page
//In their page we getting their followers,fololowing,and about how many peoples they are following we getting and their repository also we getting
//when we clicking the Back to search button then we go back to the search

//In this perticular application
//we seeing search functionality 
//Data accessing that is where wqe accessing the Data
//when we not entering anything in the input field and search
//then we get get the alert messege
//that is disappear with in 5sec
//when we click the clear button all the detail from the dom should be clear
//for the simplicity purpose we creating one about page and one home page
//If we click the about page  it is going to the about page
//when we click the home page it is come to home page
//it is for discussing the routing part

//2 Planning the app
//in this vedio we will see how to implement our projects
//When we make the real world  first we have to plan the project
//in our application we have navigation bar
//first our application have app component
//we implementing all the functyionality in App component
//This Nav bar is a constant
//Because it is in the all the page
//It is in the Home page, About page 
//we have search component after searching our data will be displaying
//search->inputfield->search button->data has to be fetched
//initially clear button is not there
//once we fetched the data we get the clear button
//search->input field->search button->data has to be fetched->clear button is to be appeard
//After data has came we have to store this data for that we require a state
//we should have a uselist component
//all the list of the users
//we should get all the list of the users here
//we should store this data in a UseList componet
//userList->all the list of the user
//we shoul store individual user in a another component
//userItem->Individual user
//When we click the particular user then it is going to that particular page
//That is the userDetail component
//userdetail-get the detail of that user
//After that we have something called repository
//This will give the Repository list
//How many repository have for that perticular user will apper here
//Repolist-list5 all the repository
//we creating a component for another individual repository
//repoItem-individaual repository
//If we not give any input and hit enter
//it give alert
//so we have the alert component
//Alert component-simple component

//Summary
//App components-functionalities
//nav bar-is constant acroos the page
//search-input field search button
//data has to be fetched-clear button need to be appear
//UseList-all the list of the user
//UserItem-individual users
//userdetails-get the details of that user
//Repolist-list all the repository
//repoitem;individaul repository
//Alert componet-simple component

//3 Installin packages
//In this vedio we will see in our application what are the packages we are going to use

//here we perticularlly use 2 pakages
//1 react-router-dom
//2 npm install axios

//we know that why we are using react router dom  in our application
//We are using react-routing-dom for client side routing.client side rendering we are using react router dom

//Next package we are using is axios
//npm install axios
//we using axious for data fetching
//we fetching a data in our application
//for fetching a data in our application we using a package called axios

//in App.css Micro degree already written the code and given to us like a text file
//we should download the files and paste inside the App.css

//Now we go to App.js
//Inside App.js we have
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <>
//      <h1>Welcome To Our App</h1>
//     </>
//   );
// }

// export default App;

//We have icons in our applications
//foe that we using fontawesome font awesome cdn4.7
//version 4.7
//copy the url
//paste that url in public index.html file paste the link
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">

//Navbar
//In this vedio we build our application
//First we try to build a navigation bar
//We first setup this navigation bar
//after setting this nav bar we will build our next things

//first we creating component folder in src
//inside the component we creating a file called Navbar.js
//inside navbar.js we have

//import React from "react";
//const Navbar = () => {
//   return(
//     <>
//         <nav className="navbar bg-primary">
//             <h1>
//               Hello fromNavbar
//             </h1>
          

//         </nav>
//     </>
// )

// }
// export default Navbar;
//in this navbar we have fat arrow function
//in side the nav bar we have h1
//in side h1 we have heelo from navbar
//this nav bar is a child component we import this navbar inside the app.js

//in App.js we have
// import './App.css';
// import Navbar from './componet/Navbar';
// function App() {
//   return (
//     <>
        
//         <Navbar />
        
     
//     </>
//   );
// }

// export default App;
//now we get heelo from navbar in a screen

//Now we are build navbar
//we have html symantic tag called nav
//we given className to the nav as navbar bg-primary
//for that we already written a css
//inside navbar we writting <h1> tag
//inside h1 we have icon and name gitfinder
//first we selecting the icon that is <i className="fa fa-github"></i>
//Next we writing the bname as the github finder
//inside h1 tag we append i tag and github Finder text
//Next we creating ul and li in nav
//we have ul tag inside that we have two li
//in li we have link
//Why we are using Link because of that we are navigate between the two tags
//in one li tag we have to="/" and the another li tag we have to="/about"
//we getting this link from react-router-dom
//we have to import that
//import {Link} from the react-router-dom
//Navbar.js look like this
// import React from "react";
// import {Link} from "react-router-dom"

// const Navbar = () => {
//     return(
//         <>
//             <nav className="navbar bg-primary">
//                 <h1>
//                     <i className="fa fa-github"></i>
//                     Github Finder
//                 </h1>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/about">About</Link>
//                     </li>

//                 </ul>

//             </nav>
//         </>
//     )

// }
// export default Navbar;

//now we get a error
//This is because of we used a Link tag from react-router-dom
//but we not used router tag
//without using a router tag we are unable to use Link tag
//we first import router in App.js
//Wrap everything with arouter
// import './App.css';
// import Navbar from './componet/Navbar';
// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Router>
        
//         <Navbar />
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;
//Note
//if you use a Link then it is mandatory to use Router before the Link

//5 About page
//Next we building th about page
//inside the component we creating newfile About.js
//inside the about function we have
// import React from 'react';

// const About = () => {
//     return(
//         <>
//             <h1>about this App</h1>
//             <p>Working Cool</p>
//             <p>Version 1.0.0</p>
//         </>
//     )
// }
// export default About;
//But when we clicking the home it should be going to home
//when we clicking the about it should be going to about
//for that we using route

//import about in App.js
//App.js look like this
//import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         
//           <Routes>
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//But in our already builded application means our reference application
//we have the contents are centere in about page
//but our actuall application page we  have  space in the left
//we have some styling issues in about.js
//for resolving this  we creating div below the navbar
//Navbar should be appear in all thye pages
//for creating container in every component it is better to put acontainer in the app it self
//in app component we created div below the navbar
//for that divwe give clasName as container
//if save then we get the content in center
//why its come in center means
//we call the about inside the container
//in App.css what we written in the container class means
//.comntainer{max-width:1100px;margin:auto;ovrflow:hidden;padding:0.2rem;}
//margin:auto we given so that it will come in center
//what is the route which come inside the container class will effect the spacing

//App.js look like this
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';
// import Error from './componet/Error';
// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Routes>
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//Fetching Data
//In this vedio we will see how to fetch the data(that is github data which is needed for our application)
//it is very important to understand how to fetch the data
//In order to do that first we understand that where we get tyhe data
//The data is not comming from any databases
//Because we not created any dat bases
//Because we didnot any idea off how many users are there in the github
//We getting this data because of the API calls
//that is github user API
//We getting data from https://api.github.com/users this API
//Now we aqre not implementing search functionality
//But we are seeing about how to fetch the data
//Here we not searching every individaul user name
//but we fetch the data from the provided API
//API stands for Application Programming Interface
//Sending the JSON data to the browser
//For Accessing the data from the server we using API
//Data will be reach our browser interms of json
//Now data is in https://api.github.com/users
//we sending request to the this perticular API from our Application
//here we not searching for the individual users
//React App ---> https://api.github.com/users-->30 Github users data
//We have our react app and Github API
//Inside this link we have 30 Github users data
//This 30 Github users are random 30 users
//we are not searching for individual users
//we making a http request from the react App to the API
//We getting the responce from this API
//Now this JSON data is return to our app
//for sending request to the API we have axious
//With the help of axious package we requesting the API thenAPI give the data
//we do fetching in this vedio

//We are now going to App.js
//in order fetch the data we need to have the state
//in order to have state you need to have useState hook
//like the same way we need a useEffect
//useeffect why means when page loads we display the data
//import {useState,useEffect} from 'react';
//inside the function APP 
//We using useEffect when this page loads
//that means when App function  loads useEffect will execute
//we call API inside the useEffect
//first import the axios before it is used
//we sending get request to the axios
//From our application we make http request to that API
//Basically axios return a promise
//promise is because of asynchronous operation
//why means data has to go to github and then get the response
//Direct we not getting any data
//from github we fetch the data
//Any operation which takes time called Asynchronous operation
//inthis if you may get data or not

//we passing get request
//axios.get('https://api.github.com/users')
//get is a methode it passes get request
//Once data has to be come we must await
//if we using await then function should be async
//we store the getting data in a veriable
//we store this in a res veriable
//then we do console.log(res)
//inspect and then go to console
//here we get one object in this we have data property 30 data return

// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';
// import Error from './componet/Error';
// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';

// function App() {
//   useEffect(()=>{
//     (async()=>{
//       const res= await axios.get('https://api.github.com/users');
//       console.log(res);
 
//     })()
   
 
//   },[])
 
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Routes>
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//UserList Component
//In this vedio we will see how to save fetched data in our component
//first we created one state
//for storing incomming data we have one state
//state name is user in this we storing empty array
//function App() {
// const [users,setUsers]=useState([]);
//}
//initially when the app component will load the user state value will empty
//when the useEffect will run
//function will execute after function execute we will get the data
//we store getting data in a users state
//that is setUsers(res.data)
//we have data property in responce object
//we put getting data in to empty array users
// function App() {
//   const [users,setUsers]=useState([]);
//   useEffect(()=>{
//     (async()=>{
//       const res= await axios.get('https://api.github.com/users');
//       setUsers(res.data);
 
//     })()
   
 
//   },[])
// }
//we passing the state value to the user component
//we not created user component
//inside the component folder we create a newfile
//Users.js
//const User = () => {
//   return(
//     <>
//       <h1>User Component</h1>
//     </>
//   )
// }
//export default User;

//inside User function we write User component in h1
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';

// function App() {
//   const [users,setUsers]=useState([]);
//   useEffect(()=>{
//     (async()=>{
//       const res= await axios.get('https://api.github.com/users');
//       setUsers(res.data);
 
//     })()
   
 
//   },[])
 
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Users />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//next we passing the user state to the user component as prop
//now we are passing 30 git hub users data in the user state to the <Users /> then we displaying in a Users.js
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';

// function App() {
//   const [users,setUsers]=useState([]);
//   useEffect(()=>{
//     (async()=>{
//       const res= await axios.get('https://api.github.com/users');
//       setUsers(res.data);
 
//     })()
   
 
//   },[])
 
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;
//{users} is the state users
//we passing this in to the users veriable
//this is the prop
//we accepting this in a Users.js Users function
//Now we do console.log(props)
//we get Users array in the console
//we accepting the passed users(that is <Users users={users}/>) here
//In Users.js look like this
// import React from 'react';
// const Users = (props) => {
//   console.log(props)
//   return(
//     <h1>Users component</h1>

//   )
// }
// export default Users

//if we do props.users we get the array value
// import React from 'react';
// const Users = (props) => {
//   console.log(props.users)
//   return(
//     <h1>Users component</h1>

//   )
// }
// export default Users

//now we get the data
//now we swriting one <div> and added inline styling for that
// const userStyle={
//   display:"grid",
//   gridTemplateColumns:'repeat(3,1fr)',
//   gridGap:'1rem'

// }
//we using the userstyle for the div
// import React from 'react';
// const Users = (props) => {
//   console.log(props.users)
//   return(
//     <div style={userStyle}></div>
//   )
// }
// export default Users
// const userStyle={
//   display:"grid",
//   gridTemplateColumns:'repeat(3,1fr)',
//   gridGap:'1rem'

// }
//export default Users

//inside this div we loop through props.users
//props.users is a array
//we map inside the loop 
//because we want the individual data
//we returning individual users log in detail in the paragraph and display in the screen
//{users.login}
//our entire Users.js look like this
// import React from "react";

// function Users(props) {
//     console.log(props.users);
    
//     return(
//         <div style={userStyle}>
//           {props.users.map((user,index)=>
//             (
//               <p key={index}>{user.login}</p> //if online then omit { } and return statement
//             )
              
            
//         )}
          
//         </div>
//     )
// }
// const userStyle={
//   display:"grid",
//   gridTemplateColumns:"repeat(3,1fr)",
//   gridGap:"1rem",
//   color:"black"
// }
// export default Users;

//entire App.js look like this
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';

// function App() {
//   const [users,setUsers]=useState([]);
//   useEffect(()=>{
//     (async()=>{
//       const res= await axios.get('https://api.github.com/users');
//       setUsers(res.data);
 
//     })()
   
 
//   },[])
 
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;


//User Item component
//In this vedio we will see how to display earlier got data into to individual component
//In last vedio we will loop through the data and display the git hub user there it self
//Now we passing this data into another component then display the data in that component itself
//map means it is an looping option
//it will run the entire length of the array

//Note
//Now we will quickly see about map function
//In orr array we have total 30 data
//first time loop is running in the index zero
//when we call the data first call back function will be
//0:{login:"mojambo",id:..,avtar_url:...,gravatar_id:...}
//index 0 object is the first thing that is execute,after that map function go to index1,after that map function will go to index 2 like that it is goes to full length of the array 
//in this type the map function will work

//till now we displaying here it self why not we do  a new component for that component we have login,avtar_url,button
//we give some styling and display that component

//fisrt we calling <div> in Users.js inside that div we calling <UserItem /> component
//But we didnot have UserItem component now we 
//we creating UserItem component in component folder
//and importing that in App.js
//In App.js <UserItem user={user} /> we passing
//we passing the individaul user with the property of user

//our User.js look like this
// import React from "react";
// import UserItem from "./UserItem";

// function Users(props) {
//     console.log(props.users);
    
//     return(
//         <div style={userStyle}>
//           {props.users.map((user,index)=>
//             (
//               <UserItem user={user} />//if online then omit { } and return statement
//             )
              
            
//         )}
          
//         </div>
//     )
// }
// const userStyle={
//   display:"grid",
//   gridTemplateColumns:"repeat(3,1fr)",
//   gridGap:"1rem",
//   color:"black"
// }
// export default Users;

//In our created UserItem.js file we have
// import React from "react";

// function UserItem(){
   
//     return(
//         <>
//             <h1>Hello from user items</h1>
//         </>
//     )
// }
// export default UserItem;

//Now you just think what will be the output
//Output will be Hello from user items 30 items display 
//why it is display Hello from the user items 30 times means
//inside the loop we calling <UserItem user={user} />
//we are passing user veriable to the <UserItem />
//But in UserItem we have <h1>Hello from the user items</h1>
//beacuse of we calling UserItem inside the map  UserItem will displays 30 times
// when UserItem calls in User.js what is you are written inside return of  the UserItem  that will be printed

//Inorder to stop that
//<UserItems user={user} />
//this is we already passes earlier in Users.js
//We accessing that props in UserItem.js 
//UserItem look like
// import React from "react";

// function UserItem(prop){
   
//     return(
//         <>
//             <div></div>
//         </>
//     )
// }
// export default UserItem;
//Now in props we aceesing user={user} now we get the individual users here
//next we do destructuring from the props
//here we destructuring the login and image that is avatar_url
//If we not do destructuring then we have to write props.user.login,props.user.avatar_url in side the return
//Because of destructuring it is enough to write login and avatar_url inside the return
//code look like this
// function UserItem(prop){
   
//     return(
//         <>
//             <h1>{login}</h1>
//         </>
//     )
// }
// export default UserItem;

//Now we removing the h1 from the return
//and write on div
//for that div we give our already written css class name that is card text-center
//inside the div we require one image
//<img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}></img>
//after the image we require login inside <h3>
//below that we require more button
//For button we using Link
//for that we have to import the Link from the react-router-dom
//<Link to="/" className="btn btn-dark btn-sm my-1">More</Link>
//now to="/" we put we will work on this bit more
//Now we save then we can get the data
// import React from "react";
// import {Link} from "react-router-dom"

// function UserItem(props){
//     const {login,avatar_url}=props.user
//     return(
//         <>
//             <div className="card text-center">
//                 <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}></img>
//                 <h3>{login}</h3>
//                 <Link to="/" className="btn btn-dark btn-sm my-1">More</Link>
                
//             </div>
//         </>
//     )
// }
// export default UserItem;

//Search Component
//in this vedio we will disign search inputbox and button component
//and we applying logics in the upcomming vedio

//now we not required the data which is comming from the git API
//we utilize this data later now we only designing search component

//go to App.js where we not require useEffect we commenting useEffect because we not need this now
//it is required later so we commenting this

//We creating search.js lokk like this
// import React from 'react';
// const search = () = {
//   return(
//     <>
//     </>
//   )
// }
// export default Search;

//In side this search component we basically need a form
//In this form we have input box and button we are going to display
//inside the form we have <input type="text" name="text" placeholder="Search Here" />
//Our search component look like this
//Search.js
// import React from 'react';
// const search = () = {
//   return(
//     <>
//       <form>
//           <input type="text" name="text" placeholder="Search Here" />
//       </form>
//     </>
//   )
// }
// export default Search;
//Now we just saving and call in App.js to see whether it is working or not

//App.js look like this
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';

// function App() {
//   const [users,setUsers]=useState([]);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])
 
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Search />
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;
//Now we get the search bar in the screen
//Now we give the className to the form and put one button
//<input type="submit" value="search" className="btn btn-dark btn-block" />

//search.js look like this
//import React,{useState} from "react";
//const Search = () =>{
//   return(
//       <>
//           <form className="form" >
//               <input type="text" name="text" placeholder="Search here" />
//               <input type="submit" value="Search" className="btn btn-dark btn-block" />
//           </form>
//       </>

//   )

// }
// export default Search;

//Next we are going to do what we are what we are typing in the search we are going to store in the state
//We searching basis on the values in the state
//for that we need a useState
//we importing the useState in the search.js
//we set the empty string initially to the useState
//import React,{useState} from "react";
//const Search = () =>{
//   const [text,setText]=useState("");
//   return(
//       <>
//           <form className="form" >
//               <input type="text" name="text" placeholder="Search here" />
//               <input type="submit" value="Search" className="btn btn-dark btn-block" />
//           </form>
//       </>

//   )

// }
// export default Search;
//text is a initially empty string
//we know there are two property is very important when we doing controlled input
//that is value and onChange
//here value={text} and onChange{(e)=>seText(e.target.value)}/>
//import React,{useState} from "react";
//const Search = () =>{
//   const [text,setText]=useState("");
//   return(
//       <>
//           <form className="form" >
//               <input type="text" name="text" placeholder="Search here" value={text} onChange{(e)=>seText(e.target.value)} />
//               <input type="submit" value="Search" className="btn btn-dark btn-block" />
//           </form>
//       </>

//   )

// }
// export default Search;

//initially our value is text
//if we not using onchange then we are unable to type
//In this onChange every time we typing
//e.target.value means what we are typing that
//setText is used to update the state value
//setText updating the state using e.target.value
//we need onsubmit in a form
//onSubmit={handleSubmit}
// const handleSubmit = () => {
// console.log()
// }
//Now we checking if we get the text value in the console.log
//means what we are typing in the input field we getting console or not we will check that
// import React,{useState} from "react";

// const Search = () =>{
//     const [text,setText]=useState("");
//     const handleSubmit = (e) =>{
//         
//         console.log("text is:",text);

//     }
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)}/>
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
//         </>

//     )

// }
// export default Search;
//initially our text value will be empty
//if you write something and press the button then the form will be submit
//If form submit what we are storing in the state that should be come to console
//but we compulsary to give the preventDefault() for preventing the default submit of the form
// import React,{useState} from "react";

// const Search = () =>{
//     const [text,setText]=useState("");
//     const handleSubmit = (e) =>{
//         e.preventDefault()  
//         console.log("text is:",text);

//     }
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)}/>
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
//         </>

//     )

// }
//Now when we click the search button we get the text value hello
//Now our state value will be updating

//Search Functionality
//in this vedio we will see how to implement the search functionality
//we previously see one git API that will return 30 git hub users random data

//like that we are not doing in the search API we cant do that
//why because when we search then we get that perticular detail
//in our previous used API That will give random users it is not specifies that which user

//In our Application we required to get the specified users based on the given name in the input field
//for that github provides another api
//that is https://api.github.com/search/users?q=mani
//here ?q=mani is called query string
//based on this parameter we recive the users based on the request
//we called this API as filter API
//in this API after ? what we are writing is called data filtering or query string
//this query selector will makes?
// after accepting ?q=mani data in the backend server
//It queries at the backend and give us a details
//for filtering purpose we using a query string
//that we are typing in the input field of the application should go here that is ?q=..
//Our API look like this
//https://api/github.com/search/users?q=waht ever we typed in the input fild
//what we should type in the input field that should be go after the = sign
//basically a text value
//https://api/github.com/search/users?q=text

//Now we are writing the functions in the App.js
//we writing all the functions in the App.js
//we writing function in the App.js and then we caqn pass it to the component
//Now we declaring a function called searchName
//This will take a text(you can give your wish here we give name you may give id,etc your wish) value
//const searchName = (name) =>{
//
//} 
//this is an asynchronoius function
//inside the searchName
//await axios.get(`https://api.github.com/search/users?q=${name}`)
//what ever value we typed in the input field will be passed
//then we store the data in the res veriable
//Now we do console.log(res)
//searchName function will called when we click the search button that is what we need

//App.js look like
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';

// function App() {
  
  
//   const [users,setUsers]=useState([]);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }
 
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Search  />
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;
//we have to pass the searchName function in the Search component
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';

// function App() {
  
  
//   const [users,setUsers]=useState([]);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     

//   }
 
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Search searchName={searchName} />
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//we pass the data to the search component
//so we get the props in the search component
//in search.js inside the handelsubmit we accepting the props
//we know that form submit means onSubmit
//inside the handleSubmit we call props.searchName()
//here searchName is a function which takes the parameter
//so that we also passing the parameter when the function is called
//that is props.searchName(text)
//we are passing the state value as the parameter
//Because what ever we type in the input field the state value will updated

//Note
//in function parameter can be anything that is eg const searchName=async(name(or anything your whish))
//but argument should be same

//Search.js look like this
// import React,{useState} from "react";

// const Search = (props) =>{
//     const [text,setText]=useState("");
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         props.searchName(text);

//     }
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)}/>
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
//         </>

//     )

// }
// export default Search;

//now we save and lets search mani
//we get the data in the console
//we get the data
//now we click the data then we get the actual data
//we get 30 data related to mani
//mani,neoqtrix,smanikandan etc

//we typed mani in the input field
//then text value becomes mani
//we passed mani to the searchName function
//that mani when the searchName function will calls it will go to async(name) here
//then we get the data and console the data
//now we are going to update this in the user state
//in our console we getting response
//inside that we have property called data
//inside that data we have 30 ${text} data
//setusers(res.data.items)

//Search.js look like this
// import React,{useState} from "react";

// const Search = (props) =>{
//     const [text,setText]=useState("");
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         props.searchName(text);

//     }
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)}/>
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
//         </>

//     )

// }
// export default Search;

//App.js look like this
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';

// function App() {
  
  
//   const [users,setUsers]=useState([]);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }
 
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Search searchName={searchName} />
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;


 

// // useEffect(()=>{
// //   async function fetchData(){
// //     const res= await axios.get('https:api.github.com/users');
// //     console.log(res);
// //   }
// //   fetchData()
 
 

// // },[])

//Conditional rendering
//Now we have getting detail after the details has come we have the clear button
//When we click the clear button everything will be cleared
//clear button displays when we get the data
//that means when thye page loads we not have the clear button

//we will think how to make  this
//in initial load -> cleqar button -> false -> true
//get the user -> click the clear button users should empty
//this is what we are trying to do

//When we type in the input input filed and then hit search button that name now also available in the input box
//we will first clear this problem
//In our already builded application (MicroDegree avarddu) after searching the name will vanish
//It is not a good user experience
//Next time when the user will type in the input field first he earase and the he type
//we will fix this by after serching the data making text state empty

//in search.js we have
// import React,{useState} from "react";

// const Search = (props) =>{
//     const [text,setText]=useState("");
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         props.searchName(text);
//         setText("");

//     }
    
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)} />
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
            
            
            
//         </>

//     )

// }
// export default Search;

//Now we are designing a clear button
//Below the form we want a buttton
//<button type="submit" className="btn btn-light btn-block">clear</button>
//in search.js we have

// import React,{useState} from "react";

// const Search = (props) =>{
//     const [text,setText]=useState("");
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         props.searchName(text);
//         setText("");

//     }
    
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)} />
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
            
//              <button type="submit" className="btn btn-light btn-block" >Clear</button>
            
//         </>

//     )

// }
// export default Search;

//Clear button now displaying
//But clear button also displays when the page is load
//but we not require the clear button at the initial loading
//we need to display the clear button at the time of data fetching
//we will see that perticular functionality first

//we goto Apps.js we implementing the functionality here
//here we write a functionality called showClear
//what this functionality does is
//when userStateis empty we doesnot need to show clear button
//this function become true when the users.length>1
//else it becomes false
//And we passing this function inside the search component
//const showClear = () => {
//   return Users.length>1?true:false
// }

//App.js look like this
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';

// function App() {
  
  
//   const [users,setUsers]=useState([]);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }

//   const showClear = () => {
//     return users.length>0?true:false;
//   }
 

  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Search searchName={searchName} showClear={showClear}  />
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
//             
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//we passing showClear inside the search component
//if showClear is true
//the showclear becomes true whren the user.lenght>1 that means when we search we get the users data then
//in search component we get this as a props 
// we show the button when the data is present
// import React,{useState} from "react";

// const Search = (props) =>{
//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     props.searchName(text);
//     setText("");

// }
    
    
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)} />
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
            
//             {props.showClear() && <button type="submit" className="btn btn-light btn-block" >Clear</button>}
            
//         </>

//     )

// }
// export default Search;

//&& will tell if the showClear is true then show the button
//showClear becomes true when the user.length>1
//user is fetched user array is incresed to 30 then return true or false

//Another way to clear the data with out using function
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';


// function App() {
  
  
//   const [users,setUsers]=useState([]);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }

  
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Search searchName={searchName} showClear={users.length>0?true:false} />
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
            
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//in Search.js

// import React,{useState} from "react";

// const Search = (props) =>{
//     const [text,setText]=useState("");
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         props.searchName(text);
//         setText("");

//     }
    
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)} />
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
            
//             {props.showClear && <button type="submit" className="btn btn-light btn-block" >Clear</button>}
            
//         </>

//     )

// }
// export default Search;

// Another way to clear data by using state
// in this we creating another state
//const [showClear setshowClear]=useState(false)
//initially it is false when it is false we wont show anything
//inside the searchName function we make setshowClear true when the data comes 
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';


// function App() {
  
  
//   const [users,setUsers]=useState([]);
//   const [showClear,setShowclear]=useState(false);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);
//     setShowclear(true);

//   }

  
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Search searchName={searchName} showClear={showClear} />
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
            
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//Search.js look like this
// import React,{useState} from "react";

// const Search = (props) =>{
//     const [text,setText]=useState("");
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         props.searchName(text);
//         setText("");

//     }
    
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)} />
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
            
//             {props.showClear && <button type="submit" className="btn btn-light btn-block" >Clear</button>}
            
//         </>

//     )

// }
// export default Search;

// next we implement when we clickinhg the clear button all the data should disapper
//when we click the clear button state value should be empty
//for that we writing clearProf function in App.js
//and passing that to the search as prop

//App.js look like this
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';

// function App() {
  
  
//   const [users,setUsers]=useState([]);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }

//   const showClear = () => {
//     return users.length>0?true:false;
//   }
 
//   const clearProf = () => {
//     setUsers([])

// }
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Search searchName={searchName} showClear={showClear} clearProf={clearProf} />
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
           
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//Search.js look like this
// import React,{useState} from "react";

// const Search = (props) =>{
//     const [text,setText]=useState("");
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         props.searchName(text);
//         setText("");

//     }
    
//     return(
//         <>
//             <form className="form" onSubmit={handleSubmit}>
//                 <input type="text" name="text" placeholder="Search here" value={text} onChange={(e)=>setText(e.target.value)} />
//                 <input type="submit" value="Search" className="btn btn-dark btn-block" />
//             </form>
            
//             {props.showClear() && <button type="submit" className="btn btn-light btn-block" onClick={props.clearProf}>Clear</button>}
            
//         </>

//     )

// }
// export default Search;


//Linking to the detail page
//In this vedio we will see how to fetch the individual users data
//In our already builded application when we clicki the more button
//it will go to /user/mani
//it will hitting tob the usename
//in that page we will displaying our content
//For getting that individual data we have API called
//https://api.github.com/users/mani
//in that data we have their followers,following count public repository etc
//we not diplaying repository now
//with out we will implementing everything now
//When we click the more button it is going to  new url localhost-3000/users/username
//Based on this username we calling tha API
//Based on that we have to display data

// First we doing when we clicking the more button it shout be go that page
//we have more button in userItem component
//in userItem we have 
//<Link to="/" className="btn btn-dark btn-sm mg-1">More</Link>
// we already given / to to attribute
//Now we give to="/123" then click the more button
//we get localhost:300/123 in the url
//what is the path we given in the toi attribute in the link it will displays like that in the url

//If we Click the neomatrix users more button
//then we get localhost:300/users/neomatrix
//if youy want to do that
//we have to do one thing
//we have to write this logically
//you have to dynamically change the content
//for that we have to give ={`/user/${login}`}
//It is why because that is the name in the login comes after the user/

//we not defining route till now
//Its UI is not ready

//Now we going to App.js and creating a new route
//<Route path="/users/:anything" component={userDetails} />
//after colon : can be anything
//anything meqans dynamically addressing veriable

//Now we are creating userDetail component
//First we are importing that in a App.js

//App.js look like this
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';
// import UserDetail from './componet/UserDetail';

// function App() {
  
  
//   const [users,setUsers]=useState([]);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }

//   const showClear = () => {
//     return users.length>0?true:false;
//   }
 
//   const clearProf = () => {
//     setUsers([])

// }
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
//           <Search searchName={searchName} showClear={showClear} clearProf={clearProf} />
//           <Users users={users} />
//           <Routes>
            
//             <Route path="/about" element={<About /> }/>
//             <Route path="/user/:anything" element={<UserDetail />}/>
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//userDetail component look like this
// import React from "react";

// function UserDetail(){
//     return(
//         <h1>Iam from UserDetail</h1>

//     )
// }
// export default UserDetail

//Now it is displaying Iam from UserDetail
//But when we clicking the more button i am from the userDetail page is not displaying
//We will fix this in the next vedio

// fetching the single user
//we have one problem in last vedio
//When we click the more button of the any user it is going to route but not displaying the useDetail component
//It is why because we not assigning search and user component to any route
//This search and user component comes our home page
//when we click the more we not get this search and button
//we assigning search and user component 

//we normally write home page
//<Route path="/" element{search} </Rote>
//we not write that type in this case
//because we have <Search /> and <Users /> two component 
//and also we have passed many props to this component
//for like this cases we have some changes
//first part remain same
//with that we have function called render
//render inside that we passes <Search/> and <Users />
//it look like this
//App.js look like this

// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';
// import UserDetail from './componet/UserDetail';

// function App() {
  
  
//   const [users,setUsers]=useState([]);
  
//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }

//   const showClear = () => {
//     return users.length>0?true:false;
//   }
 
//   const clearProf = () => {
//     setUsers([])

// }

  


  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
          
//           <Routes>
            
//           <Route
//               path="/"
//               element={
//                 <>
//                 <Search
//                   searchName={searchName}
//                   showClear={showClear}
//                   clearProf={clearProf}
//                 />
//                 <Users
//                  users={users} />
//                 </>
                
                
//               }
//             />
            
//             <Route path="/about" element={<About /> }/>
//             <Route path="/user/:anything" element={
//             <>
//             <UserDetail
//              />
//             </>
            
//              }/>

            
            
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

// Now when we clicking the more button we get
// we get iam from thye user detail page

// now we see how to access login name in the url to userDetail page
//for our new version we have {useParams}
//we import useParams in UserDetail component
//UserDetail.js look like this
// import React, {useEffect} from "react";
// import { useParams } from "react-router-dom";


// function UserDetail(){
    
//      const { anything } = useParams();
     
     
//      return(
//          <div>
//             <h1>Iam from UserDetail {anything}</h1>
            
//          </div>
        

//      )
// }
// export default UserDetail;

//Now we are dynamically access the data
//if we click the manishearth users more button then we get
//localhost:3000/user/Manishearth we get
//and also we get Iam from UserDetail Manishearth in UserDetail component

//Now we by using {anything} we passing this in to https://api.github.com/users/mani({anything})
//in  {anything} what is the name we passing we getting that user details
//This is how we can make the API call
//Now we make a quick API calls
//We calling all the API in the App.js
//then we will send this as a props

//to get thye individual user
//first we setting the data to the user(individual user) we set the state
//const [user,setUser]=useState({})
//here we passing the empty object
//this is why because when we search api.github.com/users/mani
//we get {"login":mani;"id":..} etc
//because of this we uses {}
//that is one single object so we passing like a single object
//here we writing  a one function
//here we writing getDetails function
//this function will take login name
//this function is a asynchronous function
//we storing the response in the res veriable
//we updating the state from the getting data
//App.js look like this
//Now we have to pass the getDetails,user to userDetail component
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';
// import UserDetail from './componet/UserDetail';

// function App() {
  
  
//   const [users,setUsers]=useState([]);
//   const [user,setUser]=useState({});

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }

//   const showClear = () => {
//     return users.length>0?true:false;
//   }
 
//   const clearProf = () => {
//     setUsers([])

// }

//   //to get the details of the individual user

//   const getDetails=async(login)=>{
//     const res=await axios.get(`https://api.github.com/users/${login}`);
//     setUser(res.data);
//   }


  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
          
//           <Routes>
            
//           <Route
//               path="/"
//               element={
//                 <>
//                 <Search
//                   searchName={searchName}
//                   showClear={showClear}
//                   clearProf={clearProf}
//                 />
//                 <Users
//                  users={users} />
//                 </>
                
                
//               }
//             />
            
//             <Route path="/about" element={<About /> }/>
//             <Route path="/user/:anything" element={
//             <>
//             <UserDetail
//               getDetails={getDetails}
//               user={user} 
//              />
//             </>
            
//              }/>

            
            
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;
//Now we have the dat in the getDetails we have to pass that data in to UserDetails component
//now we get this details inUserDetails props
//when we do conmsole.log(props) we get getDetails like functions in the output

//Now we get thev data when theuserDetail page loads
//thats why we have useEffect hook
//because of useEffect getDetails function executes when the page loads
//and we pass that argument
//we erlier passes user with the getdetails as props we alspo accepting this
//our App.js look like this
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';
// import UserDetail from './componet/UserDetail';

// function App() {
  
  
//   const [users,setUsers]=useState([]);
//   const [user,setUser]=useState({});

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }

//   const showClear = () => {
//     return users.length>0?true:false;
//   }
 
//   const clearProf = () => {
//     setUsers([])

// }

//   //to get the details of the individual user

//   const getDetails=async(login)=>{
//     const res=await axios.get(`https://api.github.com/users/${login}`);
//     setUser(res.data);
//   }


  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
          
//           <Routes>
            
//           <Route
//               path="/"
//               element={
//                 <>
//                 <Search
//                   searchName={searchName}
//                   showClear={showClear}
//                   clearProf={clearProf}
//                 />
//                 <Users
//                  users={users} />
//                 </>
                
                
//               }
//             />
            
//             <Route path="/about" element={<About /> }/>
//             <Route path="/user/:anything" element={
//             <>
//             <UserDetail
//               getDetails={getDetails}
//               user={user} 
//              />
//             </>
            
//              }/>

            
            
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;

//our userDetails component look like  this
// import React, {useEffect} from "react";
// import { useParams } from "react-router-dom";


// function UserDetail(props){
//     console.log(props);
//      const { anything } = useParams();
//      useEffect(()=>{
//          props.getDetails(anything)

//      },[])
     
//      return(
//          <div>
//             <h1>Iam from UserDetail {props.user.login}</h1>
            
//          </div>
        

//      )
// }
// export default UserDetail;


//Detail page component
//In this vedio we will quickly design the page
//In this vedio we will implementing all the things exept repository
//first we creating the button
//in UserDetail.js
//<Link to="/" className="btn btn-dark">Back to Search</Link>
//Next we checking the person is hireable or not
//if hireable is true then green mark if the hireable is false the red mark
//Hireable:{props.user.hireable ? (<i className="fa fa-check text-success" />):(<i className="fa fa-times-circle text-danger" />)}
//After this we write a div with the className="card grid-2"
//inside that we have another div with className="all center"
//inside the inner div we have image src of the image is avatar_url className="round-img" style={{width:"150px"}}
//Next we have the name inside h1
//next we have location inside p
//we done with the left side

//Now we come to implement the right side
//hetre we have one div
//inside that if their document contain bio then we do props.user.bio then we get in the bio
//if bio is not in their document it comes undefined to avoid that
//in some users detail we not have any bio
//we dispaly the bio if the condition is true then we display the bio
//props.user.bio&&(
//   <>
//   <h3>Bio</h3>
//   <p>{props.user.bio}</p>
// </>
// )}
//Next we put one anchor tag and we are href in to their profile
//<a href={props.user.html_url} className="btn btn-dark my-1">Visit Github Profile</a>
//Next we have <ul> inside that we have 3 <li>
//here we displaying their company,blog,log in only if the condition is true
//  <div>
    // {props.user.bio&&(
 //       <>
//            <h3>Bio</h3>
 //           <p>{props.user.bio}</p>
//        </>
 //   )}
 //   <a href={props.user.html_url} className="btn btn-dark my-1">Visit Github Profile</a>
 //   <ul>
 //       <li>
 //           {props.user.company && (
 //           <>
            // <strong>Company:{props.user.company}</strong>
 //           </>) }
 //       </li>
 //       <li>
 //           {props.user.blog && (
 //           <>
//            <strong>Website:{props.user.blog}</strong>
 //           </>) }
 //       </li>
 //       <li>
 //           {props.user.login && (
 //           <>
 //           <strong>Username:{props.user.login}</strong>
//            </>) }
 //       </li>
 //       
 //       
 //   </ul>
//</div> */}

//Next we implementing the followers,following,public repos,public gists
// <div className="card text-center">
//                  <div className="badge badge-primary">Followers:{props.user.followers}</div>
//                    <div className="badge badge-success">Following:{props.user.following}</div>
//                   <div className="badge badge-danger">Public Repos:{props.user.danger}</div>
//                    <div className="badge badge-dark">Public Gists:{props.user.public_gists}</div>
//
//            </div> 
//            

//Now it is dynamically updating when we click any user

//Entire UserDetail.js look like this
// import React, {useEffect} from "react";
// import { useParams } from "react-router-dom";
// import {Link} from "react-router-dom";

// function UserDetail(props){
  //  console.log(props);
 //    const { anything } = useParams();
 //    useEffect(()=>{
 //        props.getDetails(anything)
//
 //    },[])
 //    
 //    return(
 //        <>
 //           <Link to="/" className="btn btn-dark">Back to Search</Link>
 //           Hireable:{props.user.hireable ? (<i className="fa fa-check text-success" />):(<i className="fa fa-times-circle text-danger" />)}
 //           <div className="card grid-2">
 //               <div className="all center">
 //                   <img src={props.user.avatar_url} className="round-img" style={{width:'150px'}}/>
 //                   <h1>{props.user.name}</h1>
 //                   <p>Location:{props.user.location}</p>
//
 //               </div>
 //               <div>
 //                   {props.user.bio&&(
 //                       <>
                            // <h3>Bio</h3>
                            // <p>{props.user.bio}</p>
                        // </>
                    // )}
                    // <a href={props.user.html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    // <ul>
                        // <li>
                            // {props.user.company && (
                            // <>
                            // <strong>Company:{props.user.company}</strong>
                            // </>) }
                        // </li>
                        // <li>
                            // {props.user.blog && (
                            // <>
                            // <strong>Website:{props.user.blog}</strong>
                            // </>) }
                        // </li>
                        // <li>
                            // {props.user.login && (
                            // <>
                            // <strong>Username:{props.user.login}</strong>
                            // </>) }
                        // </li>
                        // 
                        // 
                    // </ul>
                // </div>
                // 
// 
            // </div>
            // <div className="card text-center">
                    // <div className="badge badge-primary">Followers:{props.user.followers}</div>
                    // <div className="badge badge-success">Following:{props.user.following}</div>
                    // <div className="badge badge-danger">Public Repos:{props.user.danger}</div>
                    // <div className="badge badge-dark">Public Gists:{props.user.public_gists}</div>
// 
            // </div>
            // 
            // 
        //  </>
        // 

    //  )
// }
// export default UserDetail;

//Get User Repository
//In this vedio  we fetching users repository
//user many contain many repository
//But we only fetching 5 repository
//https://api.github.com/users/brad traversy/repos is the API for getting all the repository
//But we displaying 5 repository through filtering
//here we fetching 5 repository and displaying the details
//so our API becomes
//https://api.github.com/users/${username}/repos?per_page=5&sort=asc

//in first App.js we create a state called as repose
//and we assign it with empty array
//const [repose,setRepose]=useState({[])
//Next we writing one function to get the repository
//Here we write as getRepo and we writing this as the async function
//it takes username as one parameter
//next we pass the API and store in res
//and we write setRepose(res.data)
//Next we passing the get repose in to UserDet6ail component with that we passing the state value
//<UserDetail
// getDetails={getDetails}
// user={user} 
// getRepo={getRepo}
// repose={repose}
// />
// </>
//In UserDetail.js in useEffect we calling the getRepose function
//useEffect(()=>{
// props.getDetails(anything)
// props.getDetails(anything)
//},[])
//in return we creating another div
//we map throught the array and displaying html_url and array in the screen
//<div >
// {props.repose.map((repo)=>{
//     return(
//         <div className="card">

//         <h2>
//             <a href={repo.html_url}>{repo.name}</a>
//         </h2>
            
//         </div> 
         
//     )

// }


// )}
// </div>

//our entire App.js look like this
// import './App.css';
// import Navbar from './componet/Navbar';
// import About from './componet/About';

// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import Users from './componet/Users';
// import Search from './componet/Search';
// import UserDetail from './componet/UserDetail';

// function App() {
  
  
//   const [users,setUsers]=useState([]);
//   const [user,setUser]=useState({});
//   const [repose,setRepose]=useState([]);

//   //for our reference
//   // useEffect(()=>{
//   //   (async()=>{
//   //     const res= await axios.get('https://api.github.com/users');
//   //     setUsers(res.data);
 
//   //   })()
   
 
//   // },[])

//   const searchName = async (name) => {
//     const res = await axios.get(`https://api.github.com/search/users?q=${name}`);
//     setUsers(res.data.items);

//   }

//   const showClear = () => {
//     return users.length>0?true:false;
//   }
 
//   const clearProf = () => {
//     setUsers([])

// }

//   //to get the details of the individual user

//   const getDetails=async(login)=>{
//     const res=await axios.get(`https://api.github.com/users/${login}`);
//     setUser(res.data);
//   }

//   //to get repositoy

//   const getRepo=async(username) => {
//     const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=asc`);
//     setRepose(res.data);
//   }
  

//   return (
//     <>
//       <Router>
        
//         <Navbar />
//         <div className="container">
          
//           <Routes>
            
//           <Route
//               path="/"
//               element={
//                 <>
//                 <Search
//                   searchName={searchName}
//                   showClear={showClear}
//                   clearProf={clearProf}
//                 />
//                 <Users
//                  users={users} />
//                 </>
                
                
//               }
//             />
            
//             <Route path="/about" element={<About /> }/>
//             <Route path="/user/:anything" element={
//             <>
//             <UserDetail
//               getDetails={getDetails}
//               user={user} 
//               getRepo={getRepo}
//               repose={repose}
//              />
//             </>
            
//              }/>

            
            
            
//           </Routes>

//         </div>
        
        
        
        

//       </Router>
      
     
//     </>
//   );
// }

// export default App;


//our entire UserDetail.js look like this
// import React, {useEffect} from "react";
// import { useParams } from "react-router-dom";
// import {Link} from "react-router-dom";

// function UserDetail(props){
//     //console.log(props);
//      const { anything } = useParams();
//      useEffect(()=>{
//          props.getDetails(anything)
//          props.getRepo(anything)

//      },[])
//      //console.log(props);
     
//      return(
//          <>
//             <Link to="/" className="btn btn-dark">Back to Search</Link>
//             Hireable:{props.user.hireable ? (<i className="fa fa-check text-success" />):(<i className="fa fa-times-circle text-danger" />)}
//             <div className="card grid-2">
//                 <div className="all center">
//                     <img src={props.user.avatar_url} className="round-img" style={{width:'150px'}}/>
//                     <h1>{props.user.name}</h1>
//                     <p>Location:{props.user.location}</p>

//                 </div>
//                 <div>
//                     {props.user.bio&&(
//                         <>
//                             <h3>Bio</h3>
//                             <p>{props.user.bio}</p>
//                         </>
//                     )}
//                     <a href={props.user.html_url} className="btn btn-dark my-1">Visit Github Profile</a>
//                     <ul>
//                         <li>
//                             {props.user.company && (
//                             <>
//                             <strong>Company:{props.user.company}</strong>
//                             </>) }
//                         </li>
//                         <li>
//                             {props.user.blog && (
//                             <>
//                             <strong>Website:{props.user.blog}</strong>
//                             </>) }
//                         </li>
//                         <li>
//                             {props.user.login && (
//                             <>
//                             <strong>Username:{props.user.login}</strong>
//                             </>) }
//                         </li>
                        
                        
//                     </ul>
//                 </div>
                

//             </div>
//             <div className="card text-center">
//                     <div className="badge badge-primary">Followers:{props.user.followers}</div>
//                     <div className="badge badge-success">Following:{props.user.following}</div>
//                     <div className="badge badge-danger">Public Repos:{props.user.danger}</div>
//                     <div className="badge badge-dark">Public Gists:{props.user.public_gists}</div>

//             </div>
//             <div >
//                 {props.repose.map((repo)=>{
//                     return(
//                         <div className="card">

//                         <h2>
//                             <a href={repo.html_url}>{repo.name}</a>
//                         </h2>
                            
//                         </div> 
                         
//                     )

//                 }
                

//                 )}
//             </div>
            
            
            
//          </>
        

//      )
// }
// export default UserDetail;


 



 




 







 






 





 




 


 


 




 



 







 
