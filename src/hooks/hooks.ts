// src/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../RTK/app/store';

// Use this instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;

// Use this instead of plain `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;