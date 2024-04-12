'use client';
import React, { useState, useEffect, useRef } from 'react';
import { dropdownOptions } from '@/lib/data';

interface DropdownOption {
  id: number;
  label: string;
  value: string;
}

const SearchBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutsideEvent = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleOptionSelectEvent = (option: DropdownOption | null) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  // Add event listener when the component mounts and remove it when unmounting
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideEvent);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideEvent);
    };
  }, []);

  return (
    <div className='flex justify-center items-center px-20'>
      <div className='space-y-10 my-5'>
        <div className='relative'>
          <div className='flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg'>
            <div className='flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 opacity-30'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
              <input
                className='bg-gray-100 outline-none'
                type='text'
                placeholder='Search'
              />
            </div>
            <div className='relative'>
              <button
                className='flex py-3 px-5 rounded-lg text-gray-500 font-medium cursor-pointer hover:bg-gray-50 focus:ring-2 focus:outline-none focus:ring-gray-200'
                onClick={toggleDropdown}
              >
                <span>{selectedOption ? selectedOption.label : 'Generations'}</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={`h-5 w-8 ${showDropdown ? 'rotate-180' : ''}`}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
              {/* Dropdown List */}
              {showDropdown && (
                <div ref={dropdownRef} className='absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg cursor-pointer'>
                  <ul className='flex-row'>
                    {dropdownOptions.map((option) => (
                      <li
                        key={option.id}
                        className='py-2 px-7 text-gray-500 hover:bg-gray-100'
                        onClick={() => handleOptionSelectEvent(option)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <button className='bg-primary py-3 px-5 text-white font-semibold rounded-lg hover:bg-red-700 focus:bg-red-700 hover:shadow-xl transform hover:scale-105 transition duration-500 cursor-pointer'>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
