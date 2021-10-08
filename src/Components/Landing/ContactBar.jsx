import React from "react"
import {makeStyles} from "@material-ui/styles"
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        background: "#E8E8E8", 
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        }
    },
    child: {
        width: "70%",
        padding: "15px 0",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            justifyContent: "center",
            padding: "5%",
        }
    },
    textDiv: {
        maxWidth: "35%",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            maxWidth: "100%",
            marginBottom: "20px"
        }
    },
    btnDiv: {
        width: "40%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            width: "100%", 
        },
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            justifyContent: "center",
            
        },
    },
    startBtn: {
        width: "50%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        background: "white",
        borderRadius: "5px",
        border: "1px solid #C4C4C4",
        height: "45px",
        color: "#3E3E3E",
        fontSize: '12px',
        fontWeight: "600",
        textDecoration: "none",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
           
        }
    },
    contBtn: {
        width: "50%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        color: "#3E3E3E",
        fontSize: '12px',
        fontWeight: "600",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            marginBottom: "20px",
        }
    },
}))
export default function ContactBar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.child}>
                <div className={classes.textDiv}>
                    <h3 style={{color: "#3E3E3E", fontWeight: "600", fontSize: "15px"}}>
                    Ready to get started?
                    </h3>
                    <p style={{color: "#3E3E3E", fontSize: "15px"}}>
                    Explore InstantCard, or create an account. You can also contact us to design a custom package for your business. <a href="contact" style={{fontWeight: "600", textDecoration: "none", color: "inherit"}}>Connect with us!</a>
                    </p>
                </div>
                <div className={classes.btnDiv}>
                   
                        <div className={classes.contBtn}>
                            <a href="contact" style={{textDecoration: "none", color: "inherit"}}>
                            Contact Us
                            </a>
                        </div>
                    <a href="/signup" className={classes.startBtn}>
                        <div >
                            Get Started
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}