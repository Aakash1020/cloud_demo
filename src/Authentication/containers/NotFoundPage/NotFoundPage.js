import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Container, Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  section_mainstartpage: {
    display: "grid",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    backgroundColor: "#4f00ce",
  },
  paperStartPage: {
    display: "flex",
    zIndex: "1",
    textAlign: "center",
    flexDirection: "column",
    fontSize: "20px",
    padding: theme.spacing(3),
  },
}));
const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Animate /> */}
      <section className={classes.section_mainstartpage}>
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paperStartPage}>
            <h1>Get Started </h1>
            <Link to="/login">Sign in</Link>
          </Paper>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
