import React from "react"
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom"
import Landing from "./Components/Landing/Landing"
import Designer from "./Components/CardDesigner/Designer"
import ContactView from "./Components/ContactView/Contact";

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
            <div>
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