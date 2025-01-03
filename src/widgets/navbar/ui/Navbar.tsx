import { Input } from "@shared/shadcn/components/input";
import { Avatar } from "@shared/ui/avatar/ui/Avatar";

export const Navbar = () => {
    return (
        <div className='w-full p-4 sticky top-0 flex justify-center items-center flex-row'>
            <div className='w-[600px] pr-20 sm:pr-24 md:pr-0'>
                <Input placeholder='Поиск' className='h-12 sm:h-14 w-full rounded-full pl-5'/>
            </div>
            <div className='absolute right-8 bg-zinc-700 rounded-full'>
                <Avatar/>
            </div>
        </div>
    );
};
