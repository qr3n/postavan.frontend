import { Input } from "@shared/shadcn/components/input";

export const Navbar = () => {
    return (
        <div className='w-full p-4 sticky top-0 flex justify-center items-center flex-row'>
            <div className='w-[600px] pr-20 sm:pr-24 md:pr-0'>
                <Input placeholder='Поиск' className='w-full rounded-full pl-5'/>
            </div>
            <div className='absolute right-8 rounded-full bg-blue-500 h-[46px] w-[46px]'>

            </div>
        </div>
    );
};