import { Button } from "@shared/shadcn/components/button";
import { StarIcon } from "lucide-react";
import { Modal } from "@shared/ui/modal";
import { Rating } from 'react-simple-star-rating'
import { Textarea } from "@shared/shadcn/components/textarea";

export const RateOrder = () => {
    return (
        <Modal
            trigger={(
                <Button size='icon' variant='ghost' className='bg-yellow-400/30'>
                    <StarIcon className='text-yellow-400'/>
                </Button>
            )}
            title={'Оценить заказ'}
            description={'Комментарий необязателен'}
        >
            <div className='px-4 sm:px-0'>
                <div className='flex flex-col items-center justify-center pb-8 pt-4 sm:pt-8'>
                    <Rating initialValue={4}/>
                    <Textarea placeholder='Все было хорошо, но нужно доработать...' className='mt-4 resize-none text-sm h-[100px]'/>
                </div>

                <Button className='w-full'>Отправить</Button>
            </div>
        </Modal>
    )
}