import favoritesReducer, { add, remove } from "../favoritesSlice";

const b3 = {
  brewId: "b3",
  brewName: "beer 3",
};

const b4 = {
  brewId: "b4",
  brewName: "beer 4",
};

const b7 = {
  brewId: "b7",
  brewName: "beer 7",
};

const dateValue = new Date(2023, 3, 1);
const isoStringValue = dateValue.toISOString();

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(dateValue);
});

afterAll(() => {
  jest.useRealTimers();
});

describe("favoritesActions", () => {
  describe("add", () => {
    it("should correctly add brew to favorites", () => {
      const initialState = {
        data: {
          [b3.brewId]: { ...b3, createdOn: isoStringValue },
        },
      };
      expect(favoritesReducer(initialState, add(b7))).toEqual({
        data: {
          [b3.brewId]: { ...b3, createdOn: isoStringValue },
          [b7.brewId]: { ...b7, createdOn: isoStringValue },
        },
      });

      expect(favoritesReducer({ data: {} }, add(b7))).toEqual({
        data: {
          [b7.brewId]: { ...b7, createdOn: isoStringValue },
        },
      });
    });

    it("should ignore duplicates", () => {
      const initialState = {
        data: {
          [b3.brewId]: { ...b3, createdOn: isoStringValue },
          [b4.brewId]: { ...b4, createdOn: isoStringValue },
        },
      };
      expect(favoritesReducer(initialState, add(b4))).toEqual({
        data: {
          [b3.brewId]: { ...b3, createdOn: isoStringValue },
          [b4.brewId]: { ...b4, createdOn: isoStringValue },
        },
      });
    });
  });

  describe("remove", () => {
    it("should correctly delete brew from favorites", () => {
      const initialState = {
        data: {
          [b3.brewId]: { ...b3, createdOn: isoStringValue },
          [b4.brewId]: { ...b4, createdOn: isoStringValue },
        },
      };

      expect(favoritesReducer(initialState, remove(b4.brewId))).toEqual({
        data: {
          [b3.brewId]: { ...b3, createdOn: isoStringValue },
        },
      });

      expect(favoritesReducer(initialState, remove(b3.brewId))).toEqual({
        data: {
          [b4.brewId]: { ...b4, createdOn: isoStringValue },
        },
      });

      expect(favoritesReducer({ data: {} }, remove(b3.brewId))).toEqual({
        data: {},
      });
    });

    it("should correctly handle case of non existing brew", () => {
      const initialState = {
        data: {
          [b3.brewId]: { ...b3, createdOn: isoStringValue },
          [b4.brewId]: { ...b4, createdOn: isoStringValue },
        },
      };

      expect(favoritesReducer(initialState, remove(b7.brewId))).toEqual(
        initialState,
      );
    });
  });
});
