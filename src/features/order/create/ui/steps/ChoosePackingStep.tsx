import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import { boxImg, paletteImg } from "@features/order/create/ui/assets";

export const ChoosePackingStep = () => {
    return (
        <CreateOrderTemplates.Step title='Какой груз?'>
            <CreateOrderTemplates.Choice
                firstImg={boxImg}
                secondImg={paletteImg}
                onFirstClick={() => null}
                onSecondClick={() => null}
            />
        </CreateOrderTemplates.Step>
    )
}