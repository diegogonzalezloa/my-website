import { Component } from "react";
import Cover from "./Cover";
import Body from "./Body";

class App extends Component {
    render() {
        return (
            <div className="lg:h-dvh lg:p-4 bg-black text-myGray fill-myGray stroke-myGray">
                <div className="lg:grid lg:grid-cols-[30%_1fr] max-w-[1440px] lg:h-full mx-auto lg:gap-x-6 lg:overflow-hidden lg:[&>*]:h-full [&>*]:bg-secondBlack lg:[&>*]:overflow-auto lg:[&>*]:rounded-3xl">
                    <Cover className="grid lg:flex grid-cols-[max-content_1fr] lg:flex-col  p-7 items-center sm:items-start gap-[min(32px,9.41vw)]" />
                    <Body className="lg:cols-[2/3] flex px-10 py-13 flex-col gap-y-20" />
                </div>
            </div>
        );
    }
}

export default App;
