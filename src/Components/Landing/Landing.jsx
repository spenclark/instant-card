import React from "react"
import DisplayCard from "../../utils/DisplayCard"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import ClientRow from "./ClientRow"
// import Designer from "./Designer/Designer"
import DesignIntro from "../CardDesigner/DesignIntro"
import InfoBar from "./InfoBar"
import ContactBar from "./ContactBar"

const useStyles = makeStyles((theme)=> ({
    root: {
        paddingTop: theme.spacing(10),
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
    body: {
        display: "flex",
        alignContent: "start",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            margin: "auto",

            justifyContent: 'center'
          },
        
    },
    title: {
        fontWeight: "600",
        fontSize: "36px",
        color: "black",
        paddingBottom: theme.spacing(1.5),
        [theme.breakpoints.down("xs")]: {
            maxwidth: "100%",
            textAlign: "center",
            fontSize: "30px",
            margin: "auto",
            paddingBottom: theme.spacing(0.5),

          },
    },
    bp: {
        [theme.breakpoints.down("xs")]: {
            display: "None"
          },
    },
    subTitle: {
        fontWeight: "550",
        fontSize: "16px",
        color: "#3E3E3E",
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            fontSize: "14px",
            margin: "auto",
            width: "90%",
            paddingBottom: theme.spacing(3),
          },
    },
    heroButtons: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "12px",
        [theme.breakpoints.down("xs")]: {
            margin: "auto",
            justifyContent: "center",
            flexDirection: "column"
        },
    },
    sampleButton: {
        padding: "15px 50px",
        backgroundColor: "#E9E9E9",
        borderRadius: "5px",
        fontWeight: "600",
        "&:hover": {
            boxShadow: "0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)",
            transitionDelay: "80ms",
            opacity: ".9",
            backgroundColor: "#d6d6d6",

        },
        [theme.breakpoints.down("xs")]: {
            width: "100%"
        }

    },
    contactButton: {
        padding: "15px 50px",
        fontWeight: "600",
        [theme.breakpoints.down("xs")]: {
            display: "inline",
            width: "100%"
        },
        "&:hover": {
        textDecoration: "underline",
        },
    },
    media: {
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(5),
            justifyContent: "center"

        }
    }
}))

const heroText = {
    title: `Design and Issue`,
    title2: "Employee ID cards",
    subTitle: "Printing employee ID cards in-house is a hassle. InstantCard’s software makes designing and shipping custom employee cards fast and affordable.",
    sampleText: "Design a free sample",
    contactUs: "Contact us",
}

    function Landing() {
        
        const classes = useStyles()

        return (
            <>
            <Grid container className={classes.root}>
                <Grid container item xs={12} sm={7} className={classes.body}>

                    {/* Landing page hero */}
                            <h1 className={classes.title}>
                                {heroText.title}
                      
                                <br className={classes.bp}/>
                                {" "}
                                {heroText.title2}
                            </h1>
                            <h2 className={classes.subTitle}>
                                {heroText.subTitle}
                            </h2>
                                <div className={classes.heroButtons} >
                                    <a href="#sample"><button className={classes.sampleButton} >
                                        {heroText.sampleText}
                                    </button>
                                    </a>
                                    <a href="/contact">
                                    <button className={classes.contactButton} >
                                        {heroText.contactUs}
                                    </button>
                                    </a>
                                </div >
                        </Grid >
                    <Grid container item xs={12} sm={5} className={classes.media}>
                     {/* Demo Card i.e hero img */}
                        <DisplayCard />
                    </Grid >
           
            </Grid >
                {/* Client / User List */}
                <ClientRow />
                {/* Design sample Slide+ Search -> Leads to sample design page */}
                <div id="sample">
                <DesignIntro />
                </div>
                {/* Information Cards */}
                <InfoBar />

                {/* Final Hook w/ link to contact view*/}
                <ContactBar />

            </>
        )
    }


export default Landing

