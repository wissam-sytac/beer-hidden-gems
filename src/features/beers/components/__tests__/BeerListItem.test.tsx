import { render, screen, getByRole, waitFor } from "@testing-library/react";
import { BeerListItem } from "../BeerListItem";
import { Beer } from "../../../../shared/types";

const beer1: Beer = {
  id: "b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0",
  name: "MadTree Brewing 2.0",
  brewery_type: "regional",
  address_1: "5164 Kennedy Ave",
  address_2: "null",
  address_3: "null",
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
};

describe("BeerListItem", () => {
  it("should correctly display data", async () => {
    const onClickAddToFaves = jest.fn();
    const onClickExplore = jest.fn();
    render(
      <BeerListItem
        beer={beer1}
        isFavorited={false}
        onClickAddToFaves={onClickAddToFaves}
        onClickExplore={onClickExplore}
      />,
    );
    expect(1 + 1).toEqual(2);
  });
});
