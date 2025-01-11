import { Step } from "@features/order/create/ui/templates/Step";
import { Button } from "@shared/shadcn/components/button";
import { Calendar } from "@shared/shadcn/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@shared/shadcn/components/popover";
import { CalendarIcon } from "lucide-react";
import { ru } from "date-fns/locale";
import { Select, SelectValue, SelectContent, SelectItem, SelectTrigger } from "@shared/shadcn/components/select";
import { memo } from "react";

type TimeSelectProps = {
    value: string;
    onChange: (value: string) => void;
    availableTimes: string[];
};

type DatePickerProps = {
    onDateChange?: (date: Date | undefined) => void;
};

const DatePicker = memo<DatePickerProps>(({ onDateChange }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={"justify-start w-[140px] text-left font-normal "}
                >
                    <CalendarIcon className={'text-zinc-500'} />
                    Сегодня
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    locale={ru}
                    mode="single"
                    initialFocus
                    onSelect={onDateChange}
                />
            </PopoverContent>
        </Popover>
    );
});

DatePicker.displayName = 'DatePicker';


const TimeSelect = memo<TimeSelectProps>(({ onChange, value, availableTimes }) => {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className='w-[150px]'>
                <SelectValue placeholder="Выберите время" />
            </SelectTrigger>
            <SelectContent>
                {availableTimes.map((time) => (
                    <SelectItem key={time} value={time}>
                        {time}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
});

TimeSelect.displayName = "TimeSelect";

export const SetDeliveryTimeStep: React.FC = () => {
    return (
        <Step title={'Когда выполнить?'} description={'Время бесплатного ожидания 25 минут'}>
            <div className='mt-4 w-full flex items-center flex-col'>
                <div>
                    <h1 className='font-semibold text-lg sm:text-xl'>Забрать</h1>
                    <div className='flex gap-4 mt-4 w-full'>
                        <DatePicker />

                    </div>
                </div>

                <div>
                    <h1 className='font-semibold text-lg sm:text-xl mt-12'>Доставить</h1>
                    <div className='flex gap-4 mt-4'>
                        <DatePicker />

                    </div>
                </div>
            </div>
        </Step>
    );
};
