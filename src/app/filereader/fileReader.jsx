import { useEffect } from "react";
import FadeInComponent from '../../components/fadeInComponent';
import { div } from "motion/react-client";

//# User upload-block
function Upload() {
    const handleUpload = () => {
        console.log("submit!");
    };
    return (
        <div className="upload-block">
            <input type="file" onSubmit={handleUpload} />
        </div>
    );
}

//#預覽區塊
export default function Reader() {
    return (
        <FadeInComponent>
            <Upload />
        </FadeInComponent>
    );
}