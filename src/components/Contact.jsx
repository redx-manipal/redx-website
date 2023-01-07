import { BsFillTelephoneFill,BsYoutube } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import {
  RiLinkedinFill,
  RiInstagramLine,
  RiFacebookCircleFill,
} from "react-icons/ri";
import { BiUser } from "react-icons/bi";

function Contact() {
  return (
    <section id="contact" className='mt-24'>
      <div className="flex items-center justify-around contactContainer">
        {/* left container  */}
        <div className="flex flex-col justify-between leftContainer">
          {/* section one  */}
          <div>
            <p className="text-3xl font-semibold">Contact</p>
            <p className="text-sm mt-2">
              Fill up the form and our team will get in contact with you soon.{" "}
            </p>
          </div>
          {/* section one ends  */}

          {/* section two  */}
          <div className="flex flex-col items-start font-regular text-lg w-52 justify-between h-44">
            <div className="flex items-center p-2 hover:border border-red-600 underline-offset-8 rounded-lg cursor-pointer hover:font-medium hover:scale-110 transition-transform duration-200 ease-out">
              <BsFillTelephoneFill className="text-xl mr-4 text-red-600" />{" "}
              <p>+1234567890</p>
            </div>
            <a href="mailto:prajnapprabhu3@gmail.com">
              <div className="flex items-center p-2 hover:border border-red-600 underline-offset-8 rounded-lg cursor-pointer hover:font-medium hover:scale-110 transition-transform duration-200 ease-out">
                <IoMdMail className="text-xl mr-4 text-red-600" />
                <p>hello@redxmanipal.in</p>
              </div>
            </a>
            <div className="flex items-center p-2 hover:border border-red-600 underline-offset-8 rounded-lg cursor-pointer hover:font-medium hover:scale-110 transition-transform duration-200 ease-out">
              <MdLocationOn className="text-xl mr-4 text-red-600" />
              <p>Manipal,Karnataka</p>
            </div>
            <div></div>
          </div>
          {/* section two ends  */}

          {/* section three  */}
          <div className="flex justify-between text-4xl">
            <RiFacebookCircleFill className=" hover:text-red-600" />
            <RiInstagramLine className=" hover:text-red-600" />
            <RiLinkedinFill className=" hover:text-red-600" />
            <BsYoutube className=" hover:text-red-600" />
          </div>
        </div>

        {/* right contaienr  */}
        <div className="rightContainer flex flex-col justify-around items-center">
          <div>
            <p>Your name</p>
            <p className="inputContainer flex items-center justify-start">
              <BiUser className='text-zinc-400 mx-2 rightContainerIcons'/>
              <input
                type="text"
                placeholder="Your name"
                className="text-sm p-4 outline-none"
              />
            </p>
          </div>

          <div>
            <p>Email</p>
            <p className="inputContainer flex items-center justify-start">
              <IoMdMail className='text-zinc-400 mx-2 rightContainerIcons'/>
              <input
                type="text"
                placeholder="Your email"
                className="text-sm p-4 outline-none"
              />
            </p>
          </div>

          <div>
            <p>Your name</p>
            <p className="inputContainer flex items-center justify-start">
             <textarea name="" id="" cols="38" rows="5" placeholder="Message" className='p-3'></textarea>
            </p>
          </div>

         <div className='flex justify-end w-2/3 pb-4'>
         <a
          href="https://github.com/Prajnaprabhu3"
          className="cursor-pointer font-bold text-sm rounded py-1.5 px-2  hover:scale-110 text-white duration-200 emailButton"
        >
         <p className="mr-1">Send Message</p>
        </a>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

