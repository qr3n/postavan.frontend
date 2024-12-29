import { Modal } from "@shared/ui/modal";
import { Button } from "@shared/shadcn/components/button";

export const Chat = () => {
    return (
        <Modal title='Поддержка' description='Вы подключены' trigger={<Button></Button>}>
            <div className='h-[300px]'>

            </div>
        </Modal>
    )
}