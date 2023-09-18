import Image from 'next/image';

import { icons } from '@/utils/constants/sidebar';

export default function Sidebar() {
  return (
    <section className="flex flex-1 h-screen flex-col w-fit">
      <div className="flex justify-center h-16">
        <Image src="/assets/icons/logo.svg" alt="logo" width={35} height={35} />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col justify-center gap-5 mt-10 mb-5">
          {icons.map((icon) => {
            return (
              <div key={icon.name} className="px-6 py-3">
                <Image src={icon.path} alt={icon.name} height={30} width={30} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center gap-5 mt-10 mb-5">
          <div className="px-6 py-3">
            <Image
              src="/assets/icons/sidebar/rocket.svg"
              alt="rocket"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
