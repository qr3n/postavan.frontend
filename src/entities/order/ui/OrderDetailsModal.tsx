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
            description='Короб'
            trigger={<div className='absolute top-0 left-0 w-full h-full'/>}
        >
            <div className='px-6 sm:px-0'>
                <div className='h-[calc(60dvh-100px)] overflow-y-auto mt-6'>
                    <h1 className='text-base font-medium text-white'>Основное</h1>
                    <ul className='text-sm list-disc pl-6 mt-2 space-y-1'>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Бета-функции версии 2.0</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Эксклюзивная рамка для аватара</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Праздничная атмосфера!</span>
                        </li>
                    </ul>

                    <h1 className='text-base font-medium text-white mt-8'>Размеры</h1>
                    <ul className='text-sm list-disc pl-6 mt-2 space-y-1'>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Бета-функции версии 2.0</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Эксклюзивная рамка для аватара</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Праздничная атмосфера!</span>
                        </li>
                    </ul>

                    <h1 className='text-base font-medium text-white mt-8'>Куда и откуда</h1>
                    <ul className='text-sm list-disc pl-6 mt-2 space-y-1'>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Бета-функции версии 2.0</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Эксклюзивная рамка для аватара</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Праздничная атмосфера!</span>
                        </li>
                    </ul>

                    <h1 className='text-base font-medium text-white mt-8'>Данные курьера</h1>
                    <ul className='text-sm list-disc pl-6 mt-2 space-y-1'>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Бета-функции версии 2.0</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Эксклюзивная рамка для аватара</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Праздничная атмосфера!</span>
                        </li>
                    </ul>

                    <h1 className='text-base font-medium text-white mt-8'>Дополнительно</h1>
                    <ul className='text-sm list-disc pl-6 mt-2 space-y-1'>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Бета-функции версии 2.0</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Эксклюзивная рамка для аватара</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Праздничная атмосфера!</span>
                        </li>
                    </ul>

                    <h1 className='text-base font-medium text-white mt-8'>Что нового?</h1>
                    <ul className='text-sm list-disc pl-6 mt-2 space-y-1'>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Бета-функции версии 2.0</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Эксклюзивная рамка для аватара</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Праздничная атмосфера!</span>
                        </li>
                    </ul>

                    <h1 className='text-base font-medium text-white mt-8'>Что нового?</h1>
                    <ul className='text-sm list-disc pl-6 mt-2 space-y-1'>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Бета-функции версии 2.0</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Эксклюзивная рамка для аватара</span>
                        </li>
                        <li className='text-blue-500'>
                            <span className='text-[#aaa]'>Праздничная атмосфера!</span>
                        </li>
                    </ul>
                </div>
                <Button className='mt-8 w-full'>Закрыть</Button>
                <Button className='mt-4 w-full' variant='outline'>Отменить</Button>
            </div>
        </Modal>
    );
};