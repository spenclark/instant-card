// FAQ PAGE with content taken from 
import { Typography, Box, Grid, Paper, List, ListSubheader, ListItem, ListItemText } from "@material-ui/core"
import React from "react"

const showcase = (props) => {(
    <Box>
        <Grid>
            <Grid>
                <Typography>
                    {props.title}
                </Typography>
                <Typography>
                    {props.body}
                </Typography>
            </Grid>
            <Grid>
                <Paper variant="outlined">
                    <img src={props.media}></img>
                    if type image  
                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                    />
                </Paper>
            </Grid>
        </Grid>
    </Box>
)}

const FAQlist = (props) => (
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
      position: 'relative',
      overflow: 'auto',
      maxHeight: "20vh",
      '& ul': { padding: 0 },
    }}
    subheader={<li />}
  >
    {.map((e) => (
      <li key={}>
        <ul>
          <ListSubheader>{`${sectionId}`}</ListSubheader>
          {.map((item) => (
            <ListItem key={}>
              <ListItemText primary={`Item ${item}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    ))}
  </List>
)

export default function FAQ() {

    return (
        <Box>
            <FAQlist></FAQlist>
        </Box>
    )
}
