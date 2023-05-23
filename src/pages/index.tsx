import  { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { fetchUsers } from "features/userSlice";
import { Grid } from "@mui/material";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { UserList } from "components/user/userList";
import { ProductList } from "components/product/productList";
import { fetchProducts } from "features/productSlice";
import { ShareList } from "components/shareList/shareList";

const useStyles = makeStyles((them: DefaultTheme) => ({
  homeContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100% !important",
    minHeight: "100vh",
    backgroundColor: "#c7c7c7",
  },
}));

export const Home = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());
  }, []);

  return (
    <Grid container flexDirection={"row"} className={classes.homeContainer}>
      <UserList />
      <ProductList />
      <ShareList />
    </Grid>
  );
};
