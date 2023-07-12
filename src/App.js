import NavBar from './NavBar';
import Home from './Home';

export default function App() {
   return (
    <div className="App">
      <NavBar/>
      <div className="content">
       <Home/>
     </div>
    </div>
  );
}

