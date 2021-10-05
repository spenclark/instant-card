// FAQ PAGE with content taken from 
import React from "react"
import {faqData} from "../../utils/faqData"

import { Typography, Box, Grid, List, ListSubheader, ListItem, ListItemText } from "@material-ui/core"
import { Rating } from "@mui/material"

function renderMedia(mediaType, media) {
  if(mediaType === "image"){
   return  <img src={media} width="75%" height="auto"></img>
  } else if(mediaType === "video") {
    return (
    <iframe width="75%" height="360px" src={`https://www.youtube.com/embed/${media}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    )
  } else {
    <p>
     {/* No Media */}
    </p>
  }
}

const FAQlist = (props) => (
    <List style={{padding: "10px"}}> 
    <Typography style={{textAlign: "center", fontWeight: "600"}}>
      Find Awnsers
    </Typography>
    {faqData.map((e) => (
      <li key={e.category}>
        <ul>
          <ListSubheader style={{fontSize: "12px", fontWeight: "600", padding: "0"}}>{`${e.category}`}</ListSubheader>
          {e.items.map((item) => (
            <ListItem key={item.title} style={{fontSize: "12px", padding: "0"}}>
              <ListItemText primary={`${item.title}`} fontSize="12px" />
            </ListItem>
          ))}
        </ul>
      </li>
    ))}
  </List>
)

export default function FAQ() {

    const Showcase = props => {
      console.log(props.props.body)
      return (
      <Box>
          <Grid container xs={12} sm={12} style={{marginTop: "40px" }}>
              <Grid item xs={12} sm={6} style={{marginTop: "20px", padding: "2%", display: "flex", flexDirection: "column"}}>
                  <Typography style={{fontWeight: "600", fontSize: "14px"}}>
                      {props.props.title}
                  </Typography>
                  <Typography style={{fontWeight: "500", fontSize: "14px"}}>
                     {props.props.body}
                  </Typography>
              </Grid>
              <Grid item xs={12} sm={6} style={{display: "flex", justifyContent: "center"}}>
                    {renderMedia(props.props.mediaType, props.props.media)}
              </Grid>
             <Grid item xs={12}>
                    <div style={{display: "flex", flexDirection: "column", marginTop: "160px", marginLeft: "3%"}}>
                      <subtext style={{fontSize: "12px", fontWeight: "600", color: "grey"}}>Did you find this awnser helpful?</subtext>
                      <Rating name="half-rating" defaultValue={0} precision={0.5} />
                    </div>
             </Grid>
          </Grid>
          
      </Box>
    )}

    return (
        <Box style={{margin: "auto", height: "80vh", padding: "18px"}} >
          <Grid container xs={12} style={{margin: "auto", height: "100%"}}>
            <Grid item xs={12} sm={2} style={{
                    background: '#EDEDED',
                    padding: "0px",
                    overflow: 'auto',
                    borderRadius: "5px"
                    }}>
              <FAQlist></FAQlist>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Showcase props={faqData[1].items[0]} />
            </Grid>
          </Grid>
        </Box>
    )
}
