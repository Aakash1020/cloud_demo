import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
// import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  section_settings: {
    display: "grid",
    placeItems: "center",
    width: "auto",
    // backgroundColor: "red",
    height: "100vh",
  },

  input: {
    "& > *": {
      margin: "10px 0px",
      width: "100%",
    },
  },
  input_div: {
    display: "flex",
    flexDirection: "column",
  },

  paper_style: {
    width: "450px",
    padding: "20px 30px",
    height: "400px",
  },
  upload_button: {
    overflow: "hidden",
    outline: "none",
    border: "none",
  },
  span: {
    color: "red",
  },
}));

export default function Settings() {
  const [url, setUrl] = useState();
  const [email, setEmail] = useState();
  const [file, setFile] = useState();

  const send = (e) => {
    const data = new FormData();
    data.append("URL", url);
    data.append("Email", email);
    data.append("file", file);

    axios
      .post("http://localhost:3000/upload", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const classes = useStyles();
  const pageZoom = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 0.95,
    },
  };
  const pageTransition = {
    type: "tween",
    duration: 0.3,
  };
  const handleClick = () => {
    window.alert("You are Authenticated");
    send();
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageZoom}
      transition={pageTransition}
    >
      <section className={classes.section_settings} id="settings">
        <div>
          <Paper className={classes.paper_style} elevation={3}>
            <form action="#">
              <div className={classes.input_div}>
                <label htmlFor="URL">
                  URL<span className={classes.span}>*</span>
                </label>
                <TextField
                  label="URL"
                  variant="outlined"
                  className={classes.input}
                  type="text"
                  id="URL"
                  onChange={(event) => {
                    const { value } = event.target;
                    setUrl(value);
                  }}
                />
              </div>
              <div className={classes.input_div}>
                <label htmlFor="Email">
                  Email<span className={classes.span}>*</span>
                </label>
                <TextField
                  label="Email"
                  variant="outlined"
                  className={classes.input}
                  type="text"
                  id="Email"
                  onChange={(event) => {
                    const { value } = event.target;
                    setEmail(value);
                  }}
                />
              </div>
              <div className={classes.input_div}>
                <label htmlFor="file">
                  Upload <span className={classes.span}>JSON</span> file for
                  check<span className={classes.span}>*</span>
                </label>
                <TextField
                  variant="outlined"
                  className={classes.input}
                  type="file"
                  id="file"
                  accept=".json"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    setFile(file);
                  }}
                />
              </div>
            </form>
            <Button
              variant="contained"
              color="default"
              className={classes.upload_button}
              startIcon={<CloudUploadIcon />}
              onClick={handleClick}
            >
              Send
            </Button>
          </Paper>
        </div>
      </section>
    </motion.div>
  );
}
