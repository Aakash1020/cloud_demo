import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../ducks/auth.duck";
import { makeStyles, Container, Avatar, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { LoginForm } from "../../forms";
import Animate from "./Animate";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "100vh",
    width: "100%",
    display: "grid",
    alignItems: "center",
  },
  paper: {
    zIndex: "1",
    backgroundColor: "white",
    padding: "30px",
    display: "flex",
    boxShadow: "0px 5px 40px rgba(0, 0, 0,0.5)",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const { loginInProgress, loginError } = useSelector((state) => state.auth);
  const classes = useStyles();

  const handleSubmit = (values) => {
    const { email, password } = values;
    const { history } = props;
    dispatch(login(email, password))
      .then(() => history.push("/profile"))
      .catch(() => {
        /*Already handled */
      });
  };

  return (
    <>
      <Animate />
      <section>
        <Container component="main" maxWidth="xs" className={classes.section}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <LoginForm
              onSubmit={handleSubmit}
              inProgress={loginInProgress}
              onError={loginError}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default LoginPage;
