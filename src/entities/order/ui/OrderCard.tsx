import Image                             from 'next/image'
import { ReactElement } from "react";
import { IOrder } from "@entities/order";
import { marketplacesMap } from "@entities/order/ui/images";

interface IProps {
    actions?: ReactElement,
    order: IOrder
}

export const OrderCard = (props: IProps) => {
    return (
        <>
            <div className='flex justify-start items-center w-full gap-5'>
                <Image
                    src={marketplacesMap[props.order.marketplace]}
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
            <div className='flex gap-2 items-center'>
                {props.actions}
            </div>
        </>
    );
};