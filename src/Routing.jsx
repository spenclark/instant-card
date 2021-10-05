import React from "react"
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom"
import Landing from "./Components/Landing/Landing"
import Designer from "./Components/CardDesigner/Designer"
import ContactView from "./Components/ContactView/Contact";
import ContactForm from "./Components/ContactView/ContactForm";
import FAQ from "./Components/ContactView/FAQ"
import Blog from "./Components/ContactView/Blog";

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
        {
            usage: ContactForm,
            exact: false,
            to: "/contact-us"
        },
        {
            usage: FAQ,
            exact: false,
            to: "/faq"
        },
        {
            usage: Blog,
            exact: false,
            to: "/blog"
        }
    ]

    return(
        <Router>
            <div>
                    {routes.map((route) => {
                        return <Route 
                            key={route.to}
                            path={route.to}
                            exact={route.exact}
                            render={() => <route.usage />}
                            // ADD SUBROUTES TO OBJECT (NOT NEEDED but would be as simple as adding an object to the route and then mapping it)
                            />
                    })}
            </div> 
        </Router>
    )
}

export default Routing