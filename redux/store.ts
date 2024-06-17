import { configureStore } from '@reduxjs/toolkit';
import themeState from './themeState';
import sheetState from './sheetState';
import premiumPlanState from './premiumPlanState';
import calendarState from './calendarState';
import iconState from './iconState';
import modalState from './modalState';
import toolBarState from './toolBarState';
import drawingToolsState from './drawingToolsState';
import searchState from './searchState';


export const store = configureStore({
  reducer:{
    themeState:themeState,
    sheetState:sheetState,
    premiumPlanState:premiumPlanState,
    calendarState:calendarState,
    iconState:iconState,
    modalState:modalState,
    toolBarState:toolBarState,
    drawingToolState:drawingToolsState,
    searchState:searchState
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false
    }),
})