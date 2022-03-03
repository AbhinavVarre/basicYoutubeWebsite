function App() {
    const mystyle = {
      alignItems: "center",

    };
  function something()
  {
    return (
      <div>
        something
      </div>
    )
  }
  return (
    <>
      <h1 style={{textAlign: "center"}}>Safety Videos</h1>
      <div>
        <div>
          <button class = "all-videos" type = "button">All Videos</button>
          <br></br>
          <button class = "my-videos" type = "button">My Videos</button>
        </div>
      <div style = {{display: "flex", justifyContent: "center"}}>
          <svg width="710" height="710">
            <rect style = {{color: "red"}} width="600" height="600"/>
          </svg>
      </div>
      </div>
     
    </>
  )
}

export default App;
