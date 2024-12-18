import React from 'react';
import active from "../assets/active.png"
import offline from "../assets/offline.png"
import superMan from "../assets/superMan.png"
import superGirl from "../assets/superwomen.png"
const StudentInfo = () => {
    return (
        <table className='ml-3 table-auto  '>
            <thead>
                <tr className='text-left border-b'>
                    <th className=' px-4 py-2'>Student Name</th>
                    <th className=' px-4 py-2'>Cohort</th>
                    <th className=' px-4 py-2'>Courses</th>
                    <th className=' px-4 py-2'>Date Joined</th>
                    <th className=' px-4 py-2'>Last Login</th>
                    <th className=' px-4 py-2'>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-b'>
                    <td className='px-4 py-2'>Anshuman Kashyapd</td>
                    <td className='px-4 py-2'>AY 2024-25</td>
                    <td className='px-4 py-2 grid grid-cols-2 gap-2'>
                        <div className='flex'>
                            <img src={superMan} alt="" className='h-fit self-center' />
                            <div className='flex w-[134.97px] h-[24px] bg-[#f6f8fa] rounded-md w-fit pr-3'>
                                <p className=''>CBSE 9 Science</p>
                            </div>
                        </div>
                         <div className='flex'>
                            <img src={superGirl} alt="" className='h-fit self-center' />
                            <div className='flex w-[134.97px] h-[24px] bg-[#f6f8fa] rounded-md w-fit pr-3'>
                                <p className=''>CBSE 9 Science</p>
                            </div>
                        </div>
                    </td>
                    <td className='px-4 py-2'><p>17. Nov. 2024</p></td>
                    <td className='px-4 py-2'><p>17. Nov. 2024 4:16 PM</p></td>
                    <td className='px-4 py-2'><img src={active} alt="" /></td>
                </tr>
                <tr className='border-b'>
                    <td className='px-4 py-2'>Bansi Dadhaniya</td>
                    <td className='px-4 py-2'>AY 2024-25</td>
                    <td className='px-4 py-2 grid grid-cols-2 gap-2'>
                        <div className='flex'>
                            <img src={superMan} alt="" className='h-fit self-center' />
                            <div className='flex w-[134.97px] h-[24px] bg-[#f6f8fa] rounded-md w-fit pr-3'>
                                <p className=''>CBSE 9 Science</p>
                            </div>
                        </div>
                         <div className='flex'>
                            <img src={superGirl} alt="" className='h-fit self-center' />
                            <div className='flex w-[134.97px] h-[24px] bg-[#f6f8fa] rounded-md w-fit pr-3'>
                                <p className=''>CBSE 9 Science</p>
                            </div>
                        </div>
                    </td>
                    <td className='px-4 py-2'><p>17. Nov. 2024</p></td>
                    <td className='px-4 py-2'><p>17. Nov. 2024 4:16 PM</p></td>
                    <td className='px-4 py-2'><img src={offline} alt="" /></td>
                </tr>
            </tbody>
        </table>
    );
};

export default StudentInfo;
