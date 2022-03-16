import styles from './teststyle.module.css'
import AllVideos from './AllVideos'
import MyVideos from './MyVideos';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AllVideos />}></Route>
          <Route path='/MyVideos' element={<MyVideos/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;