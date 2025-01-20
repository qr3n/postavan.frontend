'use client';

import { atom } from "jotai";

export const accessTokenAtom = atom<string | null>(null)
export const adminAccessTokenAtom = atom<string | null>(null)
