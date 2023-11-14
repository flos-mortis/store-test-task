import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { Item } from '../cart/cartSlice';

export interface CatalogState {
    items: Item[],
    isLoading: boolean,
    isError: boolean
};

const initialState: CatalogState = {
    items: [],
    isLoading: false,
    isError: false
};

//подгрузка данных с сайта
export const fetchCatalog = createAsyncThunk('fetchCatalog', async () => {
    const response = await fetch("https://appevent.ru/dev/task1/catalog")
    return response.json()
});

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {},
    //обработка состояний при подгрузке данных
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.items = action.payload.items
                state.isLoading = false
            })
            .addCase(fetchCatalog.rejected, (state) => {
                state.isError = true
            });
    }   
})
export const selectCatalog = (state: RootState) => state.catalog;

export default catalogSlice.reducer;