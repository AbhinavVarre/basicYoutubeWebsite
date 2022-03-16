import React from 'react';
import styles from './teststyle.module.css'
import TestComponent from './TestComponent';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function AllVideos() {
  return (
    <>
      <Navigation/>
      <div className={styles.center} style={{ display: "flex", justifyContent: "center" }}>
      </div>
    </>
  )
}
export default AllVideos;
