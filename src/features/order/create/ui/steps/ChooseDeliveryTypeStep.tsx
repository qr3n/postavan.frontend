import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import { courierImg, itemsImg } from "@features/order/create/ui/assets";
import { useAtom } from "jotai";
import { createOrderAtoms } from "@features/order/create";


export const ChooseDeliveryTypeStep = () => {
    const [shipmentType, setShipmentType] = useAtom(createOrderAtoms.shipmentType)

    return (
        <CreateOrderTemplates.Step title='Попутный груз'>
            <CreateOrderTemplates.Choice
                firstText={'Попутный груз'}
                firstDescription={'Короб до 25кг'}
                secondText={'Отправить одному'}
                secondDescription={'Кроме запрещенных'}
                firstSelected={shipmentType === 'marketplace'}
                secondSelected={shipmentType === 'anything'}
                firstImg={courierImg}
                secondImg={itemsImg}
                onFirstClick={() => setShipmentType('marketplace')}
                onSecondClick={() => setShipmentType('anything')}
            />
        </CreateOrderTemplates.Step>
    )
}
