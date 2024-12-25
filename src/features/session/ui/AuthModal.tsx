'use client';

import { useState }                                 from "react";
import { Modal }                                    from "@shared/ui/modal/ui/Modal";
import { Button }                                   from "@shared/shadcn/components/button";
import { Input }                                    from "@shared/shadcn/components/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/shadcn/components/tabs";
import { ImageLoader }                              from "@shared/ui/image-loader";
import { lockImg }                                  from "./assets";
import { motion, AnimatePresence }                  from "framer-motion";
import { InputOTP, InputOTPGroup, InputOTPSlot }    from "@shared/shadcn/components/input-otp";

export const AuthModal = () => {
    const [step, setStep] = useState(1);
    const handleNextStep = () => setStep(2);
    const handlePrevStep = () => setStep(1);

    return (
        <Modal
            trigger={<Button>Войти</Button>}
            title={<>
                <ImageLoader priority src={lockImg} alt={'christmasTree'} width={24} height={24} className='w-[24px] h-[24px'/>
                {step === 1 ? 'Авторизация' : 'Добро пожаловать!'}
            </>}
            description={step === 1 ? 'Вам придет пятизначный код' : 'Введите полученный код'}
            footer={(
                <>
                    <Button className='w-full mt-8' onClick={handleNextStep}>{step === 1 ? 'Отправить код' : 'Подтвердить'}</Button>
                    <Button variant="outline" className='w-full mt-1 md:mt-3' onClick={handlePrevStep}>
                        {step === 1 ? 'Отмена' : 'Назад'}
                    </Button>
                </>
            )}
        >
            <div className='px-4 md:px-0 h-[140px] overflow-hidden'>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Tabs defaultValue={'phone'}>
                                <TabsList className='mt-5'>
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
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step-2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.15 }}
                            className='flex items-center justify-center flex-col h-full'
                        >
                            <InputOTP maxLength={5}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0}/>
                                    <InputOTPSlot index={1}/>
                                    <InputOTPSlot index={2}/>
                                    <InputOTPSlot index={3}/>
                                    <InputOTPSlot index={4}/>
                                </InputOTPGroup>
                            </InputOTP>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Modal>
    );
};
