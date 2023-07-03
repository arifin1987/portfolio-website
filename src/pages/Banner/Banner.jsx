import { Bounce, Rotate, Slide } from 'react-awesome-reveal';
import { FaDownload,FaGithub,FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="../../../image/SA CV PIC.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <Slide>
                    <h1 className="text-5xl font-bold">Hi, I am Shohidul Arifin</h1>

                    </Slide>
                    <Rotate>
                    <h2 className="text-3xl ">MERN Stack Developer</h2>
                    </Rotate>
                    
                    <div className='flex gap-4 my-2 text-xl'>
                        <div>
                            <a target='_blank' href="https://github.com/arifin1987" >Github<FaGithub></FaGithub></a>
                        </div>
                        <div className='text-sky-500'>
                            <a target='_blank' href="https://www.linkedin.com/in/shohidul-arifin-257527237" >LinkedIn<FaLinkedinIn></FaLinkedinIn></a>
                        </div>
                    </div>
                    <h3 className="py-6">I have vast experience in NodeJS, ExpressJS, ReactJS,MongoDB, Firebase, Bootstrap, Tailwind css etc.</h3>
                    <button className="btn btn-primary"> <a href="Shohidul Arifin resume.pdf" download>Download Resume  < FaDownload></FaDownload></a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;