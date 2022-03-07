import React from 'react'
import styles from './teststyle.module.css'
import {Link} from "react-router-dom"


export default function allvideos() {
  return (
    <>
        <h1 style={{textAlign: "center"}}>Safety Videos</h1>
        <div style={{float: "left"}}>
            <ul> 
                <li>My Videos</li>
                {/* <li><Link to = {"./App"}>My Videos</Link></li> */}
                <li>< a className={styles.active}>All Videos</a></li>
            </ul>
        </div>
        <div  className={styles.center} style = {{display: "flex", justifyContent: "center"}}>
        <svg height="600"></svg>
        </div>
  </>
  )
}
