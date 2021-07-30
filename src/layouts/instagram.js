import React from "react";
import {

    Link
} from "react-router-dom";
import HomeSolid from "../assets/icons/HomeSolid.svg"
import profile from "../assets/icons/profile.svg"
import reels from "../assets/icons/reels.svg"
import search from "../assets/icons/search.svg"
import searchSolid from "../assets/icons/searchSolid.svg"
import reelsSolid from "../assets/icons/reelsSolid.svg"
import profileSolid from "../assets/icons/profileSolid.svg"
import { Heart } from "@styled-icons/bootstrap/Heart"
import { HeartFill } from "@styled-icons/bootstrap/HeartFill"
import logo from "../assets/img/logoinst.png"
export const Instagram = () => {
    return (
        <>
            <div className="bg-red-200  h-20  py-4 justify-end	 flex items-left ">
                <img className="absolute" src={logo} />
            </div>
        </>
    );
};
