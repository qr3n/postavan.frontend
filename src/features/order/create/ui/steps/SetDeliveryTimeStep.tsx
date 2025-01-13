import { Step } from "@features/order/create/ui/templates/Step";
import { Button } from "@shared/shadcn/components/button";
import { Calendar } from "@shared/shadcn/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@shared/shadcn/components/popover";
import { CalendarIcon } from "lucide-react";
import { ru } from "date-fns/locale";
import { memo, useCallback, useMemo, useState } from "react";
import { VirtualSelect } from "@shared/ui/virtualized-select/ui/VirtualizedSelect";

type TimeSelectProps = {
    value: string;
    onChange: (value: string) => void;
    availableTimes: string[];
    prefix: 'с' | 'до'
};

type DatePickerProps = {
    onDateChange?: (date: Date | undefined) => void;
};


const DatePicker = memo<DatePickerProps>(({ onDateChange }) => (
    <Popover>
        <PopoverTrigger asChild>
            <Button
                variant="outline"
                className="justify-start w-[140px] text-left font-normal"
            >
                <CalendarIcon className="text-zinc-500" />
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
));

DatePicker.displayName = 'DatePicker';

const TimeSelect = memo<TimeSelectProps>(({ onChange, value, availableTimes, prefix }) => (
    <VirtualSelect
        value={value}
        top={60}
        trigger={<Button className='gap-1' variant='outline'><span className='text-zinc-500'>{prefix}</span>{value || "Выберите время"}</Button>}
        options={availableTimes}
        onOptionChange={onChange}
    />
));

TimeSelect.displayName = "TimeSelect";

export const SetDeliveryTimeStep = () => {
    const generateTimeOptions = useMemo(() => {
        return Array.from({ length: 48 }, (_, i) => {
            const hours = Math.floor(i / 2).toString().padStart(2, '0');
            const minutes = (i % 2 === 0 ? '00' : '30');
            return `${hours}:${minutes}`;
        });
    }, []);

    const [pickupStartTime, setPickupStartTime] = useState<string>(generateTimeOptions[0]);
    const [pickupEndTime, setPickupEndTime] = useState<string>(generateTimeOptions[1]);
    const [deliveryStartTime, setDeliveryStartTime] = useState<string>(generateTimeOptions[0]);
    const [deliveryEndTime, setDeliveryEndTime] = useState<string>(generateTimeOptions[1]);

    const getAvailableTimes = useCallback((startTime: string): string[] => {
        const startIndex = generateTimeOptions.indexOf(startTime);
        return generateTimeOptions.slice(startIndex + 1);
    }, []);

    const handleTimeChange = useCallback(
        (
            setter: React.Dispatch<React.SetStateAction<string>>, // Функция обновления состояния
            dependentValue: string, // Текущее значение зависимого состояния
            optionsGetter: (value: string) => string[], // Функция получения доступных опций
            value: string // Новое значение
        ) => {
            setter(value);
            if (generateTimeOptions.indexOf(value) >= generateTimeOptions.indexOf(dependentValue)) {
                setter(optionsGetter(value)[0]);
            }
        },
        []
    );

    return (
        <Step title="Когда выполнить?" description="Время бесплатного ожидания 25 минут">
            <div className="mt-4 w-full flex items-center flex-col">
                <div>
                    <h1 className="font-semibold text-lg sm:text-xl">Забрать</h1>
                    <div className="flex gap-4 mt-4 w-full">
                        <DatePicker />

                        <TimeSelect
                            value={pickupStartTime}
                            availableTimes={generateTimeOptions}
                            onChange={(value) =>
                                handleTimeChange(setPickupStartTime, pickupEndTime, getAvailableTimes, value)
                            }
                            prefix={'с'}
                        />

                        <TimeSelect
                            value={pickupEndTime}
                            availableTimes={getAvailableTimes(pickupStartTime)}
                            onChange={(value) =>
                                handleTimeChange(setPickupEndTime, pickupStartTime, getAvailableTimes, value)
                            }
                            prefix={'до'}
                        />
                    </div>
                </div>

                <div>
                    <h1 className="font-semibold text-lg sm:text-xl mt-12">Доставить</h1>
                    <div className="flex gap-4 mt-4">
                        <DatePicker />

                        <TimeSelect
                            value={deliveryStartTime}
                            availableTimes={getAvailableTimes(pickupStartTime)}
                            onChange={(value) =>
                                handleTimeChange(setDeliveryStartTime, deliveryEndTime, getAvailableTimes, value)
                            }
                            prefix={'с'}
                        />

                        <TimeSelect
                            value={deliveryEndTime}
                            availableTimes={getAvailableTimes(deliveryStartTime)}
                            onChange={(value) =>
                                handleTimeChange(setDeliveryEndTime, deliveryStartTime, getAvailableTimes, value)
                            }
                            prefix={'до'}
                        />
                    </div>
                </div>
            </div>
        </Step>
    );
};
