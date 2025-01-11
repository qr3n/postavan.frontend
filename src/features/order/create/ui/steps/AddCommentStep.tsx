import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import { Textarea } from "@shared/shadcn/components/textarea";

export const AddCommentStep = () => {
    return (
        <CreateOrderTemplates.Step title={'Пожелания?'} description='Пожалуйста, укажите суть задачи, детали и особенности заказа'>
            <Textarea
                className='max-w-[600px] px-4 resize-none max-h-64 h-full '
                placeholder='Я бы хотел(-а), чтобы с товаром обращались аккуратнее'
            />
        </CreateOrderTemplates.Step>
    )
}