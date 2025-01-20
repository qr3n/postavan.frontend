import { Modal }  from "@shared/ui/modal";
import { Button } from "@shared/shadcn/components/button";
import { ScrollArea } from "@shared/shadcn/components/scroll-area";
import { IOrder } from "@entities/order";
import { userAliases } from "@entities/order/ui/userAliases";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { boxImg } from "@features/order/create/ui/assets";
import { marketplacesImagesMap } from "@entities/order/ui/images";
import { marketplacesColorsMap } from "@entities/order/ui/colors";
import Image from "next/image";
import { moneyForOrderModalImg } from "@shared/assets";

interface IProps {
    order: IOrder
}

interface ISectionData {
    label: string,
    value: string,
    img?: StaticImport,
    imgSize?: number,
    imgGap?: number
}

interface ISectionProps {
    title: string,
    data: ISectionData[]
}


const Section = (props: ISectionProps) => {
    return (
        <div className='mb-12'>
            <div className='flex items-center gap-2'>
                <h1 className='text-2xl font-semibold text-white'>{props.title}</h1>
            </div>
            <div className='mt-4 '>
                {props.data.map(data => (
                    <div key={data.label} className='mt-5'>
                        <h1 className='text-zinc-400 text-xl font-light'>{data.label}</h1>
                        {data.img ? (
                            <div className='flex items-center mt-2' style={{ gap: data.imgGap || 4 }}>
                                <Image
                                    priority
                                    src={data.img}
                                    alt={'img'}
                                    width={data.imgSize || 32}
                                    height={data.imgSize || 32}
                                    className='rounded-full'
                                />
                                <p className='font-medium'>{data.value}</p>
                            </div>
                        ) : (
                            <p className='font-medium mt-2'>{data.value}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export const OrderDetailsModal = ({order}: IProps) => {
    return (
        <Modal
            title={<div
                className='flex sm:items-center flex-col justify-center h-full overflow-hidden w-full pt-4 gap-2 relative'>
                <h1 className='sm:text-4xl'>Заказ #1</h1>
                <div
                    className={`w-max flex gap-2 items-center py-2 mt-1 px-3 rounded-full`}
                    style={{ backgroundColor: marketplacesColorsMap[order.marketplace] }}
                >
                    <Image
                        priority
                        src={marketplacesImagesMap[order.marketplace]}
                        alt={'christmasTree'}
                        width={22}
                        height={22}
                        className='rounded-full w-[15px] h-[15px] sm:w-[22px] sm:h-[22px]'
                    />
                    <p className='text-[12px] sm:text-[15px]'>{order.marketplace}</p>
                </div>

            </div>}
            description=''
            trigger={<div className='cursor-pointer absolute top-0 left-0 w-full h-full'/>}
            dialogStyle={'max-w-[500px]'}
        >
            <div className='px-6 sm:px-0'>
                <ScrollArea className='h-[calc(60dvh-100px)] mt-4 pr-16'>
                    <Section
                        title={'Основное'}
                        data={[
                            {label: 'Упаковка', value: userAliases.packingType[order.packingType], img: boxImg},
                            {label: 'Цена', value: `${order.cost}руб`, img: moneyForOrderModalImg}
                        ]}
                    />

                    <Section
                        title={'Размеры'}
                        data={[
                            {label: 'Длина', value: `${order.packageLength}`},
                            {label: 'Ширина', value: `${order.packageWidth}`},
                            {label: 'Высота', value: `${order.packageHeight}`}
                        ]}
                    />

                    <Section
                        title={'Куда и откуда'}
                        data={[
                            {label: 'Откуда забрать', value: `${order.pickupAddresses.join(', ')}`,},
                            {label: 'Куда доставить', value: `${order.deliveryAddresses.join(', ')}`},
                            {label: 'Когда забрать', value: `${order.pickupDate.toISOString().split('T')[0]} с ${order.pickupTimeFrom} до ${order.pickupTimeTo}`},
                            {label: 'Когда доставить', value: `${order.deliveryDate.toISOString().split('T')[0]} с ${order.deliveryTimeFrom} до ${order.deliveryTimeTo}`}
                        ]}
                    />

                    <Section
                        title={'Дополнительно'}
                        data={[
                            {label: 'Телефон отправителя', value: `${order.senderPhone}`,},
                            {label: 'Телефон получателя', value: `${order.recipientPhone}`},
                            {label: 'Комментарий', value: `${order.comment || 'Отсутствует'}`},
                        ]}
                    />

                </ScrollArea>
                <Button className='mt-8 w-full'>Закрыть</Button>
                <Button className='mt-4 w-full' variant='outline'>Выйти</Button>
            </div>
        </Modal>
    );
};