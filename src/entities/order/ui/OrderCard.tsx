import Image                             from 'next/image'
import { yandexIcon } from "@shared/assets";
import { ReactElement } from "react";

interface IProps {
    actions?: ReactElement
}

export const OrderCard = (props: IProps) => {
    return (
        <>
            <div className='flex items-center w-full gap-5'>
                <Image
                    src={yandexIcon}
                    placeholder='blur'
                    alt={'icon'}
                    width={48}
                    height={48}
                    className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl object-cover'
                />
                <div>
                    <h1 className='text-lg font-medium'>Заказ #1</h1>
                    <p className='text-zinc-400 text-sm'>Test test test</p>
                </div>
            </div>
            <div>
                {props.actions}
            </div>
        </>
    );
};