import Image                             from 'next/image'
import { ReactElement } from "react";
import { IOrder } from "@entities/order";
import { marketplacesImagesMap } from "@entities/order/ui/images";

interface IProps {
    actions?: ReactElement,
    order: IOrder
}

function truncateString(str: string) {
    if (str.length > 25) {
        return str.slice(0, 25) + '...';
    }
    return str;
}

export const OrderCard = ({ order, ...props }: IProps) => {
    return (
        <>
            <div className='flex justify-start items-center w-full gap-5'>
                <Image
                    src={marketplacesImagesMap[order.marketplace]}
                    placeholder='blur'
                    alt={'icon'}
                    width={48}
                    height={48}
                    className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl object-cover'
                />
                <div>
                    <h1 className='font-medium'>{`${order.pickupDate.toISOString().split('T')[0]}`} <span
                        className='text-zinc-300'>с</span> {`${order.pickupTimeFrom}`} <span
                        className='text-zinc-300'>до</span> {`${order.pickupTimeTo}`}</h1>
                    <p className='text-zinc-400 rounded-full text-sm mt-1'>{truncateString(order.pickupAddresses[0].replace('г Москва, ', ''))}</p>
                    <p className='bg-blue-900 rounded-full px-3 py-1 mt-2 text-xs w-max'>{order.cost} руб</p>
                </div>
            </div>
            <div className='flex gap-3 items-center justify-end w-full mt-2 md:mt-0 '>
                {props.actions}
            </div>
        </>
    );
};