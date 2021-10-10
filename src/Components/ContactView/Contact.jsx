import React from "react"
import { Grid, Typography } from "@material-ui/core"
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import {makeStyles } from "@material-ui/styles"
import ContactSubComponent from "./ContactSubComponent";

const useStyles = makeStyles((theme) => ({
    slanted: {
        border: "blue 1px solid",
        background: "red",
        zIndex: "1",
        height: "1000vh",
        width: "100%",
        position: "absolute",
        transform: [{ rotate: '45deg'}]
        },
    textDiv: {
        margin: "auto", textAlign: "center", paddingTop: "5%", zIndex: "2",
    },
    cardParent: {
        padding: "1%",   
        marginTop: "30px",
        background: "#fffff",
        zIndex: "2",
        [theme.breakpoints.up("md")]: {
            width: "30%",

            background: "1px solid red"
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    card: {
        display: "flex",justifyContent: "center", color: "white", background: "#474747", padding: "0", alignItems: "center", textAlign: "center", flexDirection: "column", borderRadius: "7px",
        "&:hover": {
            boxShadow: "5px 2px 14px #CFCFCF",
            transform: "translateY(-8px)",
            transitionDelay: "100ms",
        },
    },
    icon: {
        boxShadow: "2px 1px 7px #4d4d4d",
        height: "60px",
        width: "60px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        marginBottom: "165px",
        color: "#CFCFCF",
        background: "#474747"
    },
    title: {
        marginTop: "60px",
        marginBottom: "12px",
        fontWeight: "600"

    },
    action: {
        marginTop: "45px",
        color: "black",
        fontWeight: "600",
        fontSize: "12px",
        background: "#D6D6D6",
        width: "100%",
        padding: "8px 0",
        borderRadius: "0 0px 7px 7px"
    }
}))

const contactUs = {
    title: "Contact Us",
    subTitle: "Get in touch and let us know how we can help."
}

const CardArr = [
    {
        icon: <LocationCityIcon />,
        title: "Sales",
        subTitle: "We would love to learn more about you and your business.",
        callToAction: "Contact Sales",
        linkTo: "/contact-us"
    }, {
        icon: <LiveHelpIcon />,
        title: "Support & Help",
        subTitle: "Find awnsers and ask questions. We are here to help.",
        callToAction: "Get Support",
        linkTo: "/faq"
    }, {
        icon: <ImportContactsIcon />,
        title: "Blog & Media",
        subTitle: "Stay upto date with Instantcard's latest news and blogs",
        callToAction: "Start Learning",
        linkTo: "/blog"
    }
]

export default function ContactView() {
    const classes = useStyles()

    return (
        <>
            {/* <div className={classes.slanted}></div> */}
            {/* <img src={Polygon} style={{ position: "absolute", left: 0, zIndex: 0,}} /> */}
            <div style={{margin: "auto", width: "100%", marginBottom:"5%" }}>
                    <div style={{margin: "auto", width: "100%", }}>
                    {/* Title Div */}
                    <div className={classes.textDiv}>
                        <Typography variant="h3" style={{fontWeight: "600", fontSize: "28px", padding: "6px",}}>
                            {contactUs.title}
                        </Typography>
                        <Typography variant="p" style={{fontWeight: "500", fontSize: "18px", }}>
                            {contactUs.subTitle}
                        </Typography>
                        
                    </div>
                {/* Card Div */}
                <div>
                        <Grid container xs={12} style={{display: "flex", margin: "auto", justifyContent: "space-apart",  marginTop: "2%", width: "80%"}}>
                            {CardArr.map((e) => (
                                    <Grid item sm={12} md={4} className={classes.cardParent}>
                                        <a href={e.linkTo} style={{textDecoration: "none"}}>
                                            <div className={classes.card}>
                                                <div className={classes.icon}>
                                                    {e.icon}
                                                </div>
                                                <div className={classes.title}> 
                                                    {e.title}
                                                </div>
                                                <div style={{padding: "0 50px"}}>
                                                    {e.subTitle}
                                                </div>
                                                <div className={classes.action}>
                                                    {e.callToAction}
                                                </div>
                                            </div>
                                        </a>
                                    </Grid>
                                
                            ))}
                        </Grid>
                </div>
                {/* Reroute Div - Easy flow if card options leave user stuck */}
               
                </div>
                
            </div>
            <ContactSubComponent />
            <p style={{paddingBottom:"5%"}}></p>
    </>                          
    )
}