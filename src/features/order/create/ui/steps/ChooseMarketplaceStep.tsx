import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import { cn } from "@shared/shadcn/lib/utils";
import Image from "next/image";
import { bg } from "@features/order/create/ui/assets";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {  useState } from "react";
import { IOrder, MARKETPLACES } from "@entities/order";
import { marketplacesMap } from "@entities/order/ui/images";
import { motion } from 'framer-motion';

interface IVariantProps {
    isChecked: boolean,
    onClick: () => unknown,
    imgSrc: StaticImport,
    name: string
}

const Check = () => {
    return (
        <motion.div
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.3}}
            style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: '#1464e6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M5 12l5 5L20 7"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{pathLength: 0}}
                    animate={{pathLength: 1}}
                    transition={{duration: 0.3, delay: 0.23, ease: 'easeInOut'}}
                />
            </motion.svg>
        </motion.div>
    );
};

const Variant = (props: IVariantProps) => {
    return (
        <div onMouseDown={props.onClick}
             className={cn(' cursor-pointer w-full py-4 max-w-[400px] rounded-full border-2 border-transparent overflow-hidden relative flex items-center justify-between px-8', props.isChecked ? 'bg-blue-500/5 border-blue-500' : '')}
        >
            {props.isChecked &&
                (
                    <>
                        <Image placeholder={'blur'} draggable={false} src={bg}
                               className='-z-50 absolute left-0 top-0 w-full h-full object-cover'
                               alt={'firstChoice'} width={220} height={220}/>
                        <div
                            className='-z-50 absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black to-transparent'/>
                    </>
                )
            }
            <div className='flex items-center gap-5'>
                <Image placeholder={'blur'} draggable={false} src={props.imgSrc} className='rounded-2xl'
                       alt={'firstChoice'} width={48} height={48}/>
                <h1 className='font-medium text-xl font-mono'>{props.name}</h1>
            </div>
            <div className='w-7 h-7'>
                {props.isChecked && <Check/>}
            </div>
        </div>
    )
}


export const ChooseMarketplaceStep = () => {
    const [variant, setVariant] = useState<IOrder['marketplace']>('Яндекс маркет')

    return (
        <CreateOrderTemplates.Step>
            {MARKETPLACES.map(m => <Variant
                name={m}
                key={m}
                isChecked={variant === m}
                onClick={() => setVariant(m)} imgSrc={marketplacesMap[m]}
            />)}
        </CreateOrderTemplates.Step>
    )
}