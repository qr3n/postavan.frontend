import { Modal }  from "@shared/ui/modal";
import { ImageLoader } from "@shared/ui/image-loader";
import { yandexIcon } from "@shared/assets";
import { Button } from "@shared/shadcn/components/button";
import { ScrollArea } from "@shared/shadcn/components/scroll-area";
import { IOrder } from "@entities/order";
import { userAliases } from "@entities/order/ui/userAliases";

interface IProps {
    order: IOrder
}

interface ISectionData {
    label: string,
    value: string,
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
            <div className='mt-4'>
                {props.data.map(data => (
                    <div key={data.label}>
                        <h1 className='text-zinc-400 mt-4 text-xl font-light'>{data.label}</h1>
                        <p className='font-medium mt-2'>{data.value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const OrderDetailsModal = ({order}: IProps) => {
    return (
        <Modal
            title={<div className='flex h-full rounded-2xl overflow-hidden w-full gap-2 relative'>
                <ImageLoader
                    priority
                    src={yandexIcon}
                    alt={'christmasTree'}
                    width={24}
                    height={24}
                    className='rounded-lg w-[24px] h-[24px]'
                />
                Заказ #1
            </div>}
            description=''
            trigger={<div className='cursor-pointer absolute top-0 left-0 w-full h-full'/>}
            dialogStyle={'max-w-[500px]'}
        >
            <div className='px-6 sm:px-0'>
                <ScrollArea className='h-[calc(60dvh-100px)] mt-6'>
                    <Section
                        title={'Основное'}
                        data={[
                            {label: 'Упаковка', value: userAliases.packingType[order.packingType]},
                            {label: 'Цена', value: `${order.cost}руб`}
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
                            {label: 'Откуда забрать', value: `${order.pickupAddresses[0]}`},
                            {label: 'Куда доставить', value: `${order.deliveryAddresses[0]}`},
                            {label: 'Когда забрать', value: `${order.packageHeight}`},
                            {label: 'Когда доставить', value: `${order.packageHeight}`}
                        ]}
                    />

                </ScrollArea>
                <Button className='mt-8 w-full'>Закрыть</Button>
                <Button className='mt-4 w-full' variant='outline'>Выйти</Button>
            </div>
        </Modal>
    );
};