import React from 'react'
import logo from "../assets/Vector.png"
import logo1 from "../assets/Frame.png"
import logo2 from "../assets/two.png"
import logo3 from "../assets/three.png"
import logo4 from "../assets/four.png"
import logo5 from "../assets/five.png"
import logo6 from "../assets/six.png"

const Sidebar = () => {
    return (
        <div className='flex flex-col h-auto w-[248px] gap-[20px] bg-white'>
            <div className='mt-4'>
                {/* Logo */}
            <div className='p-4'>
                <img src={logo} alt="Logo" className='w-[98px] h-[42px]' />
            </div>

            {/* Sidebar Menu */}
            <ul className='space-y-2'>
                <li className="flex items-center gap-[10px] p-[12px] hover:bg-gray-300 cursor-pointer">
                    <img src={logo1} alt="Dashboard Icon" />
                    <p className="text-black">Dashboard</p>
                </li>
                <li className="flex items-center gap-[10px] p-[12px] hover:bg-gray-300 cursor-pointer bg-gray-300">
                    <img src={logo2} alt="Students Icon" />
                    <p className="text-black font-bold">Students</p>
                </li>
                <li className="flex items-center gap-[10px] p-[12px] hover:bg-gray-300 cursor-pointer">
                    <img src={logo3} alt="Chapter Icon" />
                    <p className="text-black">Chapter</p>
                </li>
                <li className="flex items-center gap-[10px] p-[12px] hover:bg-gray-300 cursor-pointer">
                    <img src={logo4} alt="Help Icon" />
                    <p className="text-black">Help</p>
                </li>
                <li className="flex items-center gap-[10px] p-[12px] hover:bg-gray-300 cursor-pointer">
                    <img src={logo5} alt="Reports Icon" />
                    <p className="text-black">Reports</p>
                </li>
                <li className="flex items-center gap-[10px] p-[12px] hover:bg-gray-300 cursor-pointer">
                    <img src={logo6} alt="Settings Icon" />
                    <p className="text-black">Settings</p>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Sidebar
