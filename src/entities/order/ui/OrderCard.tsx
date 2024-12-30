import { Button } from "@shared/shadcn/components/button";
import Image                             from 'next/image'
import { aliIcon } from "@shared/assets";


export const OrderCard = () => {
    return (
        <div className='bg-zinc-900 flex justify-between rounded-2xl p-3 sm:p-4 w-full items-center'>
            <div className='flex items-center justify-center gap-5'>
                <Image
                    src={aliIcon}
                    placeholder='blur'
                    alt={'icon'}
                    width={48}
                    height={48}
                    className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl object-cover'
                />
                <div>
                    <h1 className='text-lg font-medium'>Заказ #1</h1>
                    <p className='text-zinc-400 text-sm'>Test test test</p>
                </div>
            </div>
            <Button>Закрыть</Button>
        </div>
    );
};