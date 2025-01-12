import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import { useAtomValue } from "jotai";
import { createOrderAtoms } from "@features/order/create";
import { boxImg, paletteImg } from "@features/order/create/ui/assets";
import Image from "next/image";
import { Button } from "@shared/shadcn/components/button";
import { Modal } from "@shared/ui/modal";
import { Input } from "@shared/shadcn/components/input";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { VirtualSelect } from "@shared/ui/virtualized-select/ui/VirtualizedSelect";
import { AiFillEdit } from "react-icons/ai";
import { useMemo } from "react";

export const SetDimensionsStep = () => {
    const packingType = useAtomValue(createOrderAtoms.packingType)
    const variants = useMemo(() => [...Array(100).keys()].map(e => (e + 1).toString()), [])

    return (
        <CreateOrderTemplates.Step title={'Какие габариты?'}>
            <div vaul-drawer-wrapper="" className='max-w-md flex gap-16 w-full items-center justify-center'>
                <div className='w-full flex justify-center flex-col items-center'>
                    <div className='relative w-full justify-center items-center flex flex-col'>
                        <div className='flex items-end justify-center gap-8'>
                            <Image
                                priority
                                className='w-48 md:w-52 lg:w-64'
                                placeholder={'blur'}
                                draggable={false}
                                src={packingType === 'box' ? boxImg : paletteImg}
                                alt={'firstChoice'}
                                width={0} height={0}
                            />

                            <VirtualSelect options={variants} top={110} trigger={(
                                <div className='text-center mb-12 group'>
                                    <h1 className='text-zinc-500'>Кол. мест</h1>
                                    <div className='flex mt-1  items-center cursor-pointer justify-center gap-3'>
                                        <h1 className='font-semibold text-4xl lg:text-5xl xl:text-6xl'>
                                            <span className='text-3xl lg:text-4xl xl:text-5xl mr-0.5 text-zinc-400'>x</span>1
                                        </h1>
                                        <div
                                            className='p-1 w-max group-hover:bg-zinc-800 group-hover:border-zinc-700 bg-zinc-900 rounded-2xl border border-zinc-800 '>
                                            <MdOutlineKeyboardArrowDown className='text-white w-8 h-8'/>
                                        </div>
                                    </div>
                                </div>
                            )}/>
                        </div>
                        <div className='flex mt-6 gap-3 w-full mb-6'>
                            <div className='text-center bg-zinc-900 rounded-2xl border border-zinc-800 p-3 w-full'>
                                <h1 className='text-zinc-500 text-sm sm:text-base'>Длина</h1>
                                <p className='font-medium text-lg sm:text-xl'>100 <span className='text-zinc-400'>см</span></p>
                            </div>

                            <div className='text-center bg-zinc-900 rounded-2xl border border-zinc-800 p-3 w-full'>
                                <h1 className='text-zinc-500 text-sm sm:text-base'>Ширина</h1>
                                <p className='font-medium text-lg sm:text-xl'>100 <span className='text-zinc-400'>см</span></p>
                            </div>

                            <div className='text-center bg-zinc-900 rounded-2xl border border-zinc-800 p-3 w-full'>
                                <h1 className='text-zinc-500 text-sm sm:text-base'>Высота</h1>
                                <p className='font-medium text-lg sm:text-xl'>100 <span className='text-zinc-400'>см</span></p>
                            </div>
                        </div>
                    </div>

                    <Modal trigger={(
                        <Button variant='outline' className='w-full'>
                        <span className='p-0.5 rounded-full bg-blue-500'><AiFillEdit className='w-1 h-1'/></span> Изменить размер
                        </Button>
                    )} title={'Изменить габариты'} description={'Пожалуйста, вводите точные значения'}>
                        <div className='px-4 sm:px-0 sm:mt-8'>
                            <Input label={'Длина'} defaultValue={100}/>
                            <Input label={'Ширина'} className='mt-3' defaultValue={100}/>
                            <Input label={'Высота'} className='mt-3' defaultValue={100}/>

                            <Button className='w-full mt-12'>Сохранить</Button>
                            <Button className='w-full mt-4' variant='outline'>Отмена</Button>
                        </div>
                    </Modal>
                </div>
            </div>
        </CreateOrderTemplates.Step>
    )
}