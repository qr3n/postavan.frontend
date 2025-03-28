'use client';

import { Button } from "@shared/shadcn/components/button";

import React from 'react';
import Image from "next/image";
import { boxImg } from "@features/order/create/ui/assets";
import icon from './favicon.ico'
import car from './car4.png'
import earth from './earth2.png'
import { Spotlight } from "@app/WavyBg";

import { FaQuestionCircle } from "react-icons/fa";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { createOrderAtoms } from "@features/order/create";


export const NewPage = () => {
    const setSplit = useSetAtom(createOrderAtoms.needSplit)

    return (
        <div className='items-center justify-center flex-col gap-12 md:gap-2 lg:flex-row w-full h-full pb-[12dvh] p-4 flex -z-50'>

            <div className='absolute top-0 left-0 w-screen h-screen -z-50 dotted3 bg-[#111]'/>
            <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b -z-10 from-black/50 to-transparent'/>

            <div className='flex flex-col-reverse lg:flex-row gap-6 lg:py-32 lg:pl-[5dvw] lg:pr-[10dvw] w-full min-w-[50%] h-full z-50'>
                <div className='flex flex-col gap-6 w-full'>
                    <div
                        className='hidden lg:flex h-full hover:scale-[98%] cursor-pointer transition-all   w-full overflow-hidden  items-center justify-center  flex-wrap gap-x-4 relative bg-[#0bb10b] dotted rounded-3xl'>
                        <h1 className='text-[clamp(32px,calc(3vw+3vh),100px)] my-font'>СКИДКА</h1>
                    </div>
                    <Link href={'/order/create?split=true'} className='w-full'>
                        <Button
                            onClick={() => setSplit(true)}
                            className='w-full bg-green-300 my-font hover:bg-green-400 md:min-h-[70px] text-green-800 text-2xl sm:text-4xl font-bold'>
                            ПОПРОБОВАТь
                        </Button>
                    </Link>
                    <div
                        className='h-full hover:scale-[98%] py-4 cursor-pointer transition-all flex  relative flex-col items-center justify-center w-full bg-green-600 rounded-3xl  '>
                        <h1 className='text-[clamp(32px,calc(2vw+2vh),100px)] leading-none z-50 my-font'>НА ПОПУТКЕ</h1>
                        <h1 className='px-4 py-1 mt-2 rounded-full  bg-green-800 text-blue-100 text-[clamp(12px,calc(0.6vw+0.6vh),28px)] inter-font'>Разделяй с
                            другими</h1>
                    </div>
                </div>

                <div
                    className='flex h-full flex-col relative md:w-[600px] gap-6'>
                    <div
                        className='
                        flex
                        h-full
                        hover:scale-[98%]
                        cursor-pointer
                        transition-all
                        overflow-hidden
                        flex-col
                        relative
                        bg-gradient-to-b
                        from-green-900
                        to-[#0bb10b]
                         via-[#74B10BFF]
                         p-4 w-full

                         rounded-3xl
                         '>
                        <div className='rounded-2xl bg-gradient bg-green-600  p-3'>
                            <div className='flex gap-2 items-center'>
                                <FaQuestionCircle className='w-7 h-7 text-green-100 fill-green-100'/>

                                <h1 className='text-[clamp(7px,calc(1.5vw+1.5vh),100px)] md:text-nowrap my-font text-green-100'>
                                    Как это работает?
                                </h1>
                            </div>
                            <h1 className='max-w-[80%] text-green-200 mt-2 text-pretty text-[clamp(7px,calc(1vw+1vh),100px)] md:text-[clamp(7px,calc(0.5vw+0.5vh),100px)] inter-font'>
                                Если ваш груз нужно доставить в город, в который уже проходит другой маршрут, вы
                                сэкономите!
                            </h1>
                        </div>
                        <Image src={car} alt={'box'}
                               className='z-50 -right-14 -bottom-16 w-[calc(12vw+12vh)] absolute left-0 h-[calc(12vw+12vh)] object-cover'
                               width={900} height={900}/>
                    </div>

                </div>
            </div>

            <div className='flex  flex-col gap-6 lg:py-32 lg:pr-[5dvw] pl-[3dvw] lg:pl-[10dvw] w-full min-w-[50%] h-full z-50'>
                <div className='w-full h-full  gap-6  flex'>
                    <div className='flex flex-col w-full gap-6 '>
                        <div
                            className='
                            hover:scale-[98%]
                            cursor-pointer
                            flex
                            items-center
                            justify-center
                            transition-all
                            w-full h-full
                            bg-gradient-to-br
                            from-rose-300
                            via-yellow-300
                            to-blue-500
                            rounded-3xl
                            z-50'>
                            <Image src={earth} alt={'box'}
                                   className='w-[clamp(32px,calc(10vw+10vh),250px)] h-[clamp(32px,calc(10vw+10vh),250px)] xl:w-[clamp(32px,calc(12.5vw+12.5vh),250px)] xl:h-[clamp(32px,calc(12.5vw+12.5vh),250px)] z-[500]  object-cover'
                                   width={600} height={600}/>
                        </div>
                        <div
                            className='hover:scale-[98%] cursor-pointer transition-all w-full h-full min-h-[50%] bg-blue-400 rounded-3xl flex-col flex items-center justify-center relative overflow-hidden'>
                            <h1 className='text-[clamp(32px,calc(3.4vw+3.4vh),100px)] leading-none z-50 my-font'>23k</h1>
                            <Image src={boxImg} alt={'box'}
                                   className='absolute z-50 w-[clamp(32px,calc(7.5vw+7.5vh),250px)] h-[clamp(32px,calc(7.5vw+7.5vh),250px)] -right-[calc(1dvw+1dvh)] rotate-[-12deg] object-contain -bottom-[calc(2.5dvw+2.5dvh)]'
                                   width={250} height={250}/>
                        </div>
                    </div>
                    <div className=' cursor-pointer  flex gap-6 flex-col h-full w-full'>
                        <div
                            className='hover:scale-[98%] transition-all z-50 flex w-full h-full flex-col items-center justify-center overflow-hidden bg-blue-500 rounded-3xl dotted2 relative'>
                            <div
                                className='w-full h-full bg-gradient-to-b from-blue-500 to-transparent absolute rounded-t-3xl left-0 right-0'/>
                            <h1 className='text-[clamp(32px,calc(3vw+3vh),100px)] text-white leading-none z-50 pt-8 my-font'>ПРОФИ</h1>
                            <h1 className='px-4 py-1 rounded-full inter-font  font-semibold bg-blue-800/70 text-white z-50 text-[clamp(12px,calc(0.6vw+0.6vh),28px)]'>Индивидуальная
                                доставка</h1>
                        </div>

                        <Link href={'/order/create?split=false'} className='w-full'>
                            <Button
                                onClick={() => setSplit(false)}
                                className='text-2xl bg-blue-300 my-font hover:bg-blue-400 w-full md:h-[70px] text-blue-800 sm:text-4xl font-bold'>
                                Выбрать профи
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className='hidden xl:flex absolute top-0 flex-col   rounded-full w-full h-full  items-center justify-center'>
                <div className='bg-blue-200/30   animate-pulse-scale  backdrop-blur rounded-full p-3'>
                    <div className='bg-blue-400/60     backdrop-blur rounded-full p-2'>
                        <div className='bg-blue-500 p-2 rounded-full'>
                            <Image src={icon} alt={'icon'} className='w-[clamp(16px,calc(4vw+4vh),250px)] h-[clamp(16px,calc(4vw+4vh),250px)]' width={120} height={120}/>
                        </div>
                    </div>
                </div>
            </div>
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="#0bb10b"
            />
        </div>
    )
}