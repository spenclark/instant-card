import React from "react"
import { makeStyles } from "@material-ui/styles"
import DisplayCard from "../../Assets/DisplayCard"

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: "70%", paddingTop: "70px", margin: "auto",
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
    header: {
        borderBottom: "1px solid #C4C4C4", marginBottom: "25px"
    },
    searchBar: {
        display: 'flex',
        flexDirection: "column",
        width: "55%",
        paddingBottom: "25px",
        [theme.breakpoints.down("xs")]: {
            width: "85%",
            margin: "auto",
          },
    },
    nextBtn: {
        background: "#C4C4C4",
        marginTop: theme.spacing(2),
        width: "300px",
        display: "flex",
        justifyContent: "center",
        padding: "15px 0px",
        fontWeight: "600",
        fontSize: "14px"
    },
}))

export default function DesignIntro() { 
    const classes = useStyles()
    return (
        <div className={classes.root}>

            {/* Header Text */}
            <div className={classes.header}>
                <div style={{textAlign: "center"}}>
                    <h2 style={{color: "#3E3E3E", fontSize: "24px"}}>
                        Order a custom sample
                    </h2>
                    <p style={{color: "#565656", fontSize: "18px", paddingBottom: "25px"}}>
                        Select a design below and recive a free sample
                    </p>
                </div>
            {/* Search form and label */}
                <div className={classes.searchBar}>
                    <p style={{fontSize: "12px", fontWeight: "600"}}>Sort By Keywords</p>
                    <input type="text" style={{border: "1px dashed #848484", height: "55px", fontSize: "18px", borderRadius: "5px", paddingLeft: "1.5%"}} ></input>
                </div>
            </div>
            {/* card carosuel */}
            <DisplayCard />

            <div className={classes.nextBtn}>
                Design Card
            </div>  
        </div>

    )
}