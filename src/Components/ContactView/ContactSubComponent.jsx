import React from "react"
import ForumIcon from '@material-ui/icons/Forum'
import HealingIcon from '@material-ui/icons/Healing'
import {Grid} from "@material-ui/core"

function ContactSubComponent() {
    // This is the component that appears at the bottom -- gives user an easy out/fail safe option when trying to get in touch or figure something out
    return (
        <Grid container xs={12} style={{width: "70%", display: "flex", justifyContent: "center", alignContent: "center", margin: "auto", height: "15vh"}}>
            <Grid item sm={6} xs={12} style={{borderRight: "1px grey solid"}}> 
                <div style={{display: "flex", justifyContent: "center", margin: "auto", width: "70%"}}>
                    <ForumIcon
                    style={{color: "#3E3E3E", paddingRight: "12px"}}></ForumIcon>
                    <div>
                        <p style={{color: "#3E3E3E", fontSize: "16px"}}>
                            General Communications
                        </p>
                        <p style={{color: "#3E3E3E", fontSize: "14px"}}>
                            For general queries, or just to talk. You can find us at <span style={{fontWeight: "600"}}>general@instantcard.net</span>
                        </p>
                    </div>
                </div>
            </Grid>
            
            <Grid item sm={6} xs={12}>
                <div style={{display: "flex", justifyContent: "center", margin: "auto", width: "70%"}}>
                    <HealingIcon style={{color: "#3E3E3E", paddingRight: "12px"}}>
                    </HealingIcon>
                    <div>
                        <p style={{color: "#3E3E3E", fontSize: "16px"}}>
                            Technical or account support
                        </p>
                        <p style={{color: "#3E3E3E", fontSize: "14px"}}>
                            We are here to help! If you have technical issues,  <span style={{color: "black", fontWeight: "600"}}>contact support@instantcard.net</span>
                        </p>
                    </div>  
                </div>
            </Grid>
        </Grid>
    )
}

export default ContactSubComponent