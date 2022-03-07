import styles from './teststyle.module.css'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <h1 style={{textAlign: "center"}}>Safety Videos</h1>
        <div style={{float: "left"}}>
              <ul> 
                <Routes>
                      <li><a  className={styles.active} >My Videos</a></li>
                      <li><a>All Videos</a></li>
                </Routes>
                   
              </ul>
          </div>
        <div  className={styles.center} style = {{display: "flex", justifyContent: "center"}}>
          <svg height="600"></svg>
        </div>
    </Router>
     
    </>
  )
}

export default App;