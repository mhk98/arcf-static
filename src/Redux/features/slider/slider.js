import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliderApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000//api/v1/",
  }),

  tagTypes: ["sliders"], // Define the tag type
  endpoints: (build) => ({
    createSlider: build.mutation({
      query: (data) => ({
        url: "/slider/create-slider",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["sliders"],
    }),

    deleteSlider: build.mutation({
      query: (id) => ({
        url: `/slider/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["sliders"],
    }),

    updateSlider: build.mutation({
      query: ({ id, data }) => ({
        url: `/slider/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["sliders"],
    }),

    getAllSlider: build.query({
      query: () => ({
        url: "/slider",
      }),
      providesTags: ["sliders"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateSliderMutation,
  useGetAllSliderQuery,
  useDeleteSliderMutation,
  useUpdateSliderMutation,
} = sliderApi;
