import { Step } from "@features/order/create/ui/templates/Step";
import { Button } from "@shared/shadcn/components/button";
import { Calendar } from "@shared/shadcn/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@shared/shadcn/components/popover";
import { CalendarIcon } from "lucide-react"
import { ru } from "date-fns/locale"

const DatePicker = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={"mt-4 justify-start text-left font-normal "}
                >
                    <CalendarIcon className={'text-zinc-500'}/>
                    Сегодня
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    locale={ru}
                    mode="single"
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export const SetDeliveryTimeStep = () => {
    return (
        <Step title={'Когда выполнить?'} description={'Время бесплатного ожидания 25 минут'}>
            <div className='w-full max-w-3xl'>
                <h1 className='font-semibold text-lg sm:text-2xl'>Забрать</h1>
                <DatePicker/>

                <h1 className='font-semibold text-lg sm:text-2xl mt-8'>Доставить</h1>
                <DatePicker/>
            </div>
        </Step>
    )
}