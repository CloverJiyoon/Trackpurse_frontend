import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseURI = "http://localhost:8080";
const baseURI = "https://trackpurse-backend.onrender.com";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query({
      query: () => "/api/categories",
    }),

    // get labels
    getLabels: builder.query({
      // get: 'http://localhost:8080/api/labels'
      query: () => "/api/labels",
      providesTags: ["transaction"],
    }),

    // add new transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        // post: 'http://localhost:8080/api/transaction'
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),

    // delete record
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        // delete: 'http://localhost:8080/api/transaction'
        url: "/api/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),

    // get user - check occupancy
    validateUserLogin: builder.mutation({
      query: (data) => ({
        // POST: 'http://localhost:8080/api/users'
        url: "/api/users",
        method: "POST",
        body: data,
      }),
    }),

    createNewUser: builder.mutation({
      query: (data) => ({
        // PUT: 'http://localhost:8080/api/users'
        url: "/api/users",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export default apiSlice;
