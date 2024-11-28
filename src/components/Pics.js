import React from "react";
import {ReactPictureGrid} from "react-picture-grid";
import {Fragment} from "react";

// import Back from "../assets_/back.jpg";
import SubHeader from "./SubHeader";

let data = [];
for (let i = 1; i < 12; i++) {
    data.push({
        image: `images/img${i}.jpeg`,
        title: `img${i}`,
        description: `img${i}`,
    });
}

// console.log(data);
const Pics = () => {
    return (
        <Fragment>
            <SubHeader>My Life in Pictures</SubHeader>

            <ReactPictureGrid
                showPreview
                closeOnClick
                data={data}
                gap={20}
                backDropColor={"rgba(54, 86, 138, 0.5)"}
                // showTitle
                pattern={[
                    "small",
                    "big",
                    "tall",
                    "big",
                    "small",

                    "tall",
                    "tall",
                    "big",
                    "wide",
                    "small",

                    "small",
                    "tall",
                    "big",
                    "wide",
                    "big",

                    "big",
                    "big",
                    "big",
                    "big",

                ]}
            />
        </Fragment>
    );
};

export default Pics;
