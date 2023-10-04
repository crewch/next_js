import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const incrementAsync = createAsyncThunk<number, number>(
	'counter/incrementAsync',
	async amount => {
		await new Promise(resolve => setTimeout(resolve, 2000))

		return amount
	}
)

export const decrementAsync = createAsyncThunk<number, number>(
	'counter/decrementAsync',
	async amount => {
		await new Promise(resolve => setTimeout(resolve, 2000))

		return amount
	}
)

export interface CounterState {
	value: number
}

const initialState: CounterState = {
	value: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: state => {
			state.value++
		},
		decrement: state => {
			state.value--
		},
	},
	extraReducers: builder => {
		builder.addCase(
			incrementAsync.fulfilled,
			(state, action: PayloadAction<number>) => {
				state.value += action.payload
			}
		)
		builder.addCase(
			decrementAsync.fulfilled,
			(state, action: PayloadAction<number>) => {
				state.value -= action.payload
			}
		)
	},
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
