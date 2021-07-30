import React from 'react'
import { SideBar } from "../layouts/sidebar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import { Home } from "../pages/Home"
import { Instagram } from "../layouts/instagram"

export const Routers = () => {
    return (
        <div className="grid grid-cols-12 w-full h-screen bg-red-300 " >
            <SideBar />

            <div className="w-full col-span-6 bg-blue-300  " >
                <Instagram />
                <Route exact path="/" component={() => <Redirect to="/Home" />} />
                <Route path="/home" component={() => <Home />} />
                <Route path="/search" component={() => <Routers />} />
                <Route path="/reels" component={() => <Routers />} />
                <Route path="/heart" component={() => <Routers />} />
                <Route path="/profile" component={() => <Routers />} />


            </div>
            <div className="w-full col-span-4	bg-green-300">

            </div >


        </div>
    )
}
