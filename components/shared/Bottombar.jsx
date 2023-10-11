'use client';

import { usePathname } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

import { icons } from '@/utils/constants/sidebar';

const Bottombar = () => {
  const pathname = usePathname();
  const lastIcon = icons[icons.length - 1];

  return (
    <div className='md:hidden flex flex-1 fixed bottom-0 w-full h-16 flex-col border-t shadow-md z-50 bg-white'>
      {/* <div className='flex justify-center items-center h-24 md:w-24 cursor-pointer'>
        <Link href='/accounts'>
          <Image
            src='/assets/icons/logo.svg'
            alt='logo'
            width={35}
            height={35}
          />
        </Link>
      </div> */}
      <div className='flex flex-1 justify-center mx-5'>
        <div className='flex w-full justify-between items-center'>
          {icons.map((icon, index) => {
            return (
              index !== icons.length - 1 && (
                <div key={icon.name} className='py-4'>
                  <Link href={icon.route}>
                    <div className='cursor-pointer'>
                      <icon.path
                        className={`text-3xl ${
                          pathname.includes(icon.route)
                            ? 'text-primary'
                            : 'text-gray-600'
                        }`}
                      />
                    </div>
                  </Link>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
