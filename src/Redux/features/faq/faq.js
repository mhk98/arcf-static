import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const faqApi = createApi({
  reducerPath: "faqApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000//",
  }),

  tagTypes: ["faq"], // Define the tag type
  endpoints: (build) => ({
    createFaq: build.mutation({
      query: (data) => ({
        url: "/faq/create-faq",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["faq"],
    }),

    deleteFaq: build.mutation({
      query: (id) => ({
        url: `/faq/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["faq"],
    }),

    updateFaq: build.mutation({
      query: ({ id, data }) => ({
        url: `/faq/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["faq"],
    }),

    getAllFaq: build.query({
      query: () => ({
        url: "/faq",
      }),
      providesTags: ["faq"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateFaqMutation,
  useGetAllFaqQuery,
  useDeleteFaqMutation,
  useUpdateFaqMutation,
} = faqApi;
