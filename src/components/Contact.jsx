
import { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import emailjs from 'emailjs-com'
function Contact() {
 const formRef = useRef();
    function sendEmail(e) {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();

        if(!name || !email || !message){
            alert('Please fill out all fields before sending.');
            return;
        }

 let handleDivClick = () => {
    formRef.current.requestSubmit(); // works like clicking submit
  };

        emailjs.sendForm('service_qzznlxp','template_iw13x0l',e.target,'syE1G3J4Ym9FEWtF8').then((result)=>{
               console.log('Email successfully sent!', result.text);
            alert('Message sent successfully!');
            e.target.reset();
        }).catch((err)=>{
            console("Email not sent")
            alert('Email not sent');
        })
    }
  return (
    <>
      <div  className=" contact flex flex-col justify-center gap-2 items-center mt-30 mb-10 p-5" id="contact-sec">
        <h2 className=" text-amber-400 text-xl font-bold">
          Thank You for Visiting My Portfolio{" "}
        </h2>
        <h1 className=" text-white text-3xl max-md:text-3xl  font-family-sora font-bold text-center">
          Atul Chourasia
        </h1>
        <h3 className=" text-white  max-md:text-sm   text-center w-[60%] max-[793px]:w-full max-[1300px]:w-[65%] max-[1300px]:text-sm  font-family-sora ">
          I truly appreciate your time and interest. If there’s an opportunity
          to collaborate or work together, I’d be glad to connect and contribute
          with passion and professionalism.
        </h3>
      </div>
      <div className="flex max-[1279px]:flex-col p-10 justify-center items-center gap-20 max-[793px]:p-2 ">
        <div className="left-contact bg-gray-900/20 p-10 hover:border-yellow-400 border-1  shadow-lg hover:shadow-yellow-500  border-gray-500  rounded-xl flex justify-center max-[1279px]:w-1/2 max-[793px]:w-[90%] w-[35%] ">
            <div className=" flex flex-col gap-3 p-3 ">
             <h1 className="font-bold text-3xl text-white">Get in Touch</h1>
             <div className="hover:text-yellow-400 transition duration-100 cursor-pointer flex max-[974px]:text-sm  text-lg gap-2 text-white"><MdOutlineMail className="text-xl"/><p>atulkumarchourasia221@gmail.com</p></div>
             <div className="hover:text-yellow-400 transition duration-100 cursor-pointer flex text-lg max-[974px]:text-sm  gap-2 text-white"><FaLinkedin className="text-xl"/><p>linkedin.com/in/atul-kumar-chourasia/</p></div>
             <div className="hover:text-yellow-400 transition duration-100 cursor-pointer flex text-lg  max-[974px]:text-sm gap-2 text-white"><FaGithub className="text-xl"/> <p >github.com/atul64796</p></div>
             </div>
        </div>
        <div className="right-contact border-1  max-[1279px]:w-1/2  w-[35%] max-[793px]:w-[90%]">
           <div className="flex justify-center     p-4 ">
            <form action="" className="flex flex-col gap-4 w-full justify-center  " onSubmit={sendEmail} ref={formRef}  >
                <input id="name" type="text" name="name" className="border-1 p-2  text-gray-400" placeholder="Your name" />
                <input  id="email" type="email" name="email" className="border-1  text-gray-400 p-2" placeholder="Your email address" />
                <textarea name="message"  className="border-1   text-gray-400 p-2" placeholder="Your message" rows="6"  ></textarea>
                <div className="flex justify-center gap-20"> 
                    <div  onClick={() => formRef.current.requestSubmit()} className="flex items-center bg-yellow-400 hover:bg-yellow-500  transition  relative w-full rounded-lg cursor-pointer justify-center p-2 ">
                    <IoIosSend className=" text-2xl left   " type="submit"/>
                    <input type="submit"  className="  text-start " />
                    </div>
                    </div>
            </form>
           </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
