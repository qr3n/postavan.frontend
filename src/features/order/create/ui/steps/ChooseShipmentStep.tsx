import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import { courierImg, itemsImg } from "@features/order/create/ui/assets";
import { useSetAtom } from "jotai";
import { createOrderAtoms } from "@features/order/create";


export const ChooseShipmentStep = () => {
    const setShipmentType = useSetAtom(createOrderAtoms.shipmentType)

    return (
        <CreateOrderTemplates.Step title='Какой груз?'>
            <CreateOrderTemplates.Choice
                firstImg={courierImg}
                secondImg={itemsImg}
                onFirstClick={() => setShipmentType('marketplace')}
                onSecondClick={() => setShipmentType('anything')}
            />
        </CreateOrderTemplates.Step>
    )
}
