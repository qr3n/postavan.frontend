import { CreateOrderTemplates } from "@features/order/create/ui/templates";
import { useAtom, useAtomValue } from "jotai";
import { createOrderAtoms } from "@features/order/create";
import { boxImg, itemsImg, paletteImg } from "@features/order/create/ui/assets";
import Image from "next/image";
import { Button } from "@shared/shadcn/components/button";
import { Modal } from "@shared/ui/modal";
import { Input } from "@shared/shadcn/components/input";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { VirtualSelect } from "@shared/ui/virtualized-select/ui/VirtualizedSelect";
import { AiFillEdit } from "react-icons/ai";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { DialogClose } from "@shared/shadcn/components/dialog";
import { DrawerClose } from "@shared/shadcn/components/drawer";

interface IFormData {
    length: number,
    width: number,
    height: number,
}


const SetDimensionsForm = () => {
    const [length, setLength] = useAtom(createOrderAtoms.packageLength);
    const [width, setWidth] = useAtom(createOrderAtoms.packageWidth);
    const [height, setHeight] = useAtom(createOrderAtoms.packageHeight);

    const { register, handleSubmit, formState: { errors } } = useForm<IFormData>({
        defaultValues: {
            length,
            width,
            height,
        },
    });

    const onSubmit = handleSubmit((data) => {
        setLength(data.length);
        setWidth(data.width);
        setHeight(data.height);
    });

    return (
        <form onSubmit={onSubmit}>
            <div>
                <Input
                    {...register('length', {
                        required: 'Длина обязательна',
                        min: { value: 1, message: 'Длина должна быть больше 0' },
                    })}
                    defaultValue={length}
                    type="number"
                    label="Длина"
                />
                   {errors.length && (
                       <p className="text-red-500 text-sm mt-1">{errors.length.message}</p>
                   )}
            </div>

            <div className="mt-3">
                <Input
                    {...register('width', {
                        required: 'Ширина обязательна',
                        min: { value: 1, message: 'Ширина должна быть больше 0' },
                    })}
                    defaultValue={width}
                    type="number"
                    label="Ширина"
                />
                {errors.width && (
                    <p className="text-red-500 text-sm mt-1">{errors.width.message}</p>
                )}
            </div>

            <div className="mt-3">
                <Input
                    {...register('height', {
                        required: 'Высота обязательна',
                        min: { value: 1, message: 'Высота должна быть больше 0' },
                    })}
                    defaultValue={height}
                    type="number"
                    label="Высота"
                />
                {errors.height && (
                    <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>
                )}
            </div>

            <DialogClose asChild>
                <DrawerClose asChild>
                    <Button className="w-full mt-12" type="submit">
                        Сохранить
                    </Button>
                </DrawerClose>
            </DialogClose>
            <Button className="w-full mt-4" variant="outline" type="button">
                Отмена
            </Button>

            <input type="submit" className="hidden" />
        </form>
    );
};

export const SetDimensionsStep = () => {
    const [placesCount, setPlacesCount] = useAtom(createOrderAtoms.placesCount)
    const length = useAtomValue(createOrderAtoms.packageLength)
    const width = useAtomValue(createOrderAtoms.packageWidth)
    const height = useAtomValue(createOrderAtoms.packageHeight)

    const shipmentType = useAtomValue(createOrderAtoms.shipmentType)
    const packingType = useAtomValue(createOrderAtoms.packingType)
    const variants = useMemo(() => [...Array(100).keys()].map(e => (e + 1).toString()), [])

    return (
        <CreateOrderTemplates.Step title={'Какие габариты?'}>
            <div vaul-drawer-wrapper="" className='max-w-md flex gap-16 w-full items-center justify-center'>
                <div className='w-full flex justify-center flex-col items-center'>
                    <div className='relative w-full justify-center items-center flex flex-col'>
                        <div className='flex items-end justify-center gap-8'>
                            <Image
                                priority
                                className='w-48 md:w-52 lg:w-64'
                                placeholder={'blur'}
                                draggable={false}
                                src={shipmentType === 'marketplace' ? (packingType === 'box' ? boxImg : paletteImg) : itemsImg}
                                alt={'firstChoice'}
                                width={0} height={0}
                            />

                            <VirtualSelect value={placesCount.toString()} onOptionChange={(v) => setPlacesCount(Number(v))} options={variants} trigger={(
                                <div className='text-center mb-12 group'>
                                    <h1 className='text-zinc-500'>Кол. мест</h1>
                                    <div className='flex mt-1  items-center cursor-pointer justify-center gap-3'>
                                        <h1 className='font-semibold text-4xl lg:text-5xl xl:text-6xl'>
                                            <span className='text-3xl lg:text-4xl xl:text-5xl mr-0.5 text-zinc-400'>x</span>{placesCount}
                                        </h1>
                                        <div
                                            className='p-1 w-max group-hover:bg-zinc-800 group-hover:border-zinc-700 bg-zinc-900 rounded-2xl border border-zinc-800 '>
                                            <MdOutlineKeyboardArrowDown className='text-white w-8 h-8'/>
                                        </div>
                                    </div>
                                </div>
                            )}/>
                        </div>
                        <div className='flex mt-6 gap-3 w-full mb-6'>
                            <div className='text-center bg-zinc-900 rounded-2xl border border-zinc-800 p-3 w-full'>
                                <h1 className='text-zinc-500 text-sm sm:text-base'>Длина</h1>
                                <p className='font-medium text-lg sm:text-xl'>{length} <span className='text-zinc-400'>см</span></p>
                            </div>

                            <div className='text-center bg-zinc-900 rounded-2xl border border-zinc-800 p-3 w-full'>
                                <h1 className='text-zinc-500 text-sm sm:text-base'>Ширина</h1>
                                <p className='font-medium text-lg sm:text-xl'>{width} <span className='text-zinc-400'>см</span></p>
                            </div>

                            <div className='text-center bg-zinc-900 rounded-2xl border border-zinc-800 p-3 w-full'>
                                <h1 className='text-zinc-500 text-sm sm:text-base'>Высота</h1>
                                <p className='font-medium text-lg sm:text-xl'>{height} <span className='text-zinc-400'>см</span></p>
                            </div>
                        </div>
                    </div>

                    <Modal trigger={(
                        <Button variant='outline' className='w-full'>
                        <span className='p-0.5 rounded-full bg-blue-500'><AiFillEdit className='w-1 h-1'/></span> Изменить размер
                        </Button>
                    )} title={'Изменить габариты'} description={'Пожалуйста, вводите точные значения'}>
                        <div className='px-4 sm:px-0 sm:mt-8'>
                            <SetDimensionsForm/>
                        </div>
                    </Modal>
                </div>
            </div>
        </CreateOrderTemplates.Step>
    )
}