import { favoritesAsList } from "../favoritesSelectors";

describe("favoritesSelectors", () => {
  it("combiner function should correctly create an array", () => {
    expect(
      favoritesAsList({
        data: {
          beer1: {
            brewId: "beer1",
            brewName: "Beer 1",
            createdOn: "2024-02-07T20:28:48.209Z",
          },
          beer2: {
            brewId: "beer2",
            brewName: "Beer 2",
            createdOn: "2025-02-07T20:28:48.209Z",
          },
        },
      }),
    ).toEqual([
      {
        brewId: "beer1",
        brewName: "Beer 1",
        createdOn: "2024-02-07T20:28:48.209Z",
      },
      {
        brewId: "beer2",
        brewName: "Beer 2",
        createdOn: "2025-02-07T20:28:48.209Z",
      },
    ]);

    expect(
      favoritesAsList({
        data: {},
      }),
    ).toEqual([]);
  });
});
