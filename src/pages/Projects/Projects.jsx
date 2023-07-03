import { Flip } from "react-awesome-reveal";



const Projects = () => {
    return (
        <div>
            <Flip>
            <h1 className="text-center text-4xl m-6">Projects</h1>
            </Flip>
            
            <div className="md:flex justify-between mx-2 gap-4">
                <div >
                    <img src="../../../project img/Screenshot3.png" alt="" />
                    <h2 className="text-2xl my-4">Sports Camp (Summer School Camp)</h2>
                    <h4 >This is a summer camp school related website where various sports related classes can be seen here.</h4>
                    <h3><span className="text-2xl bold">Technologies:</span> Tailwind CSS, Daisy UI, React.js, Node.js, MongoDB, Firebase, JWT, REST API, Stripe Payment etc.</h3>
                    
                    <div className="flex gap-4">
                        <div className="bg-purple-300 p-2 rounded">
                            <a target="_blank" href="https://sports-camp-47e08.web.app">Live Site</a>
                        </div>
                        <div className="bg-purple-300 p-2 rounded">
                            <a  target="_blank" href="https://github.com/arifin1987/sports-camp-client">Github-Client </a>
                        </div>
                        <div className="bg-purple-300 p-2 rounded">
                            
                            <a  target="_blank" href="https://github.com/arifin1987/sports-camp-server">Github-Server </a>
                        </div>
                    </div>
                </div>
                <div >
                    <img src="../../../project img/Screenshot2.png" alt="" />
                    <h2 className="text-2xl my-4">Toy Market (Online Toy Marketplace)</h2>
                    <h4 >This is a website where people can buy toys for their child. Sliding images added in the banner section.  </h4>
                    <h3><span className="text-2xl bold">Technologies:</span> React.js, Tailwind CSS, Daisy UI, Node.js, MongoDB, Firebase, JWT, REST API, React Router etc.</h3>

                    
                    <div className="flex gap-4">
                        <div className="bg-purple-300 p-2 rounded">
                            <a target="_blank" href="https://toy-marketplace-f571f.web.app/">Live Site</a>
                        </div>
                        <div className="bg-purple-300 p-2 rounded">
                            <a  target="_blank" href="https://github.com/arifin1987/toy-marketplace-clientt">Github-Client </a>
                        </div>
                        <div className="bg-purple-300 p-2 rounded">
                            
                            <a  target="_blank" href="https://github.com/arifin1987/toy-marketplace-server">Github-Server </a>
                        </div>
                    </div>
                
                </div>
                <div >
                    <img src="../../../project img/Screenshot1.png" alt="" />
                    <h2 className="text-2xl my-4">Chef Recipe (Restaurant Website)</h2>
                    <h4 >Various types of recipe can be seen here. People can buy these foods from this website.</h4>
                    <h3> <span className="text-2xl bold">Technologies:</span> React Router Dom, Tailwind CSS, Daisy UI, React.js, Node.js, MongoDB, Firebase, REST API,Vercel etc.</h3>
                    
                    <div className="flex gap-4">
                        <div className="bg-purple-300 p-2 rounded">
                            <a target="_blank" href=" https://tasty-recipe-client.web.app/">Live Site</a>
                        </div>
                        <div className="bg-purple-300 p-2 rounded">
                            <a  target="_blank" href="https://github.com/arifin1987/chef-recipe-client">Github-Client </a>
                        </div>
                        <div className="bg-purple-300 p-2 rounded">
                            
                            <a  target="_blank" href="https://github.com/arifin1987/chef-recipe-server">Github-Server </a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;