import React from 'react';
import styles from './teststyle.module.css'
import TestComponent from './TestComponent';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

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
            <Link to  = '/' className={styles.active}>                        
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
      <div className={styles.center} style={{ display: "flex", justifyContent: "center" }}>
      </div>
    </>
  )
}
export default AllVideos;
