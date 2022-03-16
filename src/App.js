import Home from "./Home";
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
<<<<<<< HEAD
  return (
    <>
      <Router>
        <Routes>
          <Route path='/AllVideos' element={<AllVideos />}></Route>
          <Route path='/MyVideos' element={<MyVideos />}></Route>
        </Routes>
      </Router>
    </>
  )
=======
  
    return (
      <>
        <h1 style={{textAlign: "center"}}>Safety Videos</h1>
        <div style={{float: "left"}}>
              <ul> 
                  <li><a href="" className={styles.active}>My Videos</a></li>
                  <li><a href="">All Videos</a></li>
              </ul>
          </div>
        <div  className={styles.center} style = {{display: "flex", justifyContent: "center"}}>
          <svg height="600"></svg>
        </div>
        <Home/>
      </>
    )
>>>>>>> video-player
}

export default App;