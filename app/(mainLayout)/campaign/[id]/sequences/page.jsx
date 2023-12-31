'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const TextEditor = dynamic(() => import('@/components/textEditor/TextEditor'), {
  ssr: false,
});
import Popup from '@/components/shared/Popup';
import CustomBtn from '@/components/shared/CustomBtn';
import CustomInput from '@/components/shared/CustomInput';

import { LuMail } from 'react-icons/lu';
import { FaPlus } from 'react-icons/fa6';

const Page = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showStepOne, setShowStepOne] = useState(false);
  const [draggedOverIndex, setDraggedOverIndex] = useState(null);

  const [steps, setSteps] = useState([
    { name: 'Step 1', content: '<Empty subject 1>' },
    { name: 'Step 2', content: '<Empty subject 2>' },
    { name: 'Step 2', content: '<Empty subject 2>' },
    { name: 'Step 2', content: '<Empty subject 2>' },
    { name: 'Step 2', content: '<Empty subject 2>' },
    { name: 'Step 2', content: '<Empty subject 2>' },
    { name: 'Step 2', content: '<Empty subject 2>' },
    { name: 'Step 2', content: '<Empty subject 2>' },
  ]);

  const handleContinueClick = () => {
    setShowPopup(false);
    setShowStepOne(true);
  };

  const handleCancelClick = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <Popup height={'h-[300px]'} width={'w-[450px]'}>
          <h1 className='text-3xl font-semibold text-gray-500'>
            Are you sure?
          </h1>
          <div className='text-sm text-gray-700 my-5'>
            <p>{`You're trying to add a step to a launched campaign.`}</p>
            <br />
            <p>
              This will result in all leads who have not replied to your email
              (and are safe to contact) to go through the new step(s).
            </p>
          </div>
          <div className='flex items-center gap-5'>
            <CustomBtn onClick={handleContinueClick}>Continue</CustomBtn>
            <CustomBtn variant='outline' onClick={handleCancelClick}>
              Cancel
            </CustomBtn>
          </div>
        </Popup>
      )}
      <div className='flex flex-1 py-4 gap-3 mt-4 max-h-full'>
        <div className='flex flex-col min-w-[20rem] overflow-y-auto custom-scrollbar pr-3 my-4'>
          {showStepOne && (
            <ul className='flex flex-col gap-5'>
              {steps.map((step, index) => (
                <li
                  className={`draggable ${
                    index === draggedOverIndex ? 'drag-over' : ''
                  }`}
                  key={index}
                  draggable
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDraggedOverIndex(index);
                    if (draggedOverIndex !== index) {
                      const updatedSteps = [...steps];
                      const [draggedItem] = updatedSteps.splice(
                        draggedOverIndex,
                        1
                      );
                      updatedSteps.splice(index, 0, draggedItem);
                      setSteps(updatedSteps);
                      setDraggedOverIndex(index);
                    }
                  }}
                >
                  <div className='flex flex-col shadow-lg rounded-lg bg-orange-50/50'>
                    <div className='flex items-center gap-1 border-b p-4'>
                      <LuMail />
                      <p>{step.name}</p>
                    </div>
                    <div className='flex flex-col px-4 py-5'>
                      <p>{step.content}</p>
                    </div>
                    <div className='flex items-center justify-center gap-2 p-4'>
                      <CustomBtn variant='ghost' className='bg-orange-50/20'>
                        <div className='flex gap-1'>
                          <FaPlus className='text-lg text-primary' />
                          <p>Add variant</p>
                        </div>
                      </CustomBtn>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className='mt-4'>
            <CustomBtn variant='outline' className='w-full border-border py-2'>
              Add step
            </CustomBtn>
          </div>
        </div>
        <div className='flex flex-col w-full h-full border rounded-lg'>
          <div className='flex items-center justify-between py-3 border-b'>
            <div className='flex items-center gap-2 flex-1 text-sm text-gray-500 font-semibold mx-3'>
              <p>Subject</p>
              <CustomInput placeholder='Your subject' />
            </div>
            <div className='border-l px-3'>
              <CustomBtn>Save</CustomBtn>
            </div>
          </div>

          <TextEditor />
        </div>
      </div>
    </>
  );
};

export default Page;
