import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: `posts`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery, useAddPostMutation } =
  postsApi;
