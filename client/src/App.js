import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import NewProject from './pages/NewProject'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Register from './pages/Register'




function App() {
  return (
    <Router>
    <div className="max-w-7xl m-auto px-4">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create' element={<PrivateRoute/>}>
           <Route path='/create' element={<NewProject/>}/>
        </Route>
         <Route path='/myproject/:projectId' element={<PrivateRoute/>}>
           <Route path='/myproject/:projectId' element={<Project/>}/>
        </Route>
        <Route path='/myprojects' element={<Projects/>}>
          <Route path='/myprojects/create' element={<PrivateRoute/>}>
            <Route path='/myprojects/create' element={<NewProject/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
