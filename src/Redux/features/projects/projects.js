import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000//api/v1",
  }),

  tagTypes: ["projects"], // Define the tag type
  endpoints: (build) => ({
    createProjects: build.mutation({
      query: (data) => ({
        url: "/projects/create-projects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["projects"],
    }),

    deleteProjects: build.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["projects"],
    }),

    updateProjects: build.mutation({
      query: ({ id, data }) => ({
        url: `/projects/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["projects"],
    }),

    getAllProjects: build.query({
      query: () => ({
        url: "/projects",
      }),
      providesTags: ["projects"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateProjectsMutation,
  useGetAllProjectsQuery,
  useDeleteProjectsMutation,
  useUpdateProjectsMutation,
} = projectsApi;
