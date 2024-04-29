import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from './SideBar';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Users from './Users';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateUser from './CreateUser';
import Veiw from './Veiw';
import Edit from './Edit';

function App() {


  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <SideBar></SideBar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <NavBar></NavBar>
              <div class="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard></Dashboard>}></Route>
                  <Route path="/users" element={<Users></Users>}></Route> 
                  <Route path="/createusers" element={<CreateUser></CreateUser>}></Route> 
                  <Route path="/veiw/:id" element={<Veiw></Veiw>}></Route>
                  <Route path="/edit/:id" element={<Edit></Edit>}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;
