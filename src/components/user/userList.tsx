import { ChangeEvent, useCallback, useState } from "react";
import {
  InputAdornment,
  List,
  OutlinedInput,
  Paper,
  Button,
  Box,
} from "@mui/material";
import { Card } from "../card";
import { useAppSelector } from "store/hooks";
import { DefaultTheme, makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "store/hooks";
import { searchByName } from "features/userSlice";
import { addItem, clearList } from "features/shareSlice";
import { debounce } from "lodash";

const useStyles = makeStyles((them: DefaultTheme) => ({
  userContainer: {
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

export const UserList = () => {
  const classes = useStyles();
  const state = useAppSelector((state) => state.users);
  const [, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const { filterUsers } = state;

  const handleSearch = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      dispatch(searchByName(value));
      setSearch(value);
    }, 1000),
    []
  );

  return (
    <Paper className={classes.userContainer}>
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
        {filterUsers &&
          filterUsers.map((item, index) => {
            return (
              <Card
                key={index}
                item={{
                  title: item.username,
                  subTitle: item.email,
                }}
                handleAddItem={() =>
                  dispatch(addItem({ id: item.id, title: item.username }))
                }
              />
            );
          })}
      </List>

      <Box className={classes.footer}>
        <Button
          variant="contained"
          size="small"
          sx={{
            cursor: "pointer",
            height: "36px",
            fontSize: "16px",
            margin: "auto",
            width: "100%",
          }}
          onClick={() => dispatch(clearList())}
        >
          CLEAR LIST
        </Button>
      </Box>
    </Paper>
  );
};
