import { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    school: "Coursera - IBM",
                    degree: "Full Stack Software Developer",
                    "end date": "In progress",
                    description: "Approximately 64 hours out of 208",
                    skills: "React · Git · Cloud Computing · Software Development Life Cycle (SDLC) ",
                },
                {
                    school: "Smart Language Academy",
                    degree: "Diploma: Pre-advanced English C1",
                    "end date": "Oct 2025",
                    description: "",
                    skills: "English",
                },
                {
                    school: "San Buenaventura University",
                    degree: "Bachelor of Science: Sound Engineering",
                    "end date": "Sep 2024",
                    description:
                        "Grade: 3.56 \n Thesis: Proposal to modify the ITU-RBS.1770-4 algorithm by analyzing and adapting the properties of audio signals to measure the loudness of music material",
                    skills: "Sound · Audio · MATLAB",
                },
            ],
        };
    }

    render() {
        return (
            <div className="w-full max-w-180 mx-auto">
                <h2>Education</h2>
                <ul className="flex flex-col gap-y-6">
                    {this.state.items.map((item, index) => (
                        <li
                            key={index}
                            className="p-4 bg-thirdBlack/50 rounded-xl"
                        >
                            <h3 className="font-author-bold">{item.school}</h3>
                            <p className="text-white">{item.degree}</p>
                            <p className="opacity-70">{item["end date"]}</p>
                            {item.description && (
                                <p className="mt-5 whitespace-pre-line">
                                    {item.description}
                                </p>
                            )}
                            {item.skills && (
                                <p className="mt-5">
                                    <span className="mr-1 font-author-semibold">
                                        Skills:
                                    </span>
                                    <span>{item.skills}</span>
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Education;
