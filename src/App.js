import logo from './logo.svg';
import './App.css';
import Group from './Pages/Group/Group';
import Friends from './Pages/Friends/Friends';
import Chat from './Pages/Chat/Chat';
import Nav from './Pages/Nav/Nav';
import Info from './Pages/Chat/Info/Info';

function App() {
  return (
    <div style={{backgroundColor:'rgb(41, 40, 40)'}} className="App ">
     
      
<div className='d-flex'>

<Group></Group>
<Friends></Friends>

<div className='border'>
  <Chat></Chat>
</div>
<div  className='border '><Info></Info></div>

</div>
<div className='d-flex '>

</div>
    </div>
  );
}

export default App;
