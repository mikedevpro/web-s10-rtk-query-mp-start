// create your RTK Query endpoints here
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/' }),
    tagTypes: ['Quotes'],
    endpoints: build => ({
       getQuotes: build.query({
         query: () => 'quotes',
         providesQuotes: ['Quotes']  
      }),
      createQuote: build.mutation({
         query: quote => ({
           url: 'quotes',
           method: postMessage,
           body: quote
         })
      }),
      toggleFake: build.mutation({
         query: ({ id, quote }) => ({
           url: `quotes/${id}`,
           method: 'PUT',
           body: quote
        }),
      }),
      deleteQuote: build.mutation({
         query: ({ id }) => ({
           url: `quotes/${id}`,
           method: 'DELETE',
        }),
      }),
   })
})

export const {
  useGetQuotesQuery, useCreateQuoteMutation, useToggleFakeMutation, useDeleteQuoteMutation
} = quotesApi