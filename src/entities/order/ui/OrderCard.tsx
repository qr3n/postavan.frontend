import { Button } from "@shared/shadcn/components/button";

export const OrderCard = () => {
    return (
        <div className='bg-zinc-900 flex justify-between rounded-2xl p-3 w-full'>
            <h1 className='text-xl font-medium'>Заказ #1</h1>
            <Button>Закрыть</Button>
        </div>
    );
};