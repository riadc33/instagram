import React from "react";

export const History = () => {
    const data = {
        "message": "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1108.jpg",
        "status": "success"
    }


    return (
        <>
            <div className="bg-black  h-28 w-28 overflow-x-scroll flex" >
                <div className="w-20 h-20">
                    <img className="w-20 h-20" src={data.message} style={{ filter: "blur(3px)" }} />
                </div>

                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className=" w-20 h-20">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className=" w-20 h-20">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className=" w-20 h-20">
                    <img className=" 	" src={data.message} />
                </div>
                <div className=" w-20 h-20">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className="w-20 h-20 ">
                    <img className=" 	" src={data.message} />
                </div>
                <div className=" w-20 h-20">
                    <img className=" 	" src={data.message} />
                </div>

            </div>

        </>
    );
};
