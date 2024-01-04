import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const healthApi = createApi({
  reducerPath: "healthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000//api/v1/",
  }),

  tagTypes: ["healths"], // Define the tag type
  endpoints: (build) => ({
    createHealth: build.mutation({
      query: (data) => ({
        url: "/health/create-health",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["healths"],
    }),

    deleteHealth: build.mutation({
      query: (id) => ({
        url: `/health/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["healths"],
    }),

    updateHealth: build.mutation({
      query: ({ id, data }) => ({
        url: `/health/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["healths"],
    }),

    getSingleHealth: build.query({
      query: (category) => ({
        url: `/health/${category}`,
      }),
      providesTags: ["healths"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
    // getAllHealth: build.query({
    //   query: () => ({
    //     url: `/health`,
    //   }),
    //   providesTags: ["healths"],

    //   refetchOnMountOrArgChange: true,
    //   pollingInterval: 1000,
    // }),
  }),
});

export const {
  useCreateHealthMutation,
  useGetSingleHealthQuery,
  useDeleteHealthMutation,
  useUpdateHealthMutation,
} = healthApi;
