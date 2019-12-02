import React from "react";
import { Box, Grid, Link, Typography, Paper, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import * as locationData from "./data/processedLocations.json";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 800,
      width: 400,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

export default function InfoBox(props) {
    const classes = useStyles();
    const {name, address, bed, bath, Sqft, price, safety, convience, link, recommend, selectedLocation, setSelectedLocation} = props;
    
    function Recommend(props) {
        const {rank, uid , selectedLocation, setSelectedLocation} = props;
            
        return (
            <Box display="flex" justifyContent="flext-start" m={1}>
                <Box display="flex" justifyContent="center" alignItems="center" classes = "similarity-rating" borderRadius="50%" width = "21px" height = "21px" bgcolor = "#62aef7" marginRight="2px">
                    <Box>
                        <Box textAlign= "center" component="span" display="inline" bgcolor="transparent" fontSize = "10px" color="white" lineHeight = "15px">
                            {rank}
                        </Box>
                        <Box textAlign= "center" component="span" display="inline" bgcolor="transparent" fontSize = "5px" color="white" lineHeight = "7.5px">
                            /10
                        </Box> 
                    </Box>
                </Box>
                <Link component="button" color="black" fontSize="24px" margin = {5}
                      onClick={() => {
                        setSelectedLocation(locationData.default[uid]);
                      }}>
                          {locationData.default[uid].name}
                </Link>
        </Box>
        )

    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    {/* <Grid item>
                        <ButtonBase className={classes.image}>
                            
                        </ButtonBase>
                    </Grid> */}
                    <Grid item xs={12} sm container direction="column">
                        <Grid item xs container spacing={1} direction="column">
                            <Grid item xs>
                                <Box display="flex" justify="space-around">
                                    <Box fontWeight="fontWeightBold" fontSize={24}>
                                        {name}
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body2" gutterBottom color="textSecondary">
                                    {address}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Box display="inline">
                                    <Box display="inline" paddingRight="10px" marginRight={1}>
                                        <Typography variant="body1" component="span">Bed: </Typography>
                                        <Typography variant="body2" component="span">{bed}</Typography>
                                    </Box>
                                    <Box display="inline" paddingRight="10px" marginRight={1}>
                                        <Typography variant="body1" component="span">Bath: </Typography>
                                        <Typography variant="body2" component="span">{bath}</Typography>
                                    </Box>
                                    <Box display="inline" paddingRight="10px" marginRight={1}>
                                        <Typography variant="body1" component="span">Sqft: </Typography>
                                        <Typography variant="body2" component="span">{Sqft}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Box display="inline">
                                    <Box display="inline" paddingRight="10px" marginRight={1}>
                                        <Typography variant="body1" component="span">Safety: </Typography>
                                        <Typography variant="body2" component="span">{safety}</Typography>
                                    </Box>
                                    <Box display="inline" paddingRight="10px" marginRight={1}>
                                        <Typography variant="body1" component="span">Convenience: </Typography>
                                        <Typography variant="body2" component="span">{convience}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs>
                                <Recommend rank = {1} uid = {recommend[0]} selectedLocation = {selectedLocation}
                                            setSelectedLocation = {setSelectedLocation}/>
                                <Recommend rank = {2} uid = {recommend[1]} selectedLocation = {selectedLocation}
                                            setSelectedLocation = {setSelectedLocation}/>
                                <Recommend rank = {3} uid = {recommend[2]} selectedLocation = {selectedLocation}
                                            setSelectedLocation = {setSelectedLocation}/> 
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Box display="flex" justifyContent="center">
                            <Box textAlign= "center" component="span" display="inline" bgcolor="transparent" fontSize = "16px" color="black" lineHeight = "30px">
                                {price}
                            </Box>
                            <Box textAlign= "center" component="span" display="inline" bgcolor="transparent" fontSize = "10px" color="black" lineHeight = "15px">
                                {"$/Month"}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

