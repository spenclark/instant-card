import React from "react"
import { makeStyles, styled } from "@material-ui/styles"
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core"
import {ProductItems, CaseItems, CompanyItems } from "../../utils/NavBarItems"
const navStyles = makeStyles((theme) => ({
    // navbar styles
    root: {
        background: "transparent",
        borderBottom: "#F3F3F3 1px solid",
        boxShadow: "none"
    },
    bar: {
        display: "flex", justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
           flexWrap: "wrap"
    
          },
    },
   navItems: {
        // padding: "22px 0",
        // border: "1px solid blue",
        marginLeft: theme.spacing(40),
        marginRight: theme.spacing(40),
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20)
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(0)

        },
   }

}))

const NavButton = styled("Button")({
    display: "inline",
    padding: "0px 12px",
    height: "100%",
    fontSize: "14px",
    color:"#565656",
})

const LogInButton = styled("Button")({
    color: "#565656",
    fontSize: "14px",
    padding: "10px 32px",
    borderRadius: "5px",
    fontWeight: "600",
    transitionDelay: "60ms",
})

const SignUpButton = styled(LogInButton)({
    background: "#E0E0E0",
    "&:hover": {
        background: "#EDEDED",
        color: "black"
    }
})

function Navbar() {
    // this is the navbar, will appear at the top of all pages for this app. Also we will call the UseEffect hook to select -- this is so we prevents errors of someone navigates to host/design before selecting a design
    const classes = navStyles()
   
    return (
            <AppBar className={classes.root} position="stuck">
                <Toolbar className={classes.bar}>
                    <Box>
                        <a href="/" style={{textDecoration: "none"}}>
                        <Typography variant="h1" style={{fontSize: "22px", fontWeight: '600', "font-family": "'Roboto Condensed', sans-serif", color: "#565656"}}>
                            Instant<span style={{color: "#3e3e3e"}}>Card</span>
                        </Typography>
                        </a>
                    </Box>
                    <Box className={classes.navItems}>
                        <NavButton>
                            Product {"&"} Services
                        </NavButton>
                        <NavButton>
                            Use Cases
                        </NavButton>
                        <NavButton>
                            Company
                        </NavButton>
                    </Box>
                    <Box>
                        <LogInButton>
                            Sign In
                        </LogInButton>
                        <a href="/signup">
                            <SignUpButton>
                            Try Now
                            </SignUpButton>
                        </a>
                    </Box>
                </Toolbar>
            </AppBar>
        )
}

const footerStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#fcfcfc",
        boxShadow: "none",
        borderTop: "1px solid #F3F3F3",
        display: "flex",
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        maxWidth: "70%",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
            maxWidth: "90%",
          }, 
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(4),
            maxWidth: "95%",
            display: "flex",
            flexDirection: "column",

          },
      },
}))


const FooterNavItem = styled(Typography)({
    fontSize: "12px", fontWeight: "600", color: "#848484"
})

const FooterNavTitle = styled(FooterNavItem)({
  color: "#3E3E3E"
})

function Footer() {
    // this is the footer will appear at the top of all pages for this app. 
    const classes = footerStyles()
    return (
            <Grid   
                container
                className={classes.root}
            >
                    <Grid item md={6} sm={12}>
                        <div style={{marginBottom: "15px"}}>
                            <div style={{fontSize: "22px", fontWeight: '600', "font-family": "'Roboto Condensed', sans-serif", color: "#565656"}}> 
                                Instant<span style={{color: "#3e3e3e"}}>Card</span>
                            </div>
                            <div style={{color: "#848484"}}>
                                One Research Ct.—Suite 450 Rockville, MD 20850, USA
                            </div>
                        </div>
                            <div style={{color: "#848484"}}>
                                Mon-Fri 9:00 – 6:00PM EST
                            </div>
                            <div style={{fontWeight: "600"}}>
                                888-980-6179
                            </div>
                       
                    </Grid>
                    <Grid container item md={6} sm={12} style={{}}>
                            <Grid item md={4} sm={12}>
                                <FooterNavTitle>Product</FooterNavTitle>
                                {ProductItems.map((e) => {
                                   return( <FooterNavItem key={e.label} >
                                        {e.label}
                                    </FooterNavItem>)
                                })}
                            </Grid>
                            <Grid item md={4} sm={12}>
                            <FooterNavTitle>Use Cases</FooterNavTitle>
                                {CaseItems.map((e) => {
                                   return( <FooterNavItem key={e.label} >
                                        {e.label}
                                    </FooterNavItem>)})}
                            </Grid>
                            <Grid item md={4} sm={12}>
                            <FooterNavTitle>Company</FooterNavTitle>
                                {CompanyItems.map((e) => {
                                   return( <FooterNavItem key={e.label} >
                                        {e.label}
                                    </FooterNavItem>)})}
                            </Grid>
                    </Grid>
                </Grid>
    )}
export {Navbar, Footer}