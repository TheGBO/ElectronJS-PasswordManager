import { AiFillLock } from 'react-icons/ai';
import PasswordOption from './components/PasswordOption'
import './style.css';

function App() {
  return (
    <div className="App">
      <nav className="top-nav">
        <span className='secure-password-btn'>
          <AiFillLock size={50}></AiFillLock>
          Secure Password?
        </span>
      </nav>
      <main className='wrapper'>
        <div className='container1'>
          <div className='passwords'>
            
          </div>
        </div>
        <div className='container2'>
          <div className='password-options'>
            <PasswordOption textName={"Character Count"}></PasswordOption>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
