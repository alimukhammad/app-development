import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div>
      <section className='ui_comments'>
        <user_feedback>
          <User
            name='John Doe'
            date='Today'
            feedback='This is a great app!'
            // picture='https://semantic-ui.com/images/avatar/small/joe.jpg'
          />
        </user_feedback>
      </section>

      <div className='ui_card'>
        <div className='content'>
          <div className='header'></div>
          <div className='description'>
            {prompt.children}
          </div>
        </div>
        <div className='ui_bottom_button'>
          <i className='add_icon' style={{display:"inline:block", width:"100%"}}>Add Feedback</i>
        </div>
      </div>
    </div>
  );
}

export default App;
