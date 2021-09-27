import React from "react"
import { makeStyles } from "@material-ui/styles"
import Clients from "../../Assets/content/clients.webp"
import Trustpilot from "../../Assets/content/trustpilot.webp"
const useStyles = makeStyles((theme)=> ({
    root: {
        paddingTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "74%",
        [theme.breakpoints.down("md")]: {
            width: "92%",
          },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
          },
    },
    title: {
        color: "#565656",
        fontWeight: "600",
        fontSize: "16px",
        paddingLeft: "28px",
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
            paddingLeft: "20px",

        },
      [theme.breakpoints.down("xs")]: {
            fontSize: "12px",
            paddingLeft: "10px",

        },
    },

    clientImg: {
        maxWidth: "900px",
        paddingBottom: theme.spacing(1),
    },

    trustPilot: {
        maxWidth: "150px",
        paddingLeft: "28px",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "20px",
            
        },
      [theme.breakpoints.down("xs")]: {
            paddingLeft: "10px",
            maxWidth: "100px"

        },
    },
}))

function ClientRow() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h4 className={classes.title}>Trusted By</h4>
            <img src={Clients} alt="Beep" className={classes.clientImg}></img>
            <img src={Trustpilot} alt="Bang" className={classes.trustPilot}></img>
        </div>
    )
}

export default ClientRow