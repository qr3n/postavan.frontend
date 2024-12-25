import { Modal } from "@shared/ui/modal/ui/Modal";
import { Button } from "@shared/shadcn/components/button";
import { Input }                                    from "@shared/shadcn/components/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/shadcn/components/tabs";
import { ImageLoader } from "@shared/ui/image-loader";
import { lockImg } from "./assets";

export const AuthModal = () => {
    return (
        <Modal
            trigger={<Button>Войти</Button>}
            title={<>
                <ImageLoader priority src={lockImg} alt={'christmasTree'} width={24} height={24} className='w-[24px] h-[24px'/>
                Авторизация
            </>}
            description={'Вам придет пятизначный код'}
            footer={(
                <>
                    <Button className='w-full mt-8'>Отправить код</Button>
                    <Button variant="outline" className='w-full mt-1 md:mt-3'>Отмена</Button>
                </>
            )}
        >
            <div className='px-4 md:px-0'>
                <Tabs defaultValue={'phone'}>
                    <TabsList  className='mt-8'>
                        <TabsTrigger value={'phone'}>Телефон</TabsTrigger>
                        <TabsTrigger value={'email'}>Почта</TabsTrigger>
                    </TabsList>

                    <TabsContent  value={'phone'}>
                        <div></div>
                        <Input label={'Телефон'} className='mt-4'/>
                    </TabsContent>

                    <TabsContent value={'email'}>
                        <Input label={'Почта'} className='mt-4'/>
                    </TabsContent>
                </Tabs>
            </div>
        </Modal>
    )
}