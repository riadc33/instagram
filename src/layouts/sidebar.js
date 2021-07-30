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

export const SideBar = () => {
    return (
        <>
            <div className=" col-span-2 bg-black justify-center flex items-center">
                <div className="bg-white sidebar rounded-full flex justify-center flex-col	items-center justify-evenly">

                    <div>
                        <Link className="" to="/home">

                            <img className="" src={HomeSolid} />

                        </Link>
                    </div>


                    <div>
                        <Link className="" to="/search">
                            <img className="" src={search} />
                        </Link>
                    </div>
                    <div>
                        <Link className="" to="/reels">
                            <img className="" src={reels} />
                        </Link>
                    </div>
                    <div>
                        <Link className="" to="/heart">
                            <Heart size="37px" />
                        </Link>
                    </div>
                    <div>
                        <Link className="" to="/profile">
                            <img className="" src={profile} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
