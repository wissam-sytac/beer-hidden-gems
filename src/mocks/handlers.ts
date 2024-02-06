import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/breweries", async ({ request, params }): Promise<any> => {
    const url = new URL(request.url);

    const q = new URLSearchParams(url.search);

    const page = Number(q.get("page"));

    if (page === 1) {
      return HttpResponse.json([
        {
          id: "b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0",
          name: "MadTree Brewing 2.0",
          brewery_type: "regional",
          address_1: "5164 Kennedy Ave",
          address_2: null,
          address_3: null,
          city: "Cincinnati",
          state_province: "Ohio",
          postal_code: "45213",
          country: "United States",
          longitude: "-84.4137736",
          latitude: "39.1885752",
          phone: "5138368733",
          website_url: "http://www.madtreebrewing.com",
          state: "Ohio",
          street: "5164 Kennedy Ave",
        },
        {
          id: "5128df48-79fc-4f0f-8b52-d06be54d0cec",
          name: "(405) Brewing Co",
          brewery_type: "micro",
          address_1: "1716 Topeka St",
          address_2: null,
          address_3: null,
          city: "Norman",
          state_province: "Oklahoma",
          postal_code: "73069-8224",
          country: "United States",
          longitude: "-97.46818222",
          latitude: "35.25738891",
          phone: "4058160490",
          website_url: "http://www.405brewing.com",
          state: "Oklahoma",
          street: "1716 Topeka St",
        },
      ]);
    }

    if (page === 2) {
      return HttpResponse.json([
        {
          id: "3",
          name: "somnething",
          brewery_type: "somnething",
          address_1: "somnething",
          address_2: "somnething",
          address_3: "somnething",
          city: "somnething",
          state_province: "somnething",
          postal_code: "somnething",
          country: "somnething",
          longitude: "somnething",
          latitude: "somnething",
          phone: "somnething",
          website_url: "somnething",
          state: "somnething",
          street: "somnething",
        },
      ]);
    }
  }),
];
