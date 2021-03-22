import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../ducks/user.duck";
import { logout } from "../../ducks/auth.duck";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Container,
  Paper,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    marginTop: theme.spacing(4),
    backgroundColor: "#2b1157",
  },
  linktext: {
    textDecoration: "none",
  },
  Profilepage_body: {
    display: "grid",
    placeItems: "center",
    width: "100%",
    margin: "0",
    height: "100vh",
    padding: "0",
    backgroundColor: "#4f00ce",
  },
}));

const ProfilePage = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleLogout = () => {
    const { history } = props;
    dispatch(logout())
      .then(() => history.push("/login"))
      .catch(() => {});
  };

  const fullName = currentUser && currentUser.displayName;
  const firstLetterName = fullName ? fullName.charAt(0) : null;
  const email = currentUser && currentUser.email;

  return (
    <>
      <div className={classes.Profilepage_body}>
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>{firstLetterName}</Avatar>
            <Typography component="h1" variant="h5">
              {fullName}
            </Typography>
            <Typography color="textSecondary">{email}</Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<ExitToApp />}
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
            <Link to="/dashboard" className={classes.linktext}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<ExitToApp />}
              >
                Enter Dashboard
              </Button>
            </Link>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default ProfilePage;
