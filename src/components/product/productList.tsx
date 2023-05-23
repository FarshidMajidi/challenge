import {
  Box,
  Button,
  InputAdornment,
  List,
  OutlinedInput,
  Paper,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { DefaultTheme, makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { searchByTitle } from "features/productSlice";
import { ChangeEvent, useState, useCallback } from "react";
import { debounce } from "lodash";
import { Card } from "../card";
import { addItem, clearList } from "features/shareSlice";

const useStyles = makeStyles((them: DefaultTheme) => ({
  productContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "4px",
    width: "30%",
    padding: "12px",
  },
  footer: {
    display: "flex",
    height: "48px",
    borderTop: "1px solid #e7e7e7",
  },
}));

export const ProductList = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [, setSearch] = useState<string>("");
  const state = useAppSelector((state) => state.products);
  const { filter } = state;

  const handleSearch = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      dispatch(searchByTitle(value));
      setSearch(value);
    }, 1000),
    []
  );

  return (
    <Paper className={classes.productContainer}>
      <OutlinedInput
        id="search"
        type="search"
        placeholder="Search ..."
        onChange={handleSearch}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
        sx={{
          height: "48px",
          marginBottom: "12px",
        }}
      />
      <List
        sx={{
          width: "100%",
          overflowX: "hidden",
          overflowY: "scroll",
          height: 645,
          maxHeight: 645,
          paddingTop: 0,
          paddingBottom: 0,
          "& ul": { padding: 0 },
        }}
      >
        {filter &&
          filter.map((item, index) => {
            return (
              <Card
                key={index}
                item={{
                  title: item.title,
                  subTitle: item.description,
                }}
                handleAddItem={() =>
                  dispatch(addItem({ id: item.id, title: item.title }))
                }
              />
            );
          })}
      </List>

      <Box className={classes.footer}>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(clearList())}
          sx={{
            cursor: "pointer",
            height: "36px",
            fontSize: "16px",
            margin: "auto",
            width: "100%",
          }}
        >
          CLEAR LIST
        </Button>
      </Box>
    </Paper>
  );
};
