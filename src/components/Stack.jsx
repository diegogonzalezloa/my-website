import React, { Component } from "react";

import ReactIcon from "../assets/icons/React";
import TailwindCSS from "../assets/icons/TailwindCSS";
import Git from "../assets/icons/Git";
import HTML from "../assets/icons/HTML";
import CSS from "../assets/icons/CSS";
import JS from "../assets/icons/JS";
import MATLAB from "../assets/icons/MATLAB";
import LaTeX from "../assets/icons/LaTeX";
import Inkscape from "../assets/icons/Inkscape";

class Stack extends Component {
    constructor(props) {
        super(props);

        // State
        this.state = {
            items: [
                {
                    title: "React",
                    icon: <ReactIcon />,
                },
                {
                    title: "TailwindCSS",
                    icon: <TailwindCSS />,
                },
                {
                    title: "Git",
                    icon: <Git />,
                },
                {
                    title: "HTML",
                    icon: <HTML />,
                },
                {
                    title: "CSS",
                    icon: <CSS />,
                },
                {
                    title: "JavaScript",
                    icon: <JS />,
                },
                {
                    title: "MATLAB",
                    icon: <MATLAB />,
                },
                {
                    title: "LaTeX",
                    icon: <LaTeX />,
                },
                {
                    title: "Inkscape",
                    icon: <Inkscape />,
                },
            ],
            width: { maxWidth: 0 },
            isHovered: false,
        };

        // Ref
        this.ulRef = React.createRef();
    }

    componentDidMount() {
        this.updateWidth();
    }

    updateWidth = () => {
        if (this.ulRef.current) {
            // Get the width from the DOM node
            const ulWidth = this.ulRef.current.getBoundingClientRect().width;
            this.setState({ width: { maxWidth: ulWidth } });
        }
    };

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const h2Style = {
            marginBottom: "0",
        };

        const ulStyle = {
            animationPlayState: this.state.isHovered ? "paused" : "running",
        };

        const itemsClass =
            "p-3 bg-gradient-to-br from-thirdBlack via-secondBlack to-secondBlack rounded-lg [&>svg]:w-9";

        return (
            <div className="self-center grid grid-cols-[max-content_1fr] items-center">
                <h2 style={h2Style} className="col-[1/2] pr-5">
                    Stack
                </h2>
                <div
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    style={this.state.width}
                    className="col-[2/3] flex overflow-hidden [&>ul]:flex [&>ul]:gap-x-5 [&>ul]:pr-5 [&>ul]:animate-[scrolling_20s_linear_infinite]"
                >
                    <ul style={ulStyle} ref={this.ulRef}>
                        {this.state.items.map((item, index) => (
                            <li
                                key={index}
                                title={item.title}
                                className={itemsClass}
                            >
                                {item.icon}
                            </li>
                        ))}
                    </ul>
                    <ul style={ulStyle} aria-hidden>
                        {this.state.items.map((item, index) => (
                            <li
                                key={index}
                                title={item.title}
                                className={itemsClass}
                            >
                                {item.icon}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Stack;
