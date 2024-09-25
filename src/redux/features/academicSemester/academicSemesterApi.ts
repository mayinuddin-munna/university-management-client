import { baseApi } from "../../api/baseAPI";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (userInfo) => ({
        url: "/academic-semesters",
        method: "GET",
        body: userInfo,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery } = academicSemesterApi;
