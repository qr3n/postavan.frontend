import { Step } from "@features/order/create/ui/templates/Step";


import { useState } from "react";
import { Input } from "@shared/shadcn/components/input";
import { Button } from "@shared/shadcn/components/button";


const AddressInput = () => {
    const [query, setQuery] = useState(""); // Введенный адрес
    const [suggestions, setSuggestions] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState<string | null>(null); // Выбранный адрес
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length < 3) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Token dae305d1444a59cb68acd68b223f4080a84a6dc5` // Замените на ваш API-ключ
                },
                body: JSON.stringify({
                    query: value,
                    locations: [
                        { city: "Москва" }
                    ]
                })
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
    };

    // Функция для стилизации "г Москва"
    const highlightCity = (text: string) => {
        return text.replace(/(г\sМосква)/i, `<span class="text-zinc-400">$1</span>`);
    };

    return (
        <div className="relative w-full">
            <Input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Введите адрес"
            />
            {isLoading && (
                <ul
                    className="absolute left-0 w-full bg-zinc-900 border border-zinc-800 rounded-2xl mt-1 max-h-52 overflow-y-auto z-10 transition-all"
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
                    className="absolute left-0 w-full bg-zinc-900 border border-zinc-800 rounded-2xl mt-1 max-h-52 overflow-y-auto z-10 transition-all opacity-100"
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
            <div className='flex flex-col sm:flex-row gap-12 w-full max-w-2xl'>
                <div className='flex flex-col w-full sm:items-center'>
                    <h1 className='font-semibold text-2xl'>Откуда забрать?</h1>
                    <div className='w-full mt-4'>
                        <AddressInput/>
                    </div>
                    <Button className='w-full mt-4 text-sm' size='sm' >+ Адрес</Button>
                </div>

                <div className='flex flex-col sm:items-center w-full'>
                    <h1 className='font-semibold text-2xl'>Куда доставить?</h1>
                    <div className='w-full mt-4'>
                        <AddressInput/>
                    </div>
                    <Button className='w-full mt-4 text-sm' size='sm' >+ Адрес</Button>
                </div>
            </div>
        </Step>
    )
}