import React from 'react'
import Home from "./Home";
import Navigation from './Navigation';
import styles from './teststyle.module.css'

import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export default function MyVideos() {
  return (
    <div>
       <h1 style={{ textAlign: "center" }}>Safety Videos</h1>
        <div style={{ float: "left" }}>
          <ul> 
            <li>
              <Link to  = '/MyVideos'  className={styles.active}>
                <a>My Videos</a>
              </Link>
            </li>

            <li>
            <Link to  = '/'>                        
              <a >All Videos</a>
            </Link>
            </li>
            <li>
              <Link to  = '/Upload'>                        
                      <a>Upload</a>
              </Link>     
             </li>
            
           
          </ul>
        </div>
            <div  className={styles.center} style = {{ display: "flex", justifyContent: "center"}}>
              <div className={styles.content}>
                <Home/>
              </div>
            </div>
    </div>
  )
}
