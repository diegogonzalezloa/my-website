import { Component } from "react";

class Certification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    school: "Getting Started with Git and GitHub",
                    name: "IBM",
                    issued: "Nov 2025",
                    id: "P7HM29ZZ4QBX",
                    link: "https://www.coursera.org/account/accomplishments/records/P7HM29ZZ4QBX",
                    skills: "Git · GitHub",
                },
                {
                    school: "IBM",
                    name: "Introduction to HTML, CSS, & JavaScript",
                    issued: "Nov 2025",
                    id: "2OW5D5LIJHB4",
                    link: "https://www.coursera.org/account/accomplishments/records/2OW5D5LIJHB4",
                    skills: "HTML · CSS · JavaScript",
                },
                {
                    school: "IBM",
                    name: "Introduction to Cloud Computing",
                    issued: "Nov 2025",
                    id: "SGPL12W0GEHI",
                    link: "https://www.coursera.org/account/accomplishments/records/SGPL12W0GEHI",
                    skills: "Cloud Computing",
                },
                {
                    school: "IBM",
                    name: "Introduction to Software Engineering",
                    issued: "Oct 2025",
                    id: "MN24TIW8B6QS",
                    link: "https://www.coursera.org/account/accomplishments/records/MN24TIW8B6QS",
                    skills: "Software Development Life Cycle (SDLC)",
                },
                {
                    school: "freeCodeCamp",
                    name: "Legacy Responsive Web Design",
                    issued: "Feb 2025",
                    id: "diegogonzalezloa-rwd",
                    link: "https://freecodecamp.org/certification/diegogonzalezloa/responsive-web-design",
                    skills: "HTML · CSS",
                },
                {
                    school: "British Council",
                    name: "Aptis ESOL General Test",
                    issued: "Apr 2024",
                    id: "0x4ed4e0ffa915a1365313ff219e9da16269ed3611e6eb5778c0fdf35700dd5430",
                    link: "https://credentials.britishcouncil.org/7563ae81-dc34-4e5c-9462-ee38c3743155?key=f3332dc893a0016a89fb466c499a3a82ebc2ff33c03ff0e40b394cba8258e6a2#acc.3ZQNXnKt",
                    skills: "English",
                },
            ],
        };
    }

    render() {
        return (
            <div className="w-full max-w-180 mx-auto">
                <h2>Certifications</h2>
                <ul className="flex flex-col gap-y-6">
                    {this.state.items.map((item, index) => (
                        <li
                            key={index}
                            className="p-4 bg-thirdBlack/50 rounded-xl [&>*]:wrap-break-word"
                        >
                            <h3 className="font-author-bold">{item.name}</h3>
                            <p>{item.school}</p>
                            <p className="opacity-70">Issued {item.issued}</p>
                            <p className="opacity-70">
                                Credential ID {item.id}
                            </p>
                            <a
                                href={item.link}
                                title={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full p-1 mt-5 text-center border border-myGray rounded-md hover:border-white hover:bg-white hover:text-secondBlack"
                            >
                                Show credential
                            </a>
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

export default Certification;
