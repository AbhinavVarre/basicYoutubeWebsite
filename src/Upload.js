import React from 'react'
import styles from './teststyle.module.css'
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
            <Navigation/>
            <div className={styles.center} style={{ display: "flex", justifyContent: "center" }}>
                <input type="file" name="file" onChange={changeHandler}/>
                <div>
                    <button onClick={handleSubmission}>Submit</button>
                </div>
            </div>

        </>
      
    );
}
