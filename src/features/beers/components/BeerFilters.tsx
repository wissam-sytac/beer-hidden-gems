import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { ApiParams, SORT, TYPE } from "../../../shared/types";
import { Button, TextField } from "@mui/material";

interface BeerFiltersProps {
  filterValues: ApiParams;
  onUpdateSelection: (a: any) => void;
}

export const BeerFilters = ({
  filterValues,
  onUpdateSelection,
}: BeerFiltersProps) => {
  const handleChangeSort = (event: SelectChangeEvent) => {
    onUpdateSelection({
      sort: event.target.value as SORT,
    });
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    onUpdateSelection({
      by_type: event.target.value as TYPE,
    });
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateSelection({
      by_name: event.target.value,
    });
  };

  const filterTypeOptions = [
    "micro",
    "nano",
    "regional",
    "brewpub",
    "large",
    "planning",
    "bar",
    "contract",
    "proprietor",
    "closed",
  ];

  return (
    <>
      <FormControl>
        <InputLabel id="select-sort-label">Sort</InputLabel>
        <Select
          data-testid="select-sort"
          labelId=""
          id="select-sort"
          value={filterValues.sort}
          label="sort"
          onChange={handleChangeSort}
        >
          <MenuItem value={"asc"}>asc</MenuItem>
          <MenuItem value={"desc"}>desc</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="select-type-label">Type</InputLabel>
        <Select
          data-testid="select-type"
          labelId=""
          id="select-type"
          value={filterValues.by_type}
          label="type"
          onChange={handleChangeType}
        >
          {filterTypeOptions.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="name (min 3 chars)"
          variant="outlined"
          value={filterValues.by_name}
          onChange={handleChangeName}
        />
      </FormControl>
    </>
  );
};
