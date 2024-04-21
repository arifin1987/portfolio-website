import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Flip } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfnot5c",
        "template_24t6rnk",
        form.current,
        "v6EnupIPtkuSagx0l"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Flip>
        <h1 className="text-4xl my-6">Contact Me</h1>
      </Flip>

      <h3 className="text-xl">
        <div className="flex gap-2 items-center ">
          <FaPhoneAlt className="text-red-500"></FaPhoneAlt> Phone:
          +8801911415195
        </div>
      </h3>
      <h3 className="text-xl">
        <div className="flex gap-2 items-center">
          <BiMailSend className="text-red-500"></BiMailSend>Email:
          shohidularifin@gmail.com
        </div>
      </h3>
      <h3 className="text-xl">
        <div className="flex gap-2 items-center">
          <FaLocationArrow className="text-red-500 "></FaLocationArrow> Address:
          Avay Das Lane, Tikatuli, Dhaka,Bangladesh
        </div>
      </h3>
      <h2 className="text-3xl bold mb-2">Message Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input
            className="input input-bordered input-accent w-1/2  mb-2"
            type="text"
            name="user_name"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            className="input input-bordered input-accent w-1/2  mb-2"
            type="email"
            name="user_email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-accent w-1/2"
            name="message"
            placeholder="Your Message"
          />
        </div>

        <input
          className="btn btn-primary w-1/2 hover:bg-red-500"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default Contact;
