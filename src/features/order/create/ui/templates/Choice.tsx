'use client';

import { useCallback } from "react";
import { cn } from "@shared/shadcn/lib/utils";
import Image from "next/image";
import { bg } from "@features/order/create/ui/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { AnimatedCheck } from "@shared/ui/animated-check";

interface IVariantProps {
    isChecked: boolean,
    onClick: () => unknown,
    imgSrc: StaticImport,
    text: string,
    description: string,
}

const Variant = (props: IVariantProps) => {
    return (
        <div onMouseDown={props.onClick}
             className={cn('cursor-pointer flex-col p-3 px-12 pb-4 lg:pb-8 rounded-[40px] border-2 border-transparent overflow-hidden relative flex items-center justify-center', props.isChecked ? 'bg-blue-500/10 border-blue-500' : '')}
        >
            {props.isChecked &&
                (
                    <>
                        <Image priority fetchPriority={'high'} placeholder={'blur'} draggable={false} src={bg}
                               className='-z-50 absolute left-0 top-0 w-full h-full object-cover'
                               alt={'firstChoice'} width={400} height={400}/>
                        <div
                            className='-z-50 absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black to-transparent'/>
                    </>
                )
            }
            <div className='flex items-center justify-center flex-col'>
                <Image priority className='w-24 sm:w-40 md:w-48 lg:w-56' placeholder={'blur'} draggable={false} src={props.imgSrc} alt={'firstChoice'} width={224} height={224}/>
                <h1 className='font-medium text-lg sm:text-2xl mt-3 sm:mt-4 md:mt-6 xl:mt-8'>{props.text}</h1>
                <p className='text-zinc-400 text-xs sm:text-lg'>{props.description}</p>
            </div>
            <div className='w-7 h-7 sm:mt-4 absolute right-8 top-1/2 sm:top-auto sm:right-auto -translate-y-1/2 sm:translate-y-0 sm:relative'>
                {props.isChecked && <AnimatedCheck/>}
            </div>
        </div>
    )
}

interface IProps {
    firstSelected: boolean,
    secondSelected: boolean,
    firstImg: StaticImport,
    secondImg: StaticImport,
    onFirstClick: () => unknown,
    onSecondClick: () => unknown,
    firstText: string,
    secondText: string,
    firstDescription: string,
    secondDescription: string,
}

export const Choice = (props: IProps) => {
    const handleFirstClick = useCallback(() => {
        props.onFirstClick()
    }, [props])

    const handleSecondClick = useCallback(() => {
        props.onSecondClick()
    }, [props])

    return (
        <div className='flex w-full sm:w-auto flex-col sm:flex-row gap-8'>
            <Variant text={props.firstText} description={props.firstDescription} isChecked={props.firstSelected} onClick={handleFirstClick} imgSrc={props.firstImg}/>
            <Variant text={props.secondText} description={props.secondDescription} isChecked={props.secondSelected} onClick={handleSecondClick} imgSrc={props.secondImg}/>
        </div>
    );
};