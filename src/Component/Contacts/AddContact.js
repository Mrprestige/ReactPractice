import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { Consumer } from "../../context";
import uuid from "uuid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    direction: "ltr"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  BTN: {
    marginTop: "20px"
  }
});

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    this.setState({ name: "", email: "", phone: "" });
  };
  render() {
    const { classes } = this.props;
    const { name, phone, email } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <Grid container spacing={0}>
                <Grid container justify={"center"} item xs={12}>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}>
                      <form
                        action=""
                        onSubmit={this.onSubmit.bind(this, dispatch)}
                      >
                        <TextField
                          id="standard-dense"
                          label="Name"
                          name="name"
                          className={classNames(classes.textField)}
                          margin="dense"
                          value={name}
                          onChange={this.onChange}
                        />
                        <TextField
                          id="standard-dense"
                          label="E-mail"
                          name="email"
                          className={classNames(classes.textField)}
                          margin="dense"
                          value={email}
                          onChange={this.onChange}
                        />
                        <TextField
                          id="standard-dense"
                          label="phone"
                          className={classNames(classes.textField)}
                          margin="dense"
                          value={phone}
                          name="phone"
                          onChange={this.onChange}
                        />
                        <Grid container justify={"center"} item xs={12}>
                          <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            className={classes.BTN}
                          >
                            جدید
                          </Button>
                        </Grid>
                      </form>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default withStyles(styles)(AddContact);
