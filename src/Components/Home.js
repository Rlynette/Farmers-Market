import React from "react";
import img1 from "./images1/img1.jpg";
import img2 from "./images1/img2.jpg";
import img3 from "./images1/img3.jpg";


function Home() {

    return (
        <div className="images">
            <h2> Home Page </h2>
            <p>We go beyond borders to ensure you get fresh produce from the farm. Our customers satisfaction is our mission.</p>
            <div className="image">
                <div className="image1">
                    <img src={img1} alt="" /></div>
                <div className="image2">
                    <img src={img2} alt="" /></div>
                <div className="image3">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>

    )
}
export default Home;