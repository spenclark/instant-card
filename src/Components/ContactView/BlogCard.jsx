import React from "react"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid } from "@material-ui/core";
function blogCard({props}) {
    return (
        <Grid>
            <Grid>
                <div>
                    <p>{props.tag}</p>
                    <p>{props.title}</p>
                </div>
                <div>
                    <p>{props.date}</p>
                    <p>{props.author}</p>
                </div>
            </Grid>
            
            <Grid>
                <Grid>
                    <p>
                        {/* since I wont be making routes for the actual blog posts we will just use the splice method to show a demo */}
                        {props.body.slice(0, 160)}
                    </p>
                    <p>Read more <ArrowForwardIosIcon /></p>
                </Grid>
                <Grid>
                    <img src={props.media} height="350px" weight="auto"></img>
                </Grid>
            </Grid>

        </Grid>
    )
}