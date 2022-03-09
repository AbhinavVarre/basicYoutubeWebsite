import Home from "./Home";
import styles from './teststyle.module.css'

function App() {
  
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
}

export default App;