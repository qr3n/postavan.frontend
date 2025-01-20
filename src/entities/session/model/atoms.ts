'use client';

import { atom } from "jotai";

export const accessTokenAtom = atom<string | null>(localStorage.getItem('accessToken') || null)
export const adminAccessTokenAtom = atom<string | null>(localStorage.getItem('adminAccessToken') || null)
