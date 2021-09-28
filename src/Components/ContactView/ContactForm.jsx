import React from "react"
import TextField from "@material-ui/core/TextField";
import { Box, Button, Paper, Typography, Grid } from "@material-ui/core";
import ContactSubComponent from "./ContactSubComponent"

const formObj = [
    
]
function ContactForm() {
    return(
        <>
        <Box>
            <Box>
                <Typography variant="h4">
                    Contact Sales
                </Typography>
                <Typography variant="p">
                    Fill out the form below and our sales team will be in touch!
                </Typography>
            </Box>
            <Grid>
                <Grid>

                </Grid>
                <Grid>
                    
                </Grid>
            
            </Grid>
        </Box>
        {/* // render contactSubComponent which is Render */}
        <ContactSubComponent />
        </>
    )
}

export default ContactForm