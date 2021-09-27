import React from "react"
import { makeStyles } from "@material-ui/styles"
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core"

const navStyles = makeStyles((theme) => ({
    // navbar styles
    root: {
        background: "transparent",
        borderBottom: "#F3F3F3 1px solid",
        boxShadow: "none"
    },
    bar: {

    },
    logo: {


    
    },
    logoSpan: {


    },

}))


function Navbar() {
    // this is the navbar, will appear at the top of all pages for this app. Also we will call the UseEffect hook to select -- this is so we prevents errors of someone navigates to host/design before selecting a design
    const classes = navStyles()
   
    return (
            <AppBar className={classes.root} position="stuck">
                <Toolbar></Toolbar>
            </AppBar>
        )
}

const footerStyles = makeStyles({
    root: {
        backgroundColor: "#fcfcfc",
        boxShadow: "none",
        borderTop: "1px solid #F3F3F3",
        display: "flex",
        padding: "0px 18%",
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "20vh",    },
})

function Footer() {
    // this is the footer will appear at the top of all pages for this app. 
    const classes = footerStyles()
    return (
        <Box className={classes.root}>
            <Grid   
                container
                direction="row"
                alignItems="center"
            >
                    <Grid item md={6} sm={12}>
                        <div>
                            <div>
                                Instant<span>Card</span>
                            </div>
                            <div>
                                One Research Ct.—Suite 450 Rockville, MD 20850, USA
                            </div>
                        </div>
                            <div >
                                Mon-Fri 9:00 – 6:00PM EST
                            </div>
                            <div>
                                888-980-6179
                            </div>
                       
                    </Grid>
                    <Grid container item md={6} sm={12}>
                            <Grid item md={3} sm={12}>
                                Product
                            </Grid>
                            <Grid item md={3} sm={12}>
                                Use Case
                            </Grid>
                            <Grid item md={3} sm={12}>
                                Company
                            </Grid>
                    </Grid>
                </Grid>
        </Box>
    )}
export {Navbar, Footer}