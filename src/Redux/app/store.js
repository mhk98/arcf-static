// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { aboutApi } from "../features/about/about";
import { faqApi } from "../features/faq/faq";
import { projectsApi } from "../features/projects/projects";
import { sliderApi } from "../features/slider/slider";
import { healthApi } from "../features/health/health";
import { healthBannerApi } from "../features/healthBanner/healthBanner";
import { healthDetailsApi } from "../features/healthDetails/healthDetails";
import { projectsBannerApi } from "../features/projectBanner/projectBanner";
import { projectsDetailsApi } from "../features/projectsDetails/projectsDetails";
import { healthCategoryDetailsApi } from "../features/healthCategoryDetails/healthCategoryDetails";

const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
    [healthApi.reducerPath]: healthApi.reducer,
    [healthBannerApi.reducerPath]: healthBannerApi.reducer,
    [healthDetailsApi.reducerPath]: healthDetailsApi.reducer,
    [projectsBannerApi.reducerPath]: projectsBannerApi.reducer,
    [projectsDetailsApi.reducerPath]: projectsDetailsApi.reducer,
    [healthCategoryDetailsApi.reducerPath]: healthCategoryDetailsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sliderApi.middleware,
      faqApi.middleware,
      aboutApi.middleware,
      projectsApi.middleware,
      healthApi.middleware,
      healthBannerApi.middleware,
      healthDetailsApi.middleware,
      projectsBannerApi.middleware,
      projectsDetailsApi.middleware,
      healthCategoryDetailsApi.middleware,
    ),
});

export default store;
