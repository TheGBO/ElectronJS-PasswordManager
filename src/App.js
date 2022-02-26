import { AiFillLock } from 'react-icons/ai';
import PasswordElement from './components/PasswordElement';
import './style.css';
import { useState, useEffect } from 'react';

function App(props) {



  function generatePass(pass, user){
    console.log("generating pass");
    var allEntries = JSON.parse(localStorage.getItem("passwords")) || [];

    //process password
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let pwd = '';
    for (let i = 0, n = charset.length; i < pass; ++i) {
      pwd += charset.charAt(Math.floor(Math.random() * n));
    }


    allEntries.push({user:user, pass:pwd}); 
    localStorage.setItem("passwords", JSON.stringify(allEntries));
    console.log(allEntries);
    setPassDB(getPassDB());
  }

  function getPassDB(){
    return JSON.parse(localStorage.getItem("passwords")) || [];
  }

  const [passDB, setPassDB] = useState([]);

  useEffect(()=>{
    setPassDB(getPassDB());
  },[]);

  return (
    <div className="App">
      <nav className="top-nav">
        <span className='secure-password-btn'>
          <AiFillLock size={50}></AiFillLock>
          KTronPassMan
        </span>
      </nav>
      <main className='wrapper'>
        <div className='container1'>
          <div className='passwords'>
          <div className="password-element">
            <span className="pe-child pc-pass">
                PASSWORD
            </span>
            <span className="pe-child pc-usr">
                USER/EMAIL OR NOTE
            </span>
        </div>
            {
              passDB.map((e)=>{
                return(
                  <PasswordElement username={e.user} password={e.pass}></PasswordElement>
                )
              })
            }
          </div>
        </div>
        <div className='container2'>
          <div className='password-options'>
            <h1>Password Options</h1>
            <input type={'number'} id="pass" className="custom-input" placeholder={"Password Length"}></input>
            <input type={'text'} id="note" className="custom-input" placeholder={"Username, Email or Note"}></input>
            <button className='generate-btn' onClick={() => generatePass(document.getElementById("pass").value, document.getElementById("note").value)}><AiFillLock size={50}></AiFillLock></button>
            <span className="generate-btn" style={{backgroundColor:"#8f2828", color:"white", marginTop:"50px"}} onClick={()=>{
                var allEntries = JSON.parse(localStorage.getItem("passwords")) || [];
                allEntries.pop()
                localStorage.setItem("passwords", JSON.stringify(allEntries));
                setPassDB(getPassDB());
            }}>
                Delete Last Entry
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
