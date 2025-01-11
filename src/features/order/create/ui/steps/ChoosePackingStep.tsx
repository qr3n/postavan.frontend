import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import { boxImg, paletteImg } from "@features/order/create/ui/assets";
import { useSetAtom } from "jotai";
import { createOrderAtoms } from "@features/order/create";

export const ChoosePackingStep = () => {
    const setPackingType = useSetAtom(createOrderAtoms.packingType)

    return (
        <CreateOrderTemplates.Step title='Какой груз?'>
            <CreateOrderTemplates.Choice
                firstImg={boxImg}
                secondImg={paletteImg}
                onFirstClick={() => setPackingType('box')}
                onSecondClick={() => setPackingType('palette')}
            />
        </CreateOrderTemplates.Step>
    )
}