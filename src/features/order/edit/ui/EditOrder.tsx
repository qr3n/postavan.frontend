import { Button } from "@shared/shadcn/components/button";
import { IOrder } from "@entities/order";
import { Modal } from "@shared/ui/modal";
import { MdEdit } from "react-icons/md";

interface IProps {
    order: IOrder
}

export const EditOrder = (props: IProps) => {
    return (
        <Modal title={'Редактировать заказ'} description={'тест'} trigger={(
            <Button size='icon' className='bg-zinc-700 hover:bg-zinc-700/60'>
                <MdEdit/>
            </Button>
        )}>
            <div></div>
        </Modal>
    )
}