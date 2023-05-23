import { Box, Typography } from "@mui/material";
import { DefaultTheme, makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";

interface ITag {
  id: number;
  title: string;
}

interface ITagProps {
  item: ITag;
  remove: () => void;
}

const useStyles = makeStyles((theme: DefaultTheme) => ({
  tagContainer: {
    display: "flex",
    flex: "0 0 auto",
    alignItems: "center",
    height: "25px",
    backgroundColor: "#1565C0",
    borderTopRightRadius: "84px",
    borderBottomRightRadius: "84px",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    margin: "2px",
    overflow: "hidden",
  },
  wrapperIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    backgroundColor: "#1565C0",
    cursor: "pointer",
    borderRight: "1px solid #e1e1e1",
  },
}));

export const Tag = ({ remove, item }: ITagProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.tagContainer}>
      <Box className={classes.wrapperIcon} onClick={remove}>
        <CloseIcon
          sx={{
            fontSize: "14px",
            color: "#fff",
          }}
        />
      </Box>

      <Typography
        variant="caption"
        fontSize={"0.8rem"}
        color={"#fff"}
        fontWeight={400}
        paddingX={"8px"}
        paddingY={"4px"}
      >
        {item.title}
      </Typography>
    </Box>
  );
};
