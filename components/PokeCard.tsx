import React from 'react';

type PokeProps = {
  name:string;
  desc: string,
  imgUrl: string;
}

const PokeCard = ({name,desc,imgUrl}: PokeProps) => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='flex items-center'>
        <div className='container mx-auto px-20 py-10 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300'>
          <img
            className=''
            src={imgUrl}
            alt=''
            height={130}
            width={130}
          />
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='mt-5 text-2xl font-semibold'>{name}</h1>
              <p className='mt-2'>{desc}</p>
            </div>
          </div>
          <div>
            <button className='text-white text-md font-semibold bg-green-400 mt-5 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 '>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
