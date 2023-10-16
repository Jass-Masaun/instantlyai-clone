'use client';

import { usePathname } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

import { icons } from '@/utils/constants/sidebar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { Button } from '../ui/button';

const Sidebar = () => {
  const pathname = usePathname();
  const lastIcon = icons[icons.length - 1];

  return (
    <div className='max-sm:hidden flex fixed h-screen flex-col w-24 border-r shadow-md z-50 bg-white overflow-y-auto overflow-x-hidden custom-scrollbar'>
      <div className='flex justify-center items-center h-24 w-24 cursor-pointer'>
        <Link href='/accounts'>
          <Image
            src='/assets/icons/logo.svg'
            alt='logo'
            width={35}
            height={35}
          />
        </Link>
      </div>
      <div className='flex flex-1 flex-col justify-between'>
        <div className='flex flex-col items-center gap-5 mt-5 mb-5'>
          {icons.map((icon, index) => {
            return (
              index !== icons.length - 1 && (
                <HoverCard key={index} openDelay={0} closeDelay={0}>
                  <HoverCardTrigger asChild>
                    <Button
                      asChild
                      variant='ghost'
                      className='py-8 rounded-full'
                    >
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
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent side='left' className='w-auto'>
                    <p>{icon.hoverText}</p>
                  </HoverCardContent>
                </HoverCard>
              )
            );
          })}
        </div>
        <div className='flex flex-col items-center gap-5 mt-10 mb-5'>
          <div key={lastIcon.name} className='py-4'>
            <Link href={lastIcon.route}>
              <div className='cursor-pointer'>
                <lastIcon.path
                  className={`text-3xl ${
                    pathname === lastIcon.route
                      ? 'text-primary'
                      : 'text-gray-600'
                  }`}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
