import { Step } from "@features/order/create/ui/templates/Step";


import { useState, useRef } from "react";
import { Button } from "@shared/shadcn/components/button";
import { Input } from "@shared/shadcn/components/input";
import { AnimatePresence, motion } from 'framer-motion'
import { PlusIcon } from "lucide-react";

const AddressInput = () => {
    const [query, setQuery] = useState(""); // Введенный адрес
    const [suggestions, setSuggestions] = useState([]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setSelectedAddress] = useState<string | null>(null); // Выбранный адрес
    const [isLoading, setIsLoading] = useState(false);
    const [isBlurActive, setIsBlurActive] = useState(false); // Затемнение экрана
    const inputRef = useRef<HTMLDivElement | null>(null);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length < 3) {
            setSuggestions([]);
            setIsBlurActive(false); // Убираем затемнение
            return;
        }

        setIsLoading(true);
        setIsBlurActive(true); // Активируем затемнение

        try {
            const response = await fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Token dae305d1444a59cb68acd68b223f4080a84a6dc5`, // Замените на ваш API-ключ
                },
                body: JSON.stringify({
                    query: value,
                    locations: [{ city: "Москва" }],
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setSuggestions(data.suggestions || []);
            } else {
                console.error("Error fetching suggestions:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelect = (address: string) => {
        setSelectedAddress(address);
        setQuery(address); // Отображаем выбранный адрес
        setSuggestions([]); // Очищаем подсказки
        setIsBlurActive(false); // Убираем затемнение
    };

    const highlightCity = (text: string) => {
        return text.replace(/(г\sМосква)/i, `<span class="text-zinc-400">$1</span>`);
    };

    const handleClickOutside = () => {
        setSuggestions([]);
        setIsBlurActive(false);
    };

    return (
        <div ref={inputRef} className="relative w-full">
            {/* Затемнение экрана */}
            <AnimatePresence mode={'wait'}>
                {isBlurActive && (
                    <motion.div
                        onClick={handleClickOutside}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed w-[100dvw] h-[100dvh] top-0 left-0 inset-0 bg-black/65 z-[150]"
                    />
                )}
            </AnimatePresence>

            <Input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Введите адрес"
                className="relative z-10"
            />

            {isLoading && (
                <ul
                    className="shadow-2xl absolute left-0 w-full bg-zinc-900 border border-zinc-800 rounded-2xl mt-1 max-h-48 sm:max-h-64 overflow-y-auto z-20 transition-all"
                >
                    {[...Array(5)].map((_, index) => (
                        <li
                            key={index}
                            className="p-2 border-b border-zinc-700 animate-pulse"
                        >
                            <div className="h-6 bg-zinc-700/80 rounded-full animate-pulse w-full"></div>
                        </li>
                    ))}
                </ul>
            )}

            {!isLoading && suggestions.length > 0 && (
                <ul
                    className="shadow-2xl absolute left-0 w-full bg-zinc-900 border border-zinc-800 rounded-2xl mt-1 pb-2 max-h-48 sm:max-h-64 overflow-y-auto z-20 transition-all opacity-100"
                >
                    {suggestions.map((suggestion: { value: string }) => (
                        <li
                            key={suggestion.value}
                            onClick={() => handleSelect(suggestion.value)}
                            className="p-2 cursor-pointer hover:bg-zinc-800 transition-colors"
                            dangerouslySetInnerHTML={{
                                __html: highlightCity(suggestion.value),
                            }}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};


export const SetAddressesStep = () => {
    return (
        <Step title='Куда и откуда?' description='В заказе можно указывать несколько адресов, нажав на +'>
            <div className='flex flex-col sm:flex-row gap-12 w-full max-w-3xl'>
                <div className='flex flex-col w-full sm:items-center'>
                    <h1 className='font-semibold text-lg md:text-xl lg:text-2xl'>Откуда забрать?</h1>
                    <div className='w-full mt-4'>
                        <AddressInput/>
                    </div>
                    <Button className='w-full mt-4 flex items-center justify-center' variant='outline'>
                        <span className='p-0.5 rounded-full bg-blue-500'><PlusIcon/></span> Адрес
                    </Button>
                </div>

                <div className='flex flex-col sm:items-center w-full'>
                    <h1 className='font-semibold text-lg md:text-xl lg:text-2xl'>Куда доставить?</h1>
                    <div className='w-full mt-4'>
                        <AddressInput/>
                    </div>
                    <Button className='w-full mt-4 flex items-center justify-center' variant='outline'>
                        <span className='p-0.5 rounded-full bg-blue-500'><PlusIcon/></span> Адрес
                    </Button>
                </div>
            </div>
        </Step>
    )
}