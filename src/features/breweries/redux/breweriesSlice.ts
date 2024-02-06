import { createApi } from "@reduxjs/toolkit/query/react";
import { ApiParams, Beer } from "../../../shared/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import { API as API_BASE_URL } from "../../../api/config";
interface ListResponse<T> {
  page: number;
  total: number;
  total_pages: number;
  data: Beer[];
}

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig<ApiParams>["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      console.log("axios request with params: ", params);
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const beersApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    listBeers: builder.query<ListResponse<Beer>, ApiParams | void>({
      // query: ({page}: ApiParams) => `breweries2?page=${page}`,
      query: (params: ApiParams) => ({
        url: "breweries",
        method: "get",
        params,
      }),
      transformResponse: (response: Beer[], meta, args): ListResponse<Beer> => {
        return {
          page: args?.per_page || 1,
          total: response.length,
          total_pages: 10,
          data: response,
        };
      },
    }),

    randomBeers: builder.query<Beer[], ApiParams | void>({
      query: (params: ApiParams) => ({
        url: "breweries/random",
        method: "get",
        params,
      }),
    }),
  }),
});

export const {
  useListBeersQuery,
  useRandomBeersQuery,
  useLazyRandomBeersQuery,
} = beersApi;
