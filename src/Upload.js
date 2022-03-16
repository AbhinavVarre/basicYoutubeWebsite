import React from 'react'
import styles from './teststyle.module.css'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { useForm } from "react-hook-form";
import {useState} from 'react';


export default function Upload() {
   
    const [selectedFile, setSelectedFile] = useState();

    const handleSubmission = () => {
       console.log(selectedFile)
	};

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

  
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
            <Link to  = '/' >                        
              <a >All Videos</a>
            </Link>
            </li>
            <li>
              <Link to  = '/Upload' className={styles.active}>                        
                      <a>Upload</a>
              </Link>     
             </li>
            
           
          </ul>
        </div>
            <div className={styles.center} style={{ display: "flex", justifyContent: "center" }}>
                <input type="file" name="file" onChange={changeHandler}/>
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>

        </>
      
    );
}
