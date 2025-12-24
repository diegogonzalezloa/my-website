import { Component } from "react";
import ExternalLink from "../assets/icons/ExternalLink";

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    title: "React and Tailwind Project",
                    text: "Explored the React library by creating modules (such as a dynamic text, a responsive input, and a stylized button), and the webpage was styled with the utility framework Tailwind.",
                    link: "https://github.com/diegogonzalezloa/React-and-Tailwind-Project",
                },
                {
                    title: "The Lionel Messi's Life and Career",
                    text: "Created an article as a tribute to Lionel Messi. This project was primarily designed using Tailwind CSS, and the data is contained in objects to display it using array methods.",
                    link: "https://codepen.io/diegogonzalezloa/full/XJdXRQe",
                },
                {
                    title: "Roman Numeral Convert",
                    text: 'Designed a web application to convert integer number into Roman numeral by using JavaScript. This project also has some animations by using the transition property and the "keyframes" rule in CSS.',
                    link: "https://codepen.io/diegogonzalezloa/full/gbaGPNq",
                },
                {
                    title: "Palindrome Checker",
                    text: "Built a web application to check whether a word or phrase is a palindrome or not by using JavaScript for real-time validation. This project demonstrates knowledge of the DOM, arrow function, regular expression, event listener, template literals, and the ternary operator.",
                    link: "https://codepen.io/diegogonzalezloa/full/VYLgpmG",
                },
            ],
        };
    }

    render() {
        return (
            <div className="max-w-180 mx-auto">
                <h2>Projects</h2>
                <ul className="flex flex-col gap-y-6">
                    {this.state.items.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                title={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-x-2 underline hover:text-white [&>svg]:w-3 hover:stroke-white"
                            >
                                <span>{item.title}</span>
                                <ExternalLink />
                            </a>
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Projects;
