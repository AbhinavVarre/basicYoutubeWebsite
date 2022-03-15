import React from 'react';
import styles from './teststyle.module.css'
import MyVideos from './MyVideos';
import TestComponent from './TestComponent';
import { Link } from 'react-router-dom';

function AllVideos() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Safety Videos</h1>
        <div style={{ float: "left" }}>
          <ul> 
            <li>
              <Link to  = '/MyVideos'>
                <a>My Videos</a>
              </Link>
            </li>

            <li>
            <Link to  = '/AllVideos' className={styles.active}>                        
              <a >All Videos</a>
            </Link>
            </li>
            
           
          </ul>
        </div>
      <div className={styles.center} style={{ display: "flex", justifyContent: "center" }}>
        <svg height="600"></svg>
      </div>
    </>
  )
}
export default AllVideos;
