import React from "react"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    readMore: {
        paddingRight: "4px", 
        "&:hover": {
            color: "black",
            paddingRight: "5px", 
            transitionDelay: "100ms"
        }
    }
})
function BlogCard({props}) {
    const classes = useStyles()
    return (
        <>
            <Grid container style={{display: "flex", justifyContent: "space-between", background: "transparent"}}>
                <Grid item xs={12} sm={8}>
                    <p style={{borderLeft: "1px solid black", paddingLeft: "8px", fontSize: "14px", fontWeight: "600"}}>{props.tag}</p>
                    <p style={{fontSize: "24px", padding: "15px 0", fontWeight: "600"}}>{props.title}</p>
                </Grid>
                <Grid item xs={12} sm={4} style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <p style={{ color: "grey", textAlign: "right", fontSize: "14px" }}>{props.date}</p>
                    <p style={{ color: "grey", textAlign: "right", fontSize: "14px"}}>{props.author}</p>
                </Grid>
            </Grid>
            <Grid container style={{display: "flex", padding: "10px 0", justifyContent: "space-between"}}>
                <Grid item xs={12} sm={6}>
                    <p style={{lineHeight: "1.3", fontSize: "16px"}}>
                        {/* since I wont be making routes for the actual blog posts we will just use the splice method to show a demo */}
                        {props.body.slice(0, 200)}...
                    </p>
                    <p style={{fontSize: "14px", color: "#343434", display: "flex", paddingTop: "15px", alignItems: "center", fontWeight: "600"}} >
                        <div className={classes.readMore} >Read more</div><ArrowForwardIosIcon style={{fontSize: "14px"}}/>
                        </p>
                </Grid>
                <Grid item xs={12} sm={6} style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>            
                        <img src={props.media} alt="Expected Img" Height="160px" maxWidth="200px" style={{borderRadius: "8px"}}></img>
                </Grid>
            </Grid>

            </>
    )
}

export default BlogCard