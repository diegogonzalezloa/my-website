import { Component } from "react";

import CoverImg from "./assets/images/drawing-photo.png";
import icon from "/icon.svg";
import Company from "./assets/icons/Company";
import MapMarker from "./assets/icons/MapMarker";
import Time from "./assets/icons/Time";
import Email from "./assets/icons/Email";
import LinkedIn from "./assets/icons/LinkedIn";
import GitHub from "./assets/icons/GitHub";
import Codepen from "./assets/icons/Codepen";
import DownloadPDF from "./components/DownloadPDF";

class Cover extends Component {
    constructor(props) {
        super(props);

        // Formatting the date for the specific timezone
        const options = {
            timeZone: "America/Bogota",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        };

        const formatter = new Intl.DateTimeFormat("en-US", options);

        this.state = {
            items: [
                {
                    icon: <Company />,
                    text: "Open to work",
                },
                {
                    icon: <MapMarker />,
                    text: "Medellín, CO",
                },
                {
                    icon: <Time />,
                    // Set the initial state using the formatter immediately
                    text: `${formatter.format(new Date())} (Bogota)`,
                },
                {
                    icon: <Email />,
                    text: "diego.gonzalezloa@gmail.com",
                },
            ],
            items2: [
                {
                    title: "LinkedIn",
                    icon: <LinkedIn />,
                    link: "http://www.linkedin.com/in/diegogonzalezloa",
                },
                {
                    title: "GitHub",
                    icon: <GitHub />,
                    link: "https://github.com/diegogonzalezloa",
                },
                {
                    title: "Codepen",
                    icon: <Codepen />,
                    link: "https://codepen.io/diegogonzalezloa/",
                },
            ],
        };

        // Save the formatter to 'this' so we can reuse it in tick()
        this.formatter = formatter;
    }

    componentDidMount() {
        // Update time every second
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        // Clear interval to prevent memory leaks
        clearInterval(this.timerID);
    }

    tick() {
        const newItems = [...this.state.items];
        // Update current time
        newItems[2].text = `${this.formatter.format(new Date())} (Bogota)`;
        this.setState({ items: newItems });
    }

    render() {
        return (
            <div id="cover-container" className={this.props.className}>
                <img
                    src={CoverImg}
                    alt="Cover Image"
                    className="col-[1/2] sm:row-[1/3] w-[min(96px,25.26vw)] sm:w-45 lg:w-full lg:h-[47%] max-h-90 lg:object-cover lg:object-[25%_25%] rounded-lg lg:rounded-3xl"
                />
                <div className="col-[2/3]">
                    <div className="flex items-end mb-1">
                        <img
                            src={icon}
                            alt="D"
                            className="w-[min(32px,8.42vw)]"
                        />
                        <h1 className="text-[min(1.25rem,5.26vw)] text-white">
                            iego Gonzalez
                        </h1>
                    </div>
                    <p className="text-[0.875rem] opacity-80">
                        Full Stack Software Developer in Training | React.js ·
                        Tailwind CSS · English
                    </p>
                </div>
                <div className="col-span-full sm:col-[2/3] sm:-mt-3 lg:mt-0">
                    <ul className="mb-6">
                        {this.state.items.map((item, index) => (
                            <li
                                key={index}
                                className="flex mb-1 gap-x-3 [&>svg]:w-5"
                            >
                                {item.icon}
                                {item.text.includes("@") ? (
                                    <a
                                        href={`mailto:${item.text}`}
                                        className="hover:text-white hover:underline"
                                    >
                                        {item.text}
                                    </a>
                                ) : (
                                    <span>{item.text}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <ul className="flex gap-x-4">
                        {this.state.items2.map((item, index) => (
                            <li
                                key={index}
                                className="w-7 hover:scale-115 hover:fill-white transition-all duration-50"
                            >
                                <a
                                    title={item.title}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <DownloadPDF />
            </div>
        );
    }
}

export default Cover;
