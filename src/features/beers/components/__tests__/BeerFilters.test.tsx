import { render, screen, getByRole, waitFor } from "@testing-library/react";
import { BeerFilters } from "../BeerFilters";
import UserEvent from "@testing-library/user-event";

describe("BeerFilters", () => {
  it("should invoke updateSelection with correct params on sort", async () => {
    const onUpdateSelection = jest.fn();
    render(
      <BeerFilters
        filterValues={{ per_page: 20, page: 1, sort: "asc", by_type: "nano" }}
        onUpdateSelection={onUpdateSelection}
      />,
    );

    UserEvent.click(getByRole(screen.getByTestId("select-sort"), "button"));
    await waitFor(() => UserEvent.click(screen.getByText(/desc/i)));
    expect(onUpdateSelection).toHaveBeenCalledTimes(1);
    expect(onUpdateSelection).toBeCalledWith({ sort: "desc" });
  });

  it("should invoke updateSelection with correct params on filter change", async () => {
    const onUpdateSelection = jest.fn();
    render(
      <BeerFilters
        filterValues={{ per_page: 20, page: 1, sort: "asc", by_type: "nano" }}
        onUpdateSelection={onUpdateSelection}
      />,
    );

    UserEvent.click(getByRole(screen.getByTestId("select-type"), "button"));
    await waitFor(() => UserEvent.click(screen.getByText(/regional/i)));
    expect(onUpdateSelection).toHaveBeenCalledTimes(1);
    expect(onUpdateSelection).toBeCalledWith({ by_type: "regional" });
  });
});
