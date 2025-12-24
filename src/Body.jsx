import { Component } from "react";

import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certification from "./components/Certification";

class Body extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Stack />
                <p className="max-w-150 p-5 mx-auto border-y border-thirdBlack [&>span]:block [&>span]:h-5">
                    As a sound engineer, I am currently pursuing a professional
                    certificate as a full-stack developer. My enthusiasm for
                    programming has been a driving force in my professional
                    journey since I began coding during my university years.
                    <span></span>I am currently seeking employment as an
                    entry-level full-stack developer. I have experience with
                    personal projects, and I am eager to apply these skills to a
                    professional setting.
                    <span></span>
                    If you find my curriculum to be satisfactory and would like
                    more information, please do not hesitate to contact me via
                    email or phone.
                </p>
                <Projects />
                <Education />
                <Certification />
            </div>
        );
    }
}

export default Body;
