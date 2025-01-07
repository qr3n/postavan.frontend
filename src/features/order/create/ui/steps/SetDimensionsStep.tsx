import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import { Input } from "@shared/shadcn/components/input";

export const SetDimensionsStep = () => {
    return (
        <CreateOrderTemplates.Step title={'Какие габариты?'}>
            <div className='flex flex-col max-w-xl w-full gap-4 items-center justify-center'>
                <div className='w-full'>
                    <h1 className='text-lg sm:text-xl font-semibold'>Длина</h1>
                    <Input className='w-full mt-2' placeholder='250см'/>
                </div>
                <div className='mt-3 w-full'>
                    <h1 className='text-lg sm:text-xl font-semibold'>Ширина</h1>
                    <Input className='w-full mt-2' placeholder='250см'/>
                </div>

                <div className='mt-3 w-full'>
                    <h1 className='text-lg sm:text-xl font-semibold'>Высота</h1>
                    <Input className='w-full mt-2' placeholder='250см'/>
                </div>
            </div>
        </CreateOrderTemplates.Step>
    )
}