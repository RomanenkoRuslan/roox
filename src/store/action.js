import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
    LOAD_DATA: "LOAD_DATA",
    CHANGE_SORT_TYPE: "CHANGE_SORT_TYPE",
}

export const loadData = createAction(ActionType.LOAD_DATA, (data) => ({
    payload: data,
}));

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (data) => ({
    payload: data,
}));