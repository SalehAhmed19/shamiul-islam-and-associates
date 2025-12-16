import type { AssociatesInterface } from "@/Interfaces/AccociatesInterface";
import { axiosPublic, axiosSecure } from "@/utils/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface AssociatesState {
    associates: AssociatesInterface[];
    associate: AssociatesInterface | null;
    loading: boolean;
    error: string | null;
}

const initialState: AssociatesState = {
    associates: [],
    associate: null,
    loading: false,
    error: null,
}

export const getAssociates = createAsyncThunk("associates/getAssociates", async () => {
    const response = await axiosPublic.get("/associates")
    console.log("API Response Data:", response.data);
    return response.data
})

export const getSingleAssociate = createAsyncThunk("associates/getSingleAssociate", async (id: string) => {
    const response = await axiosPublic.get(`/associates/${id}`)
    return response.data
})

export const createAssociate = createAsyncThunk("associates/createAssociate", async (associate: AssociatesInterface, { rejectWithValue }) => {
    try {
        const response = await axiosSecure.post("/associates/create-associate", associate)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateAssociate = createAsyncThunk("associates/updateAssociate", async (associate: AssociatesInterface, { rejectWithValue }) => {
    try {
        const response = await axiosSecure.put(`/associates/update-associate/${associate._id}`, associate)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteAssociate = createAsyncThunk("associates/deleteAssociate", async (id: string, { rejectWithValue }) => {
    try {
        const response = await axiosSecure.delete(`/associates/delete-associate/${id}`)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const AssociatesSlice = createSlice({
    name: "associates",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Get Associates
        builder.addCase(getAssociates.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getAssociates.fulfilled, (state, action) => {
            state.loading = false
            // এখানে নিশ্চিত করা হচ্ছে যে state.associates সবসময় একটি অ্যারে হবে
            if (Array.isArray(action.payload)) {
                state.associates = action.payload;
            } else if (action.payload && Array.isArray(action.payload.associates)) {
                state.associates = action.payload.associates;
            } else {
                state.associates = [];
                console.error("API Error: Payload is not an array", action.payload);
            }
        })
        builder.addCase(getAssociates.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Failed to fetch associates"
        })

        // Get Single Associate
        builder.addCase(getSingleAssociate.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getSingleAssociate.fulfilled, (state, action) => {
            state.associate = action.payload
            state.loading = false
        })
        builder.addCase(getSingleAssociate.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Failed to fetch single associate"
        })

        // Create Associate
        builder.addCase(createAssociate.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(createAssociate.fulfilled, (state, action) => {
            state.loading = false
            // FIX: পুরো অ্যারে রিপ্লেস না করে, নতুন আইটেমটি অ্যারেতে পুশ করছি
            // ব্যাকেন্ড যদি created object রিটার্ন করে:
            if (action.payload && typeof action.payload === 'object') {
                state.associates.push(action.payload as AssociatesInterface);
            }
        })
        builder.addCase(createAssociate.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })

        // Update Associate
        builder.addCase(updateAssociate.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(updateAssociate.fulfilled, (state, action) => {
            state.loading = false
            // FIX: অ্যারের মধ্যে খুঁজে স্পেসিফিক আইটেমটি আপডেট করছি
            const updatedItem = action.payload as AssociatesInterface;
            const index = state.associates.findIndex(item => item._id === updatedItem._id);
            if (index !== -1) {
                state.associates[index] = updatedItem;
            }
        })
        builder.addCase(updateAssociate.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })

        // Delete Associate
        builder.addCase(deleteAssociate.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(deleteAssociate.fulfilled, (state, action) => {
            state.loading = false
            // FIX: অ্যারে ফিল্টার করে রিমুভ করছি
            // action.payload আমরা Thunk এ 'id' রিটার্ন করেছি
            const idToDelete = action.payload as string;
            state.associates = state.associates.filter(item => item._id !== idToDelete);
        })
        builder.addCase(deleteAssociate.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })
    }
})
