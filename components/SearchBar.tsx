import React from 'react';

export default function SearchBar() {
  return (
    <div className='relative flex justify-center'>
      <input
        type='search'
        className='block w-64 rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-2 py-[0.5rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-medium focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-dark dark:placeholder:text-medium-200 dark:autofill:shadow-autofill dark:focus:border-light'
        placeholder='Search'
        aria-label='Search'
        id='exampleFormControlInput3'
        aria-describedby='button-addon3'
      />
      <button
        className='z-[2] inline-block rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-light transition duration-150 ease-in-out bg-primary hover:border-primary-accent-300 hover:bg-primary hover:text-light focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-red-700 dark:focus:bg-red-700'
        data-twe-ripple-init
        data-twe-ripple-color='white'
        type='button'
        id='button-addon3'
      >
        Search
      </button>
    </div>
  );
}
