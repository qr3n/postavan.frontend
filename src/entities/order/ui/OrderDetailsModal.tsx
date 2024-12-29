import { Modal }  from "@shared/ui/modal";

export const OrderDetailsModal = () => {
    return (
        <Modal title='Заказ #2' description='Короб' trigger={<div className='absolute top-0 left-0 w-full h-full'/>}>
            <div className='h-[300px]'>

            </div>
        </Modal>
    );
};