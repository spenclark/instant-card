import React from "react"
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom"
import {makeStyles} from "@material-ui/styles"

import Landing from "./Components/Landing"
import Designer from "./Components/Designer/Designer"
import ContactView from "./Components/Contact/ContactView";

const useStyles = makeStyles( {
    App: {
        // margin: "0 15%"
    }
})

const Routing = () => {

    const routes = [
        {
            usage: Landing,
            exact: true,
            to: "/"
        },
        {
            usage: Designer,
            exact: false,
            to: "/design"

        },
        {
            usage: ContactView,
            exact: false,
            to: "/contact"

        }, 
    ]

    const classes = useStyles()

    return(
        <Router>
            <div className={classes.App}>
                    {routes.map((route) => {
                        return <Route 
                            key={route.to}
                            path={route.to}
                            exact={route.exact}
                            render={() => <route.usage />}
                            />
                    })}
                    </div> 
        </Router>
    )
}

export default Routing