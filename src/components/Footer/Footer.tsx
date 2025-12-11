import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { icons, images } from "../../assets/assets";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundImage: `url(${images.footer})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            className="text-white relative"
        >
            {/* Overlay for better text readability on mobile/desktop */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Added 'relative z-10' so content sits above the overlay */}
            <div className="relative z-10 container mx-auto px-5 pt-12 md:pt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                {/* Logo Section spans 2 columns on large screens */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-2">
                        <img src={icons.logo} alt="logo" className="w-10 h-10 object-contain" />
                        <h5 className="uppercase text-base md:text-lg font-bold">Shamiul Islam & Associates</h5>
                    </div>
                    {/* Changed fixed w-1/2 to responsive width so it doesn't squash on mobile */}
                    <p className="w-full md:w-3/4 lg:w-1/2 leading-relaxed text-gray-300">
                        Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed.
                    </p>

                    <div className="flex items-center gap-2">
                        <a href="" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaFacebookF /></a>
                        <a href="" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaXTwitter /></a>
                        <a href="" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaInstagram /></a>
                        <a href="" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h5 className="uppercase text-base md:text-lg font-bold border-b border-gray-600 pb-2 inline-block">Quick Links</h5>
                    <ul className="space-y-3 text-gray-300">
                        <li><Link to={"/"} className="hover:text-[#dbb671] transition-colors">Home</Link></li>
                        <li><Link to={"/about"} className="hover:text-[#dbb671] transition-colors">About</Link></li>
                        <li><Link to={"/services"} className="hover:text-[#dbb671] transition-colors">Services</Link></li>
                        <li><Link to={"/blogs"} className="hover:text-[#dbb671] transition-colors">Blogs</Link></li>
                        <li><Link to={"/contact"} className="hover:text-[#dbb671] transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Find Us */}
                <div className="space-y-4">
                    <h5 className="uppercase text-base md:text-lg font-bold border-b border-gray-600 pb-2 inline-block">Find us</h5>
                    <div className="space-y-3 text-gray-300">
                        <p>25/1 Court House Street, Dhaka, Bangladesh</p>
                        <p className="font-semibold text-white">+880 1711 602 369</p>
                        <p>info@advprince.com</p>
                    </div>
                </div>

                {/* Practice Areas */}
                <div className="space-y-4">
                    <h5 className="uppercase text-base md:text-lg font-bold border-b border-gray-600 pb-2 inline-block">Practice Areas</h5>
                    <ul className="space-y-3 text-gray-300">
                        <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Civil Law</li>
                        <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Criminal Law</li>
                        <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Family Law</li>
                        <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Banking & Finance</li>
                        <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Corporate Law</li>
                        <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Cyber Law</li>
                    </ul>
                </div>
            </div>

            {/* copyright */}
            <div className="relative z-10 p-5 mt-10 text-center text-white/50 border-t border-white/10 text-sm">
                <p>&copy; {new Date().getFullYear()} | <a href="https://www.facebook.com/adv.prince.islam/" target="_blank" className="font-bold hover:text-white">Shamiul Islam & Associates</a>. All rights reserved. | Developed by <a href="https://www.facebook.com/techxbureau" target="_blank" className="font-bold hover:text-white">Tech<span className="text-orange-500">X</span>bureau</a></p>
            </div>
        </footer>
    )
}