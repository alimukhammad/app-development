import "./App.css";

function App() {
  //set the state
  const [count, setCount] = useState(1);
  //add event listnet to the button
  // const incrementBtn = document.querySelector(''.incrementBtn')
  // incrementbtn.addEventListner('click', function(){
  // setCount(count+1)
  // })
  return (
    <>
      <h1 className="title"> Example 1</h1>
      <p>The count is = {count}</p>
      <button
        class="incrementbtn"
        onClick={function () {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <h1 className="title"> Example 2: slice app</h1>
      <section className="slicecontainer">
        <div className="slicecontainer">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <p className="displaymsg">Display message</p>
        <div className="groupbtn">
          <button className="prey_btn">Previous</button>
          <button className="next_btn">Next</button>
        </div>
      </section>
    </>
  );
}

export default App;
