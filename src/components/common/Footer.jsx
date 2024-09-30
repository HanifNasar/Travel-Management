/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiStore } from "../../features/uiSlice";
import Logo from "../../banners/logo.png"
const Footer = () => {
  const { mode } = useSelector(uiStore);
  return (
    <div className="px-[2%] md:px-[6%] mt-20 z-0">
      <footer style={{ backgroundColor: 'white', borderRadius: '50px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)' }} className="p-4 mb-4">
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 basis-[10rem]">
            <Link to="/">
              <img
                src={mode === "dark" ? Logo : Logo}
                alt="logo"
                className="w-28"
              />
            </Link>
            
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Travel Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#"> Flight Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Car Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Five-star Hotels</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Travelling</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Support</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Account</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Legal</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Contact</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Pricacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Success</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">About TripGuide</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Blog</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Information</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Travel Guide</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>
            <p className="text-muted text-sm">
              Subscribe to be the first one to know about updates. Enter your
              email
            </p>
            <div className="flex-align-center justify-center my-3">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none rounded-lg dark:bg-card-dark"
                placeholder="Email Address.."
              />
              <button className="btn btn-primary -ml-2">subscribe</button>
            </div>
            <div className="flex-center-center gap-5 my-6">
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
