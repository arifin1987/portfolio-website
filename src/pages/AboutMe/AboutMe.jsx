import { Flip } from "react-awesome-reveal";

const AboutMe = () => {
    return (
        <div >
            <Flip>
            <h1 className="text-4xl text-center m-6">About Me</h1>
            </Flip>

            
            <p className="text-center border-2 border-purple-300 p-4">I am Shohidul Arifin. I am a MERN Stack Developer. I am skilled in React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, Bootstrap etc. I have completed BSC. In Electrical and Electronic Engineering from American International University-Bangladesh(AIUB) and Master of Business Administration in Management from University of Dhaka. I have completed "Complete Web Development Course With Jhankar Mahbub" from Programming Hero.</p>

        </div>
    );
};

export default AboutMe;