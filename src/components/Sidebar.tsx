
"use client";

import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import favicon from '../app/favicon.ico';
import Image from 'next/image';

export default function Sidebar() {
  //for sidebar open managing
  const [open, setOpen] = useState(true);

  return (
    //animated motion div for sidebar expand and collapse
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: open ? 100 :0 }}
      transition={{ duration: 0.3 }}
      className="   flex w-full bg-white border-r gap-2  border-gray-200 sm:flex-col py-1 sm:items-center  sm:px-4 h-full"
    >
      {/*button to toggle sidebar*/}
      <button onClick={() => setOpen(!open)} className="   ml-2  sm:mb-4">
        <FiMenu className="text-xl text-black cursor-pointer" />
      </button>
      {/* showing selected profile if the sidebar is open*/}
      {open && <div className="w-10 h-10   bg-gray-300 rounded-full p-1 " >
        <Image
            src={favicon}
            alt="Favicon"
            width={40}
            height={40}
            className="rounded-full "
          />
        </div>
      }
    </motion.div>
  );
}


