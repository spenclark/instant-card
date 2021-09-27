import React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "70%",
        display: "flex",
        margin: "auto",
        marginTop: theme.spacing(7),
        marginBottom: theme.spacing(10),
        [theme.breakpoints.down("md")]: {
            maxWidth: "90%",
            flexDirection: "column",
          },
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(4),
            maxWidth: "95%",
            display: "flex",
            flexDirection: "column",

          },
    },
    parentBox: {
        width: "60%",
        zIndex: "1",
        display: "flex",
        background: "transparent",
        padding: "35px",
        [theme.breakpoints.down("md")]: {
            width: "80%",   
          },
          [theme.breakpoints.down("xs")]: {
                flexDirection: "column",
                width: "100%",   
                justifyContent: "center",
                margin: "auto",
                padding: "0",
            },
    },
    gradientBox: {
        position: "absolute",
        zIndex: "0",
        background: 'linear-gradient(80deg, #C5C5C5 18%, #727272 80%)',
        borderRadius: "5px",
        height: "360px",
        width: "500px",
        [theme.breakpoints.down("md")]: {
           maxWidth: "55%",
           minWidth: "50%",
          },
        [theme.breakpoints.down("xs")]: {
            display: "none"

          },
    },
    orderBox: {
        background: "#474747",
        width: "220px",
        height: "250px",
        borderRadius: "5px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
   
           },
         [theme.breakpoints.down("xs")]: {
            margin: "auto",
            height: "200px",
            width: "100%",
            marginLeft: "0",
            boxSizing: "border-box",
           },
    },
    videoBtn: {
        background: "transparent", border: "1px solid white", width: "100%", height: "44px", borderRadius: "5px", color: "white", fontWeight: "600", textAlign: "center", alignItems: "center", fontSize: "12px", display: "flex", justifyContent: "center"
        ,
        [theme.breakpoints.down("xs")]: {
            width: "60%",
            margin: "auto"
           },
    },
    designBox: {
        background: "#D6D6D6",
        width: "220px",
        textAlign: "left",
        height: "250px",
        borderRadius: "5px",
        padding: "20px",
        marginLeft: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]: {
            marginLeft: "10%"
           },
         [theme.breakpoints.down("xs")]: {
            margin: "auto",
            height: "200px",
            width: "100%",
            marginLeft: "0",
            marginTop: "30px",
            boxSizing: "border-box",
            justifyCenter: "center",
           },
    },
    galleryBtn: {
        background: "#989797", 
        width: "100%",
        height: "44px",
        borderRadius: "5px",
        color: "white",
        fontWeight: "600",
        textAlign: "center",
        alignItems: "center",
        fontSize: "12px", 
        display: "flex", 
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            width: "60%",
            margin: "auto",
            
           },
    },
    companyBox: {
        width: "40%",
        display: "flex",
        paddingBottom: "100px",
        alignContent: "center",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            justifyContent: "center",
            paddingTop: "50px",
            paddingBottom: "100px",
            width: "70%",   
            justifyContent: "center",
            margin: "auto",
        },
        [theme.breakpoints.down("xs")]: {
            width: "82%",
            paddingTop: "65px",
           },
    }
}))
function InfoBar() {
    // Bar used to display information about the company and product
    // no need to make component reusable (would take too much time for same result)
    const classes = useStyles()

    return (
        <div className={classes.root}>
            
            <div className={classes.gradientBox}>
            </div>
                <div  className={classes.parentBox}>
                    <div className={classes.orderBox}>
                            <div>
                                <div style={{color: "white", fontSize:"16px", fontWeight: "600", marginTop: "20px",  width: "90%"}}>
                                    Ordering & Delivery
                                </div>
                                <div style={{color: "#CFCFCF", fontSize:"16px", fontWeight: "500", marginTop: "10px",  width: "90%"}}>
                                    Each employee’s data is automatically entered into the design. Orders are shipped out the same day they are ordered.
                                </div>
                            </div>
                            <div className={classes.videoBtn}>
                                Watch Video
                            </div>  

                    </div>
                    <div className={classes.designBox}>
                            <div>
                                <div style={{color: "#3E3E3E", fontSize:"16px", fontWeight: "600",  marginTop: "20px", width: "90%"}}>
                                    Custom Designs
                                </div>
                                <div style={{color: "#565656", fontSize:"15px", marginTop: "10px",  width: "90%"}}>
                                Our professional designers will create a custom template based on your specifications.   
                                </div>
                            </div>
                            <div className={classes.galleryBtn}>
                                View Gallery
                            </div>  
             
                    </div>
                </div>
            
            <div className={classes.companyBox}>
                <div style={{color: "#565656", fontSize: "24px", fontWeight: "600",}}>Infrastructure for Modern ID Cards</div>       
                <div style={{color: "#565656", fontSize: "12px", fontWeight: "600", paddingTop: "10px"}}> Built for the largest enterprises to single-card-orders: same-day shipping, and intuitive ordering software. Photo ID cards made easy.</div>
           
            </div>
        </div>
    )
}

export default InfoBar