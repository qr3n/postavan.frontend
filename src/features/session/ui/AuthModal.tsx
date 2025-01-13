'use client';

import { useState }                                 from "react";
import { Modal }                                    from "@shared/ui/modal/ui/Modal";
import { Button }                                   from "@shared/shadcn/components/button";
import { ImageLoader }                              from "@shared/ui/image-loader";
import { lockImg }                                  from "./assets";
import { AuthForm } from "@features/session/ui/AuthForm";

interface IProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const AuthModal = (props: IProps) => {
    const [step, setStep] = useState<1 | 2>(1);
    const handleNextStep = () => setStep(2);
    const handlePrevStep = () => setStep(1);

    return (
        <Modal
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
            {...props}
        >
            <div className='px-4 md:px-0 h-[140px] overflow-hidden'>
                <AuthForm step={step}/>
            </div>
        </Modal>
    );
};
