import { Modal } from "@shared/ui/modal/ui/Modal";
import { Button } from "@shared/shadcn/components/button";
import { Input } from "@shared/shadcn/components/input";

export const Auth = () => {
    return (
        <Modal
            trigger={<Button>Войти</Button>}
            title={'Войти'}
            description={'Вам придет код авторизации'}
            footer={(
                <>
                    <Button className='w-full mt-8'>Войти</Button>
                    <Button variant="outline" className='w-full mt-1 md:mt-3'>Отмена</Button>
                </>
            )}
        >
            <div className='px-4 md:px-0'>
                <Input label={'Почта'} className='mt-4'/>
            </div>
        </Modal>
    )
}