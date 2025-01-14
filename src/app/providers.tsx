'use client';


import { PropsWithChildren, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { accessTokenAtom } from "@entities/session/model/atoms";

export const Providers = ({ children }: PropsWithChildren) => {
    const setAccessToken = useSetAtom(accessTokenAtom)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')

        setAccessToken(accessToken)
    }, [setAccessToken])

    return (
        <QueryClientProvider client={new QueryClient()}>
            { children }
        </QueryClientProvider>
    );
};
