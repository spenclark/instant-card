import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "220px",
    height: "345px",
    borderRadius: "5px",
    background: "#EDEDED",
    boxShadow: "2px 1px 7px #c9c9c9",
  },
  child: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "80px",
  },
}));

export default function DisplayCard(data) {
  // this is the Hero Element on the landing page
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.child}>
        <div style={{ fontWeight: "600", fontSize: "12px", color: "#565656" }}>
          DEMO CARD
        </div>
      </div>
    </div>
  );
}
