import { FaPhone, FaClock, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 py-10 px-6 md:px-16">
      <div className="grid md:grid-cols-4 gap-10">

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-bold text-yellow-200 mb-4">CONTACT US</h2>
          <p>👤Student Coordinator: S.Imran Nazir,     A.Vishnu Sekaran</p>
          <p className="flex items-center gap-2 mt-2" title="Imran">
            <FaPhone />+91 89460 85787 
          </p>
          <p className="flex items-center gap-2 mt-2" title="Vishnu">
            <FaPhone />+91 78670 34914
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaMapMarkerAlt /> AAA College of Engineering and Technology,
            Amathur, Tamil Nadu
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaClock /> 9:00 AM – 4:30 PM
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-yellow-200 mb-4">QUICK LINKS</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-300">About</a></li>
            <li><a href="#events" className="hover:text-yellow-300">Events</a></li>
            <li><a href="#schedule" className="hover:text-yellow-300">Schedule</a></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-lg font-bold text-yellow-200 mb-4">LOCATION</h2>
          <a 
            href="https://www.google.com/maps/place/AAA+College+of+Engineering+%26+Technology/@9.5654894,77.8499042,15z/data=!4m15!1m8!3m7!1s0x3b06d3b7843d0bf9:0x97b2a7e78de066b4!2sAmathur,+Tamil+Nadu+626005!3b1!8m2!3d9.5672323!4d77.8624545!16s%2Fg%2F1q5bfjv96!3m5!1s0x3b06d3bc7b84dc6b:0xfec08b3a0d3caa76!8m2!3d9.568609!4d77.8702446!16s%2Fg%2F1hhk0ch0g?hl=en&entry=ttu"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <iframe
              title="AAA College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.743050287498!2d77.8499042!3d9.565489399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06d3bc7b84dc6b%3A0xfec08b3a0d3caa76!2sAAA%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1725032000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </a>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-bold text-yellow-200 mb-4">FOLLOW US</h2>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.instagram.com/techfusion_2k_25/" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.facebook.com/aaacollege/" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="https://www.linkedin.com/school/aaa-college-of-engineering-and-technology/posts/?feedView=images" className="hover:text-blue-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © 2025 Tech Fusion. All rights reserved. <br />
        <span className="text-yellow-200">Designed & Developed by VimalRaj.R</span>
      </div>
    </footer>
  );
}

export default Footer;
