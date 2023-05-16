import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { cocktailItem } from "../interfaces/cocktails";

const BASE_URL = "http://thecocktaildb.com/";
// navDrawer initial state
export interface cocktailsInitialState {
  cocktailList: cocktailItem[];
  status: string;
  error: string | undefined;
}

const initialState: cocktailsInitialState = {
  cocktailList: [],
  status: "idle", // idle, success, error, loading,
  error: "",
};

const config = {
  headers: {
    Authorization: "1",
  },
};
export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    const response = await axios.get(
      `${BASE_URL}api/json/v1/1/random.php`,
      config,
    );
    const data = await response.data;
    return data;
  },
);

export const fetchCocktailsList = createAsyncThunk(
  "cocktails/fetchCocktailsList",
  async () => {
    const promise1 = await axios.get(
      `${BASE_URL}api/json/v1/1/random.php`,
      config,
    );
    const promise2 = await axios.get(
      `${BASE_URL}api/json/v1/1/random.php`,
      config,
    );
    const promise3 = await axios.get(
      `${BASE_URL}api/json/v1/1/random.php`,
      config,
    );
    const promise4 = await axios.get(
      `${BASE_URL}api/json/v1/1/random.php`,
      config,
    );
    const promise5 = await axios.get(
      `${BASE_URL}api/json/v1/1/random.php`,
      config,
    );
    return axios
      .all([promise1, promise2, promise3, promise4, promise5])
      .then((values) => {
        return values;
      });
  },
);

export const cocktailSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCocktails.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCocktails.fulfilled, (state, action) => {
      state.status = "loaded";
      let list;
      if (!state.cocktailList.includes(action.payload?.drinks[0])) {
        list = action.payload?.drinks[0];
        state.cocktailList = [...state.cocktailList, list];
      }
    });
    builder.addCase(fetchCocktails.rejected, (state, action) => {
      state.status = "loaded";
      state.error = action.error.message;
    });

    builder.addCase(fetchCocktailsList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCocktailsList.fulfilled, (state, action) => {
      const newList = action.payload.map(
        (response: AxiosResponse<any, any>) => {
          // Transform the AxiosResponse object into a WritableDraft<cocktailItem> object
          return response.data.drinks[0];
        },
      );
      state.cocktailList = [...state.cocktailList, ...newList];
    });
    builder.addCase(fetchCocktailsList.rejected, (state, action) => {
      state.status = "loaded";
      state.error = action.error.message;
    });
  },
});

export const cocktailList = (state: cocktailsInitialState) =>
  state.cocktailList;
export const status = (state: cocktailsInitialState) => state.status;
export const error = (state: cocktailsInitialState) => state.error;
export default cocktailSlice.reducer;
