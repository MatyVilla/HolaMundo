import React, { Component, Fragment } from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Blog extends Component {
    render() {
        return (
            <div id="blog">
                <Slider
                    title="Blog"
                    className="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* listado de articulos de la api */}
                    </div>
                <Sidebar 
                blog="true"/>
                </div>
            </div>
        );
    }
}

export default Blog;