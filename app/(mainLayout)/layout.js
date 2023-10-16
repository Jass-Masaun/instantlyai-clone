import Topbar from '@/components/shared/Topbar';
import Sidebar from '@/components/shared/Sidebar';
import Bottombar from '@/components/shared/Bottombar';

export default function layout({ children }) {
  return (
    <div className='flex w-full'>
      <Topbar />
      <div className='flex flex-1 mb-20'>
        <Sidebar />
        <div className='flex flex-1 mt-20 md:ml-24'>{children}</div>
      </div>
      <Bottombar />
    </div>
  );
}
