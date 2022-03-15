import React from 'react'
import styles from './teststyle.module.css'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    NavLink
  } from "react-router-dom";

export default function MyVideos() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Safety Videos</h1>
            <div style={{float: "left"}}>
                  <ul> 

                        <li>
                        <Link to  = '/MyVideos' className = {styles.active}>
                            <a >My Videos</a>
                        </Link>
                        </li>

                        <li>
                        <Link to  = '/AllVideos'>                        
                                <a>All Videos</a>
                          </Link>     
                        </li>
                            
                  </ul>
              </div>
            <div  className={styles.center} style = {{display: "flex", justifyContent: "center"}}>
              <svg height="600">
                
              </svg>
            </div>
    </div>
  )
}
