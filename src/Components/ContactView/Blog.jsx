import React, {useState, useEffect} from "react"
import { Grid} from "@material-ui/core"
import {featuredPost, posts} from "../../utils/blogData"
import { makeStyles } from "@material-ui/styles"
import BlogCard from "./BlogCard"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const buttons = ["All", "Corporate", "Product", "Support", "Security"]
const useStyles = makeStyles({
    featuredClass: {

    },
    filterButton: {
        padding: "8px 15px",
        borderRadius: "25px",
        margin: "8px",
        fontWeight: "600",
        fontSize: "14px",
        color: "#343434"
    },
    selected: {
        background: "grey",
        padding: "8px 15px",
        borderRadius: "25px",
        margin: "8px",
        color: "Black",
        fontSize: "14px",
        fontWeight: "600",
    },
})


function Blog() {

    // Shuffled so we dont see the same posts

    const [data, setData] = useState([...posts])
    const [isActive, setActive] = useState("All");

    const classes = useStyles()
    function filter(value) {
        if(value === "All") {
            setData([...posts])
        } else if (value === "Corporate") {
            setData([...posts].filter((e) => (
                e.tag == "Corporate"
            )))
        } else if (value === "Product") {
            setData([...posts].filter((e) => (
                e.tag == "Product"
            )))
        } else if (value === "Support") {
            setData([...posts].filter((e) => (
                e.tag == "Support"
            )))
        } else if (value === "Security") {
            setData([...posts].filter((e) => (
                e.tag == "Security"
            )))
        }
    }
    
    const handleFilter = (value) => {
        filter(value)
        toggleClass(value)
    }
    const toggleClass = (value) => {
        setActive(value);
      };

    useEffect(() => {
    
    })

    return (
        <Grid container xs={12} style={{maxWidth: "1000px", margin: "auto", padding: "25px 20px"}}>
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
            <Grid item xs={12} style={{background: "#EDEDED", margin: "7% 0", padding: "30px",  boxShadow: "5px 2px 14px #CFCFCF",}}>
                <BlogCard props={featuredPost}/>
            </Grid>
            <Grid container style={{width: "100%", display: "flex", }}>
                {/* Fitlers */}
                {buttons.map((e) => (
                    <button className={isActive === e ? classes.selected : classes.filterButton} onClick={() => handleFilter(e)}>
                        {e}
                    </button>
                ))

                }
            </Grid>
                {/* Blog List */}
            <Grid container xs={12}> 
                {data.map((e) => (
                      <Grid item xs={12} style={{margin: "30px 0", height: "300px"}}>
                            <BlogCard props={e}/>
                        </Grid>
                    ))}
            </Grid>

        </Grid>
    )
}
export default Blog