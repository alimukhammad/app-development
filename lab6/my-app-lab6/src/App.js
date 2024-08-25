import logo from './logo.svg';
import hand from './images/hand.jpg';
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{color: "magenta", textAlign: "center"}}>Welcome to ReactJs</h1>
      <p>Let's be familiar with JSX elements</p>
      <h2>Activity: bucket list</h2>
      <p>Pros fo having a bucket list:</p>
      <label for="email" style={{color:"olive", padding: "0.5em 1em", fontWeight: 'bolder'}}>Enter e-mail</label>
      <input id="email" type="email" placeholder="Type your email" style={{backgroundColor:'rgb(230,230,230)', padding:'0.5em', borderRadius:'0.5em'}}></input>
      <button style={{marginLeft:'1em', backgroundColor:'magenta', padding:'0.5em 1em', borderRadius:'0.5em', color:'whitesmoke'}}>Submit form</button>
      <figure>
        <img src={'./images/hand.jpg'} alt="" style={{width:'50%'}}></img>
      </figure>
    </div>
  );
}

export default App;
