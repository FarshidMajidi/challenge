import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { DefaultTheme, makeStyles } from "@mui/styles";
import ImageIcon from "@mui/icons-material/Image";

interface IItemProps {
  item: {
    title: string;
    subTitle: string;
  };
  handleAddItem: () => void;
}

const useStyles = makeStyles((them: DefaultTheme) => ({
  cardContainer: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    padding: "4px",
  },
}));

export const Card = ({ item, handleAddItem }: IItemProps) => {
  const classes = useStyles();
  const { title, subTitle } = item;

  return (
    <Box className={classes.cardContainer} onClick={handleAddItem}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={subTitle} />
      </ListItem>
    </Box>
  );
};
