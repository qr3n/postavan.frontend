import { Modal }  from "@shared/ui/modal";
import { ImageLoader } from "@shared/ui/image-loader";
import { yandexIcon } from "@shared/assets";
import { Button } from "@shared/shadcn/components/button";
import {ScrollArea} from "@shared/shadcn/components/scroll-area";
import {Separator} from "@shared/shadcn/components/separator";


export const OrderDetailsModal = () => {
    return (
        <Modal
            title={<>
                <ImageLoader priority src={yandexIcon} alt={'christmasTree'} width={24} height={24} className='rounded-lg w-[24px] h-[24px]'/>
                Заказ #1
            </>}
            description=''
            trigger={<div className='absolute top-0 left-0 w-full h-full'/>}
            dialogStyle={'max-w-[500px]'}
        >
            <div className='px-6 sm:px-0'>
                <ScrollArea className='h-[calc(60dvh-100px)] mt-6'>
                    <h1 className='text-2xl font-semibold text-white'>Основное</h1>
                    <div className='mt-4'>
                        <h1 className='text-zinc-400 text-xl font-light'>Упаковка</h1>
                        <p className='font-medium mt-0.5'>Тест</p>
                    </div>

                    <div className='mt-4'>
                        <h1 className='text-zinc-400 text-xl font-light'>Упаковка</h1>
                        <p className='font-medium mt-0.5'>Тест</p>
                    </div>

                    <div className='mt-4'>
                        <h1 className='text-zinc-400 text-xl font-light'>Упаковка</h1>
                        <p className='font-medium mt-0.5'>Тест</p>
                    </div>

                    <div className='mt-4'>
                        <h1 className='text-zinc-400 text-xl font-light'>Упаковка</h1>
                        <p className='font-medium mt-0.5'>Тест</p>
                    </div>

                    <Separator className='mt-4 mr-4 max-w-[96%]'/>
                    <h1 className='text-2xl font-semibold text-white mt-4'>Основное</h1>
                    <div className='mt-4'>
                        <h1 className='text-zinc-400 text-xl font-light'>Упаковка</h1>
                        <p className='font-medium mt-0.5'>Тест</p>
                    </div>

                    <Separator className='mt-4 mr-4 max-w-[96%]'/>
                    <h1 className='text-2xl font-semibold text-white mt-4'>Основное</h1>
                    <div className='mt-4'>
                        <h1 className='text-zinc-400 text-xl font-light'>Упаковка</h1>
                        <p className='font-medium mt-0.5'>Тест</p>
                    </div>
                </ScrollArea>
                <Button className='mt-8 w-full'>Закрыть</Button>
                <Button className='mt-4 w-full' variant='outline'>Отменить</Button>
            </div>
        </Modal>
    );
};