import Back from '@/components/shared/Back';

export default function layout({ children }) {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex border-b'>
        <div className='w-1/2'>
          <Back />
        </div>
      </div>
      {children}
    </div>
  );
}
