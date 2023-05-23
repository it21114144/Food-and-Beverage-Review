import React, { Component } from 'react';
import "../style/MainContent.css";
import MainPage from './MainPage';
import Grid from "@mui/material/Grid";
import LeftContent from './LeftContent';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            <MainPage />
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <LeftContent/>
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        
                    </Grid>
                    
                </Grid>
            </div>
         );
    }
}
 
export default MainContent;