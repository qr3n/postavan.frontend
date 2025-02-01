import { Modal } from "@shared/ui/modal";
import { Button } from "@shared/shadcn/components/button";
import { StarIcon } from "lucide-react";
import { Rating } from "react-simple-star-rating";
import { Textarea } from "@shared/shadcn/components/textarea";
import { IOrder } from "@entities/order";
import { useMutation } from "@tanstack/react-query";
import { feedbackService } from "@shared/api/services/feedback/service";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

interface IProps {
    order: IOrder
}

interface IFormData {
    stars: number,
    comment: string,
}

export const LeaveFeedback = (props: IProps) => {
    const [open, setOpen] = useState(false)
    const { register, setValue, handleSubmit } = useForm<IFormData>({ defaultValues: { stars: 4 } })
    const { mutateAsync } = useMutation({
        mutationFn: feedbackService.leaveFeedback
    })

    const onSubmit = handleSubmit((data) => {
        toast.promise(mutateAsync({
            ...data,
            order_id: props.order.id
        }).then(() => setOpen(false)),
            {
                success: "Заказ создан.",
                error: "Что-то пошло не так...",
                loading: "Создаем заказ...",
            })
    })

    return (
        <Modal
            open={open}
            onOpenChange={setOpen}
            trigger={(
                <Button size='icon' variant='ghost' className='bg-yellow-400/30'>
                    <StarIcon className='text-yellow-400'/>
                </Button>
            )}
            title={'Оценить заказ'}
            description={'Комментарий необязателен'}
        >
            <form onSubmit={onSubmit} className='px-4 sm:px-0'>
                <div className='flex flex-col items-center justify-center pb-8 pt-4 sm:pt-8'>
                    <Rating initialValue={4} onClick={(value) => setValue('stars', value)}/>
                    <Textarea
                        {...register('comment')}
                        placeholder='Все было хорошо, но нужно доработать...'
                        className='mt-4 resize-none text-sm h-[100px]'
                    />
                </div>

                <Button onClick={onSubmit} className='w-full'>Отправить</Button>
            </form>
        </Modal>
    )
}