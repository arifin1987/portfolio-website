import { Flip } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <div>
      <Flip>
        <h1 className="text-4xl text-center m-6">About Me</h1>
      </Flip>

      <p className="text-center border-2 border-purple-300 p-4 rounded-md">
        I am Shohidul Arifin. I am a MERN Stack Developer. I am skilled in
        JavaScript, TypeScript, Mongoose, React.js, Next.js, Redux Tool Kit,
        Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, Ant design, Framer
        Motion, Shadcn, Bootstrap etc. I did BSC. In Electrical and Electronic
        Engineering from American International University-Bangladesh(AIUB). I
        have completed "Complete Web Development Course With Jhankar Mahbub"
        from Programming Hero.
      </p>
    </div>
  );
};

export default AboutMe;
