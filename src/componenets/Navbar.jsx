import React from 'react';
import Search from "../assets/Search.png";
import logo4 from "../assets/four.png";
import message from "../assets/message.png";
import settings from "../assets/settings.png";
import notify from "../assets/notify.png";
import user from "../assets/User.png";

const Navbar = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between pt-3 flex-wrap">
                {/* Search Bar - Responsive Width */}
                <div className="flex gap-2 w-full sm:w-3/5 items-center p-2  rounded-md mb-3 sm:mb-0">
                    <img className="h-5" src={Search} alt="Search Icon" />
                    <input
                        className="w-full p-1 outline-none"
                        type="text"
                        placeholder="Search your course"
                    />
                </div>

                {/* Icons and User Info - Responsive */}
                <div className="flex items-center justify-evenly w-full sm:w-2/5">
                    {/* Icons */}
                    <button className="no-underline">
                        <img src={logo4} alt="Icon 1" />
                    </button>
                    <button className="relative no-underline">
                        <img src={message} alt="Message Icon" />
                        {/* Notification Dot */}
                        <div className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></div>
                    </button>
                    <button className="no-underline">
                        <img src={settings} alt="Settings Icon" />
                    </button>
                    <button className="no-underline relative">
                        <img src={notify} alt="Notification Icon" />
                        <div className="absolute top-0 right-0 bg-red-500 w-2 h-2 rounded-full"></div>

                    </button>
                    {/* User Info */}
                    <div className="flex items-center gap-3 font-medium">
                        <img src={user} alt="User Icon" />
                        <p className="no-underline">Adeline H. Dancy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
