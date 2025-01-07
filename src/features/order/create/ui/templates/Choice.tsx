'use client';

import { useCallback, useState } from "react";
import { cn } from "@shared/shadcn/lib/utils";
import Image from "next/image";
import { bg } from "@features/order/create/ui/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { AnimatedCheck } from "@shared/ui/animated-check";

interface IVariantProps {
    isChecked: boolean,
    onClick: () => unknown,
    imgSrc: StaticImport
}

const Variant = (props: IVariantProps) => {
    return (
        <div onMouseDown={props.onClick}
             className={cn('cursor-pointer p-6 px-12 pb-8 rounded-[40px] border-2 border-transparent overflow-hidden relative flex flex-col items-center justify-center', props.isChecked ? 'bg-blue-500/10 border-blue-500' : '')}
        >
            {props.isChecked &&
                (
                    <>
                        <Image placeholder={'blur'} draggable={false} src={bg}
                               className='-z-50 absolute left-0 top-0 w-full h-full object-cover'
                               alt={'firstChoice'} width={400} height={400}/>
                        <div
                            className='-z-50 absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black to-transparent'/>
                    </>
                )
            }
            <Image className='w-56' placeholder={'blur'} draggable={false} src={props.imgSrc} alt={'firstChoice'} width={0} height={0}/>
            <h1 className='font-medium text-2xl mt-8'>Для маркетплейса</h1>
            <p className='text-zinc-400 text-lg'>Короб до 12 кг</p>
            <div className='w-7 h-7 mt-4'>
                {props.isChecked && <AnimatedCheck/>}
            </div>
        </div>
    )
}

interface IProps {
    firstImg: StaticImport,
    secondImg: StaticImport,
    onFirstClick: () => unknown,
    onSecondClick: () => unknown,
}

export const Choice = (props: IProps) => {
    const [selected, setSelected] = useState(0)

    const handleFirstClick = useCallback(() => {
        setSelected(0)
        props.onFirstClick()
    }, [props])

    const handleSecondClick = useCallback(() => {
        setSelected(1)
        props.onSecondClick()
    }, [props])

    return (
        <div className='flex flex-col sm:flex-row gap-8'>
            <Variant isChecked={selected === 0} onClick={handleFirstClick} imgSrc={props.firstImg}/>
            <Variant isChecked={selected === 1} onClick={handleSecondClick} imgSrc={props.secondImg}/>
        </div>
    );
};