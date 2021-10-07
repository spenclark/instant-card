// FAQ PAGE with content taken from 
import React, {useState} from "react"
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
  }
}

export default function FAQ() {
    const [selected, useSelected] = useState()
    const [focused, setFocused] = useState()

    const HandleSelect = (parentId, itemId) => {
      // parent id = category and item id is the nav item id
      // Could also pass in style change here for selected
      
      return useSelected(faqData[parentId].items[itemId])

    }

    const FAQlist = () => (
      <List> 
        <Typography style={{textAlign: "center", fontWeight: "600"}}>
          Find Awnsers
        </Typography>
        {faqData.map((e, pi) => (
          <li key={e.category}>
            <ul>
              <ListSubheader style={{fontSize: "12px", fontWeight: "600", margin: "auto",  borderBottom: "1px solid grey"}}>{`${e.category}`}</ListSubheader>
              {e.items.map((item, i) => (
                <ListItem key={item.title} style={{fontSize: "12px", borderBottom: "1px solid grey", display: "outline"}} onClick={() => HandleSelect(pi, i)}>
                  <ListItemText secondary={`${item.title}`} disableTypography={true} style={{fontSize: "12px"}} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
        
    </List>
  )

    const Showcase = ({data}) => {
      return (
      <Box>
          <Grid container xs={12} sm={12} style={{marginTop: "" }}>
              <Grid item xs={12} sm={6} style={{marginTop: "20px", padding: "2%", display: "flex", flexDirection: "column"}}>
                  <Typography style={{fontWeight: "600", fontSize: "14px"}}>
                      {data.title}
                  </Typography>
                  <Typography style={{fontWeight: "500", fontSize: "14px"}}>
                      {data.body}  
                  </Typography>
              </Grid>
              <Grid item xs={12} sm={6} style={{display: "flex", justifyContent: "center", paddingTop: "3%"}}>
                    {renderMedia(data.mediaType, data.media)}
              </Grid>
             <Grid item xs={12}>
                    <div style={{display: "flex", flexDirection: "column", marginLeft: "2%"}}>
                      <subtext style={{fontSize: "12px", fontWeight: "600", color: "grey"}}>Did you find this awnser helpful?</subtext>
                      <Rating name="half-rating" defaultValue={0} precision={0.5} />
                    </div>
             </Grid>
          </Grid>
          
      </Box>
    )}

    return (
        <Box style={{margin: "auto", height: "80vh", padding: "4% 18px"}} >
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
              {selected ? (
                  <Showcase data={selected} />
                ) : (
                  <>
                  <Typography style={{textAlign: "center", fontWeight: "600"}}>Frequently Asked Questions</Typography>
                  <Typography style={{textAlign: "center", margin: "auto",}}>Using the panel on the left-hand side you can see some of our most commonly asked questions. <br /> Can't find what you are looking for? <a href="/contact" style={{fontWeight: "600"}}>Get in touch.</a></Typography>
                  </>
                )}

              
              
            </Grid>
          </Grid>
        </Box>
    )
}
