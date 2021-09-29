// FAQ PAGE with content taken from 
import React from "react"
import {faqData} from "../../utils/faqData"

import { Typography, Box, Grid, Paper, Rating, List, ListSubheader, ListItem, ListItemText } from "@material-ui/core"

function renderMedia(mediaType, media) {
  if(mediaType === "image"){
   return  <img src={media} width="560px" height="auto"></img>
  } else if(mediaType === "video") {
    return (
    <iframe width="560px" height="360px" src={`https://www.youtube.com/embed/${media}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    )
  } else {
      <p>
        
      </p>
  }
}

const FAQlist = (props) => (
    <List> 
    <Typography style={{textAlign: "center", fontWeight: "600"}}>
      Find Awnsers
    </Typography>
    {faqData.map((e) => (
      <li key={e.category}>
        <ul>
          <ListSubheader style={{fontSize: "12px", fontWeight: "600", padding: "0"}}>{`${e.category}`}</ListSubheader>
          {e.items.map((item) => (
            <ListItem key={item.title} style={{fontSize: "12px", padding: "0"}}>
              <ListItemText primary={`${item.title}`} style={{fontSize: "12px"}}/>
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
          <Grid container xs={12} sm={12}>
              <Grid item xs={6}>
                  <Typography>
                      {props.props.title}
                  </Typography>
                  <Typography>
                     {props.props.body}
                  </Typography>
              </Grid>
              <Grid item xs={12} sm={6} >
                    {renderMedia(props.props.mediaType, props.props.media)}
              </Grid>
          </Grid>
          {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
      </Box>
    )}

    return (
        <Box style={{margin: "auto", height: "80vh"}} >
          <Grid container xs={12} style={{margin: "auto", height: "100%"}}>
            <Grid item xs={12} sm={2} style={{
                    background: '#EDEDED',
                    // padding: "12px",
                    overflow: 'auto',
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
