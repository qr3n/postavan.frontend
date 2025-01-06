import React, { PropsWithChildren } from "react";

export const Step = (props: PropsWithChildren) => {
    return (
        <>
            <h1 className='font-semibold text-4xl sm:text-5xl'>Какой груз?</h1>
            <p className='text-zinc-500 text-sm sm:text-base mt-1 sm:mt-2 mb-8'>Тестовое описание</p>
            {props.children}
        </>
    )
}