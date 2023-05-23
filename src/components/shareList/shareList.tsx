import { List, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { Tag } from "./tag";
import { removeItem } from "features/shareSlice";

const useStyles = makeStyles((them: DefaultTheme) => ({
  shareContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "4px",
    width: "30%",
    padding: "12px",
  },
}));

export const ShareList = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.list);
  const { list } = state;

  return (
    <Paper className={classes.shareContainer}>
      <List
        sx={{
          width: "100%",
          overflowX: "hidden",
          overflowY: "scroll",
          height: 754,
          maxHeight: 754,
          paddingTop: 0,
          paddingBottom: 0,
          "& ul": { padding: 0 },
        }}
      >
        {list &&
          list.map((item, index) => {
            return (
              <Tag
                key={index}
                item={item}
                remove={() =>
                  dispatch(removeItem(item))
                }
              />
            );
          })}
      </List>
    </Paper>
  );
};
