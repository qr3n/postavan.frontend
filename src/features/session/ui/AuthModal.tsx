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
                    <TabsList className='mt-8'>
                        <TabsTrigger value={'phone'}>Телефон</TabsTrigger>
                        <TabsTrigger value={'email'}>Почта</TabsTrigger>
                    </TabsList>

                    <TabsContent value={'phone'}>
                        <div className='flex mt-6 gap-2'>
                            <div
                                className='bg-zinc-800 rounded-xl px-4 flex gap-2 text-sm items-center justify-center text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' id="flag-icon-css-ru"
                                     viewBox="0 0 640 480">
                                    <g fillRule="evenodd" strokeWidth="1pt">
                                        <path fill="#fff" d="M0 0h640v480H0z"/>
                                        <path fill="#0039a6" d="M0 160h640v320H0z"/>
                                        <path fill="#d52b1e" d="M0 320h640v160H0z"/>
                                    </g>
                                </svg>
                                +7
                            </div>
                            <Input type='number' placeholder='9117629553'/>
                        </div>
                    </TabsContent>

                    <TabsContent value={'email'}>
                        <div className='flex items-start mt-6 gap-2'>
                            <Input type='email' label={'Почта'}/>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Modal>
    )
}