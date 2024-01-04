import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutApi = createApi({
  reducerPath: "aboutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000//",
  }),

  tagTypes: ["about"], // Define the tag type
  endpoints: (build) => ({
    createabout: build.mutation({
      query: (data) => ({
        url: "/about/create-about",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["about"],
    }),

    deleteabout: build.mutation({
      query: (id) => ({
        url: `/about/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["about"],
    }),

    updateabout: build.mutation({
      query: ({ id, data }) => ({
        url: `/about/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["about"],
    }),

    getAllabout: build.query({
      query: () => ({
        url: "/about",
      }),
      providesTags: ["about"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateaboutMutation,
  useGetAllaboutQuery,
  useDeleteaboutMutation,
  useUpdateaboutMutation,
} = aboutApi;
