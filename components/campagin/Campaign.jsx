'use client';

import React from 'react';
import Link from 'next/link';

import { FaPaperPlane } from 'react-icons/fa';
import { LuMailOpen } from 'react-icons/lu';
import { IoArrowUndo } from 'react-icons/io5';
import { BiEdit } from 'react-icons/bi';
import { BsThreeDots, BsFillPlayFill } from 'react-icons/bs';

const Campaign = ({ campaign }) => {
  return (
    <Link
      href={`/campaign/${campaign.id}/analytics`}
      className='flex justify-between items-center shadow px-6 py-4 mb-5'
    >
      <div className='flex flex-col'>
        <h1 className='font-bold text-md'>My First Campaign</h1>
        <p className='text-xs text-gray-500 font-medium'>7 days ago</p>
      </div>
      <button className='text-xs text-white font-bold py-2 px-2 rounded-md bg-gray-700'>
        Paused
      </button>
      <div className='flex gap-4'>
        <div className='flex gap-2 items-center'>
          <FaPaperPlane className='text-gray-500' />
          <p>0</p>
        </div>
        <div className='flex gap-2 items-center'>
          <LuMailOpen className='text-gray-500' />
          <p>0</p>
        </div>
        <div className='flex gap-2 items-center'>
          <IoArrowUndo className='text-gray-500' />
          <p>0</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <BsFillPlayFill className='text-2xl text-green-500' />
        <BiEdit className='text-gray-500 text-2xl' />
        <BsThreeDots className='text-gray-500 text-2xl' />
      </div>
    </Link>
  );
};

export default Campaign;
