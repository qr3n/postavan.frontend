import { Step } from "@features/order/create/ui/templates/Step";
import { Button } from "@shared/shadcn/components/button";
import { Calendar } from "@shared/shadcn/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@shared/shadcn/components/popover";
import { CalendarIcon } from "lucide-react"
import { ru } from "date-fns/locale"
import { Select, SelectValue, SelectContent, SelectItem, SelectTrigger } from "@shared/shadcn/components/select";

const DatePicker = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={"justify-start text-left font-normal "}
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

const generateTimeOptions = () => {
    const times = [];
    for (let hours = 0; hours < 24; hours++) {
        for (let minutes = 0; minutes < 60; minutes += 30) {
            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            times.push(formattedTime);
        }
    }
    return times;
};

const TimeSelect = () => {
    const timeOptions = generateTimeOptions();

    return (
        <Select defaultValue={timeOptions[0]}>
            <SelectTrigger className=''>
                <SelectValue placeholder="Выберите время" />
            </SelectTrigger>
            <SelectContent>
                {timeOptions.map((time) => (
                    <SelectItem key={time} value={time}>
                        {time}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};


export const SetDeliveryTimeStep = () => {
    return (
        <Step title={'Когда выполнить?'} description={'Время бесплатного ожидания 25 минут'}>
            <div className='w-full flex items-center flex-col max-w-3xl'>
                <div>
                    <h1 className='font-semibold text-lg sm:text-2xl'>Забрать</h1>
                    <div className='flex gap-4 mt-4'>
                        <DatePicker/>
                        <TimeSelect/>
                        <TimeSelect/>
                    </div>
                </div>

                <div>
                    <h1 className='font-semibold text-lg sm:text-2xl mt-12'>Доставить</h1>
                    <div className='flex gap-4 mt-4'>
                        <DatePicker/>
                        <TimeSelect/>
                        <TimeSelect/>
                    </div>
                </div>
            </div>
        </Step>
    )
}