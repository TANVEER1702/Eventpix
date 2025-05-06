// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <header className="bg-transparent shadow-md flex h-20 justify-between items-center ">
        <h1 className='text-white font-bold text-2xl ml-10'>EventPix</h1>

      {/* <Image
        src="/Eventpix1.jpg"
        alt="Logo"
        width={200}
        height={100}
        className="mix-blend-multiply"
        /> */}
      <nav className="space-x-4 mr-10 text-white">
        <Link href="/Dashboard/Event" className="hover:underline">Events</Link>
        <Link href="/Dashboard/upload" className="hover:underline">Upload</Link>
        <Link href="/Dashboard/albums" className="hover:underline">Albums</Link>
        <Link href="/Dashboard/settings" className="hover:underline">Settings</Link>
        <Link href="/contact" className="hover:underline">Contact us</Link>
      </nav>
    </header>
    </div>
  );
}

export default Header;
