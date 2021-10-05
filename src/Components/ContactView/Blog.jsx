import React from "react"
import { Grid} from "@material-ui/core"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
function Blog() {
    return (
        <Grid container xs={12} style={{width: "80%", margin: "auto", padding: "25px 0"}}>
            <Grid item xs={12} style={{display: "flex", justifyContent: "space-between"}}>
                {/* Header */}
                <div style={{fontWeight: "600", fontsize:"16px"}}>
                    Blog
                </div>
                
                <a href="https://www.linkedin.com/company/instantcard/about/" style={{textDecoration: "none", color: "black"}}>
                    <div style={{display: "flex", alignItems: "center", fontWeight: "600", fontsize: "16px"}}>
                        <div>Follow on LinkedIn</div><div><ArrowForwardIcon style={{fontSize: "18px"}}/></div>
                </div>
                </a>
            </Grid>
            {/* Featured Class */}
            <Grid item xs={12}> 
                
            </Grid>

        </Grid>
    )
}
export default Blog