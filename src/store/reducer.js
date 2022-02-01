import { createReducer } from "@reduxjs/toolkit";
import { loadData, changeSortType } from "./action.js";
import { sortTypes } from "../const.js";
import { ruleSortByTown , ruleSortByCompany } from '../filter-rules.js'

const initialState = {
    users: [],
    sortType: sortTypes.DEFAULT,
    isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadData, (state, action) => {
            state.users = action.payload;
            state.isDataLoaded = true;
        })
        .addCase(changeSortType, (state, action) => {
          state.sortType = action.payload;
          const defaultSort = state.users.slice();
          switch (action.payload) {
            case "town" :
              state.users = state.users.sort(ruleSortByTown)
              break;
            case "company" :
              state.users = state.users.sort(ruleSortByCompany)
              break;
            default:
              state.users = defaultSort;
              break;
          }
      })
});

export {reducer, sortTypes};