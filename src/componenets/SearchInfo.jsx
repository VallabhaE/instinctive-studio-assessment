import React from 'react';
import plus from "../assets/plus.png"
export const SearchInfo = () => {
  return (
    <div className="flex justify-between m-3">
      {/* Dropdown Boxes */}
      <div className="flex gap-4">
        {/* First Dropdown */}
        <div className="w-[149px] h-[38px] flex items-center ">
          <select 
            className="w-full bg-[#E9EDF1] rounded-md h-full p-2 cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Select 
            </option>
            <option value="value1">AY 2024-25</option>
            <option value="value2">AY 2024-25</option>
            <option value="value3">AY 2024-25</option>
          </select>
        </div>

        {/* Second Dropdown */}
        <div className="w-[149px] h-[38px] flex items-center">
          <select
            className="w-full h-full rounded-md bg-[#E9EDF1] p-2  cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Select 
            </option>
            <option value="value1">CBSE 9</option>
            <option value="value2">CBSE 8</option>
            <option value="value3">CBSE 7</option>
          </select>
        </div>
      </div>

      {/* Add New Student Button */}
      <div className="w-[197px] h-[36px] font-medium flex items-center justify-center gap-3 bg-[#E9EDF1] rounded-md cursor-pointer">
        <img src={plus} alt="" className='h-fit' />
        Add New Student
      </div>
    </div>
  );
};
