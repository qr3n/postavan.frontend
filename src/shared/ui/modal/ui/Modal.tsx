import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
}                                                               from "@shared/shadcn/components/dialog";
import { Button }        from "@shared/shadcn/components/button";
import {
    Drawer,
    DrawerContent,
    DrawerDescription, DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
}                        from "@shared/shadcn/components/drawer";

interface IProps extends PropsWithChildren {
    trigger: ReactElement,
    title: string | ReactElement | ReactElement[],
    description: string | ReactElement | ReactElement[],
    preHeader?: string | ReactElement | ReactElement[],
    footer?: string | ReactElement | ReactElement[],
}

const useMediaQuery = (query: string) => {
    const [value, setValue] = useState(false)

    useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setValue(event.matches)
        }

        const result = matchMedia(query)
        result.addEventListener("change", onChange)
        setValue(result.matches)

        return () => result.removeEventListener("change", onChange)
    }, [query])

    return value
}

export const Modal = (props: IProps) => {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <a href={'#modal'}>
                        {props.trigger}
                    </a>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <div className='relative'>
                        {props.preHeader}
                        <DialogHeader>
                            <DialogTitle className='text-white flex gap-2 items-center'>
                                {props.title}
                            </DialogTitle>
                            <DialogDescription>
                                {props.description}
                            </DialogDescription>
                        </DialogHeader>
                        {props.children}
                        <DialogFooter className='w-full flex items-start mt-2'>
                            {props.footer}
                        </DialogFooter>
                    </div>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <a href={'#modal'}>
                    <Button>
                        Продолжить
                    </Button>
                </a>
            </DrawerTrigger>
            <DrawerContent className='dark'>
                <div className='relative'>
                    {props.preHeader}
                    <DrawerHeader className="text-left">
                        <DrawerTitle className='text-white flex gap-2 items-center'>
                            {props.title}
                        </DrawerTitle>
                        <DrawerDescription>
                            {props.description}
                        </DrawerDescription>
                    </DrawerHeader>
                    {props.children}
                    <DrawerFooter className="pt-2">
                        {props.footer}
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}