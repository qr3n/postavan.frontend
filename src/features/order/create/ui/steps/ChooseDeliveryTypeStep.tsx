import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import {  itemsImg } from "@features/order/create/ui/assets";
import { useAtom } from "jotai";
import { createOrderAtoms } from "@features/order/create";
import car from '@app/car.png'
import car2 from '@app/car7.webp'

export const ChooseDeliveryTypeStep = () => {
    const [needSplit, setNeedSplit] = useAtom(createOrderAtoms.needSplit)

    return (
        <CreateOrderTemplates.Step title='Тип заказа'>
            <CreateOrderTemplates.Choice
                firstText={'На попутке'}
                firstDescription={'Скидка до 300%'}
                secondText={'Персональный'}
                secondDescription={'Индивидуальная доставка'}
                firstSelected={!!needSplit}
                secondSelected={!needSplit}
                firstImg={car}
                secondImg={car2}
                onFirstClick={() => setNeedSplit(true)}
                onSecondClick={() => setNeedSplit(false)}
            />
        </CreateOrderTemplates.Step>
    )
}
