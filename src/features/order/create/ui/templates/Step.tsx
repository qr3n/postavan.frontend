import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
    title: string,
    description?: string
}

export const Step = (props: IProps) => {
    return (
        <>
            <h1 className='font-semibold text-4xl sm:text-[42px]'>{props.title}</h1>
            <p className='max-w-[200px] sm:max-w-[300px] text-center text-zinc-500 text-xs sm:text-sm mt-2 sm:mt-3 mb-10'>{props.description || 'Условия для каждого варианта различаются'}</p>
            {props.children}
        </>
    )
}