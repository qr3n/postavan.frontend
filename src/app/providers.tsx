'use client';


import { PropsWithChildren, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { accessTokenAtom } from "@entities/session/model/atoms";
import toast from "react-hot-toast";
import { onFirebaseMessageListener } from "@shared/firebase/firebaseApp";
import { queryClient } from "@shared/api";


export const Providers = ({ children }: PropsWithChildren) => {
    const setAccessToken = useSetAtom(accessTokenAtom)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')

        onFirebaseMessageListener()
            .then(() => { toast.success('Новое уведомление') })
            .catch(() => console.log('failed: '));

        setAccessToken(accessToken)
    }, [setAccessToken])

    return (
        <QueryClientProvider client={queryClient}>
            { children }
        </QueryClientProvider>
    );
};
