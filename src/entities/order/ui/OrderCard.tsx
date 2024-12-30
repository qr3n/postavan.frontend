import { Button } from "@shared/shadcn/components/button";
import Image                         from 'next/image'
import { ozonIcon } from "@shared/assets";


export const OrderCard = () => {
    return (
        <div className='bg-zinc-900 flex justify-between rounded-2xl p-4 w-full'>
            <div className='flex items-center justify-center gap-5'>
                <Image
                    src={ozonIcon}
                    placeholder='blur'
                    alt={'icon'}
                    width={48}
                    height={48}
                    className='rounded-2xl object-cover h-max'
                />
                <div>
                    <h1 className='text-xl font-medium'>Заказ #1</h1>
                    <p className='text-zinc-400'>Test test test</p>
                </div>
            </div>
            <Button>Закрыть</Button>
        </div>
    );
};