import type { RootState } from "@/RTK/app/store"
import { useAppDispatch, useAppSelector } from "./hooks"
import { useEffect } from "react"
import { getAssociates } from "@/RTK/features/associates/associatesSlice"

export const useGetAssociates = () => {
    const dispatch = useAppDispatch()
    const associates = useAppSelector((state: RootState) => state.associates.associates)
    const loading = useAppSelector((state: RootState) => state.associates.loading)
    const error = useAppSelector((state: RootState) => state.associates.error)
    useEffect(() => {
        dispatch(getAssociates())
    }, [dispatch])
    return { associates, loading, error }
}