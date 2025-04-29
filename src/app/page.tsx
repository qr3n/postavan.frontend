'use client';

import Image from "next/image";
import { aliIcon, bgImg2, boxIcon, ozonIcon, wildberriesIcon, yandexIcon } from "@shared/assets";
import { useAtomValue } from "jotai/index";
import { createOrderAtoms } from "@features/order/create";
import { cn } from "@shared/shadcn/lib/utils";
import { bg } from "@features/order/create/ui/assets";
import { AnimatedCheck } from "@shared/ui/animated-check";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import car from '@app/car.png'
import car2 from '@app/car7.webp'
import { Button } from "@shared/shadcn/components/button";

interface IVariantProps {
    isChecked: boolean,
    imgSrc: StaticImport,
    text: string,
    description: string,
    variant: 'blue' | 'green'
}

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { sampleArcs } from "./data";

const World = dynamic(() => import("@shared/ui/globe/ui/Globe").then((m) => m.World), {
    ssr: false,
});

 function GlobeDemo() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    return (
        <div className="flex flex-row items-center justify-center -z-50  h-screen    relative w-full">
            <div className="max-w-7xl mx-auto w-full relative overflow-hidden  h-[100dvh] px-4">
                <div className="absolute w-full top-[35%] -ml-4 h-full -z-50">
                    <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
            </div>
        </div>
    );
}

const Variant = (props: IVariantProps) => {

    return (
        <div
            className={cn(
                'cursor-pointer  shadow-2xl z-50 hover:scale-105 flex-col w-[350px] p-3 px-6 pb-4 lg:pb-[clamp(0.5rem,2dvh,8rem)] rounded-[40px]  overflow-hidden relative flex items-center justify-center',
                props.variant === 'green' ? 'animate-float-green' : 'animate-float-blue'
            )}
        >
            <div className={cn('h-48 w-48  absolute   -z-10 blur-[6rem]', props.variant === 'green' ? 'bg-green-500 left-0' : 'bg-violet-500 right-0')}/>
            <div className={cn('h-24 w-24  absolute   -z-10 blur-[4rem]', props.variant === 'green' ? 'bg-yellow-400' : 'bg-blue-500 left-0')}/>
            {props.isChecked && (
                <>

                    <Image
                        priority
                        fetchPriority={'high'}
                        placeholder={'blur'}
                        draggable={false}
                        src={bg}
                        className="-z-50 absolute left-0 top-0 w-full rounded-[40px] h-full object-cover"
                        alt={'firstChoice'}
                        width={400}
                        height={400}
                    />
                    <div
                        className={cn("-z-50  bg-zinc-800/60  rounded-[40px] border-2 shadow-2xl   absolute left-0 top-0 w-full h-full object-cover", props.variant === 'green' ? 'border-green-500' : 'border-blue-600')}
                    />
                    <div className="-z-50 absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black to-transparent" />
                </>
            )}
            <div className="flex w-full items-center justify-center flex-col cursor-pointer hover:scale-105">
                <Image
                    loading="eager"
                    fetchPriority="high"
                    priority
                    className="w-24 sm:w-40 md:w-48 lg:w-56 max-h-[calc(100vh-480px)] object-contain"
                    placeholder="blur"
                    draggable={false}
                    src={props.imgSrc}
                    alt="firstChoice"
                    width={224}
                    height={224}
                />
                <div className='mb-2 mt-3 w-full flex items-center bg-black/50 backdrop-blur justify-center flex-col rounded-2xl pb-8 p-3'>
                    <h1
                        className="font-medium text-lg sm:text-2xl"
                        style={{
                            marginTop: 'clamp(0rem, 1vh, 3rem)', // Динамический отступ
                            fontSize: 'clamp(1rem, 2.2vh, 2.2rem)', // Динамический размер текста
                        }}
                    >
                        {props.text}
                    </h1>
                    <p
                        className="text-zinc-400"
                        style={{
                            fontSize: 'clamp(0.75rem, 1.5vh, 1rem)', // Динамический размер текста
                        }}
                    >
                        {props.description}
                    </p>

                    <Button className={cn('w-full mt-5 z-50', props.variant === 'blue' ? 'bg-blue-500' : 'bg-green-500')}>Сделать заказ</Button>
                </div>
            </div>

        </div>
    );
};

export default function Page() {
    return (
        <>
            <Image src={bgImg2} placeholder={'blur'} alt={'bg'} width={1920} height={1080} className={'object-cover -z-50 h-screen w-screen fixed top-0 left-0'}/>
            <div className='w-screen h-screen fixed top-0 left-0 bg-gradient-to-br from-black to-transparent -z-50'/>
            <GlobeDemo/>
            <div className='flex flex-col items-center justify-center w-screen h-screen fixed top-0 left-0 -z-50'>
                <div className='flex w-full sm:w-auto flex-col items-center justify-center sm:flex-row gap-24'>
                    <Variant variant={'green'} text={'На попутке'} description={'Скидка до 75%'} isChecked  imgSrc={car}/>
                    <Variant variant={'blue'} text={'Персональный'} description={'Индивидуальная доставка'} isChecked  imgSrc={car2}/>
                </div>

                <div className='flex sm:flex-col gap-4 absolute items-center justify-center sm:mb-24'>
                    <Image src={wildberriesIcon} alt={'wb'} width={128} height={128} className='w-16 h-16 rounded-2xl'/>
                    <Image src={yandexIcon} alt={'wb'} width={128} height={128} className='w-14 h-14 rounded-2xl'/>
                    <Image src={ozonIcon} alt={'wb'} width={128} height={128} className='w-12 h-12 rounded-2xl'/>
                    <Image src={aliIcon} alt={'wb'} width={128} height={128} className='w-10 h-10  rounded-2xl'/>
                </div>
            </div>

        </>
    )
}