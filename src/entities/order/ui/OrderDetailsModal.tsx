import { Modal }  from "@shared/ui/modal";
import { ImageLoader } from "@shared/ui/image-loader";
import { yandexIcon } from "@shared/assets";
import { Button } from "@shared/shadcn/components/button";

export const OrderDetailsModal = () => {
    return (
        <Modal
            title={<>
                <ImageLoader priority src={yandexIcon} alt={'christmasTree'} width={24} height={24} className='rounded-lg w-[24px] h-[24px]'/>
                Заказ #1
            </>}
            description='Короб, 27 число'
            trigger={<div className='absolute top-0 left-0 w-full h-full'/>}
        >
            <div className='h-[calc(70dvh-100px)] overflow-y-auto px-6 sm:px-0 mt-4'>
                <div>
                    <h1 className='text-2xl font-semibold'>Основное</h1>
                    <h2 className='text-zinc-400 text-xl font-light mt-4'>Test</h2>
                    <p className='font-medium mt-1'>Value</p>

                    <h2 className='text-zinc-400 text-xl font-light mt-4'>Test</h2>
                    <p className='font-medium mt-1'>ValueValueValueValueValue</p>

                    <h2 className='text-zinc-400 text-xl font-light mt-4'>TestTestTestTest</h2>
                    <p className='font-medium mt-1'>Value</p>

                    <h2 className='text-zinc-400 text-xl font-light mt-4'>Test</h2>
                    <p className='font-medium mt-1'>ValueValueValue</p>

                    <h2 className='text-zinc-400 text-xl font-light mt-4'>Test</h2>
                    <p className='font-medium mt-1'>ValueValue</p>
                </div>

                <div className='mt-12'>
                    <h1 className='text-2xl font-semibold'>Куда и откуда</h1>
                    <h2 className='text-zinc-400 text-xl font-light mt-4'>TestTestTest</h2>
                    <p className='font-medium mt-1'>ValueValueValueValue</p>

                    <h2 className='text-zinc-400 text-xl font-light mt-4'>Test</h2>
                    <p className='font-medium mt-1'>Value</p>

                    <h2 className='text-zinc-400 text-xl font-light mt-4'>TestTest</h2>
                    <p className='font-medium mt-1'>ValueValueValue</p>

                    <h2 className='text-zinc-400 text-xl font-light mt-4'>Test</h2>
                    <p className='font-medium mt-1'>ValueValueValueValue</p>

                    <h2 className='text-zinc-400 text-xl font-light mt-4'>Test</h2>
                    <p className='font-medium mt-1'>Value</p>
                </div>
            </div>
            <Button className='mt-8 w-full'>Закрыть</Button>
        </Modal>
    );
};