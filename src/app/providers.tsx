'use client';


import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={new QueryClient()}>
            { children }
        </QueryClientProvider>
    );
};
