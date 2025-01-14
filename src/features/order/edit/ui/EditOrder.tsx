import { Button } from "@shared/shadcn/components/button";
import { IOrder } from "@entities/order";
import { Edit2Icon } from "lucide-react";
import { Modal } from "@shared/ui/modal";

interface IProps {
    order: IOrder
}

export const EditOrder = (props: IProps) => {
    return (
        <Modal title={'Редактировать заказ'} description={'тест'} trigger={(
            <Button size='icon' className='bg-zinc-700 hover:bg-zinc-700/60'>
                <Edit2Icon/>
            </Button>
        )}>
            <div></div>
        </Modal>
    )
}