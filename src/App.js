
import './App.css'; 
import  Nav from  "./component/header"
import Profilesection from "./component/ProfilePage"
function App() {
  return (
    <div className="App">
    <Nav/> 
    <div className="Main">
   <Profilesection/>
   </div>
    </div>
  );
}

export default App;
