import './App.css';
import elemlist from './list';
import PodcastCard from "./Card";
import {Grid, Typography} from "@material-ui/core";
import React from "react";

function App() {
  return (
      <React.Fragment>
          <div>
              <h1 color={"red"}  style={{textAlignLast: "center", backgroundColor: "#f29274", padding: 15}}>
                  Funny Podcasts
              </h1>
          </div>
          <div style={{paddingTop:30, paddingBottom:30, paddingLeft:100, paddingRight:100}}>
              <Grid container alignItems="center" justify="space-between" style={{ padding: 10}} direction={'row'} spacing={2}>
                {
                  elemlist.map(podcast=>
                    <PodcastCard podcast={podcast}/>
                  )
                }
              </Grid>
          </div>
          <div>
              <h1 color={"red"}  style={{textAlignLast: "center", backgroundColor: "#f29274", padding: 15}}>
              </h1>
          </div>
      </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
