import pokemonLogo from '@/lib/data';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='bg-primary top-0 left-0 w-full h-24 flex items-center justify-center shadow-md'>
      <Link href='/'>
        <div className='flex justify-center items-center'>
          <Image src={pokemonLogo} alt='poki-logo' width={200} height={200} />
        </div>
      </Link>
    </div>
  );
}
