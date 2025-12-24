import { Component } from "react";

import FileDownload from "../assets/icons/FileDownload";
import DiegoResume from "../assets/pdfs/DiegoGonzalez_Resume.pdf";

class DownloadPDF extends Component {
    constructor(props) {
        super(props);
    }

    handlePrompt = () => {
        const password = window.prompt("Enter password to download:");
        if (password === "dg_resume") {
            // Programmatically trigger download
            this.handleDownload();
        } else if (
            password !== "dg_resume" &&
            password !== null &&
            password !== ""
        ) {
            alert("Wrong password!");
        }
    };

    handleDownload = () => {
        // Function to download PDF
        const link = document.createElement("a");
        link.href = DiegoResume;
        link.download = "DiegoGonzalez_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    render() {
        return (
            <button
                onClick={this.handlePrompt}
                className="col-span-full flex w-full p-[6px] justify-center gap-x-2 cursor-pointer bg-black border border-mygray hover:bg-white hover:border-white hover:text-black hover:stroke-black transition-all duration-50 easy-in-out"
            >
                <span>Download Resume</span>
                <FileDownload className="w-5" />
            </button>
        );
    }
}

export default DownloadPDF;
