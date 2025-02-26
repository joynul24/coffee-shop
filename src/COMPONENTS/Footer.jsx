import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
   <div className="mt-10 bg-[#ECEAE3] py-20">
     <div className="flex container mx-auto">
      <div className="flex-1 space-y-3">
        <img
          className="w-15"
          src="https://joynul2024.sirv.com/coffee-images/more/logo1.png"
          alt=""
        />
        <h3 className="text-4xl font-bold">Espresso Emporium</h3>
        <p className="font-raleway">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-3 text-3xl">
          <p>
            <FaFacebook></FaFacebook>
          </p>
          <p>
            <FaTwitter></FaTwitter>
          </p>
          <p>
            <FaInstagram></FaInstagram>
          </p>
          <p>
            <FaLinkedin></FaLinkedin>
          </p>
        </div>
      </div>
      {/* form */}
      <div className="flex-1">
        <h3 className="text-3xl mb-4">Connect with Us</h3>
       <div className="flex flex-col gap-2">
       <input className="p-3 rounded-xl" type="text"  placeholder="Your name"/>
       <input className="p-3 rounded-xl" type="text"  placeholder="Your email"/>
       <textarea className="p-3 rounded-xl" name="" id="" cols="20" rows="4" placeholder="Message"></textarea>
       </div>
       <button className="btn border-[#331A15] text-[#331A15] rounded-4xl mt-3">Send Message</button>
      </div>
    </div>
   </div>
  );
};

export default Footer;
