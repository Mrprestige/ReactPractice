import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import Button from "@material-ui/core/Button";

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
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };
  static defaultProps = {
    name: "Mohsen",
    email: "Mrprestige344@gmail.com",
    phone: "09194682527"
  };
  render() {
    const { classes } = this.props;
    const { name, phone, email } = this.props;
    return (
      <div>
        <Grid container spacing={0}>
          <Grid container justify={"center"} item xs={12}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <form action="" onSubmit={this.onSubmit}>
                  <TextField
                    id="standard-dense"
                    label="Name"
                    name="name"
                    className={classNames(classes.textField)}
                    margin="dense"
                    defaultValue={name}
                    inputRef={this.nameInput}
                  />
                  <TextField
                    id="standard-dense"
                    label="E-mail"
                    name="email"
                    className={classNames(classes.textField)}
                    margin="dense"
                    defaultValue={email}
                    inputRef={this.emailInput}
                  />
                  <TextField
                    id="standard-dense"
                    label="phone"
                    className={classNames(classes.textField)}
                    margin="dense"
                    defaultValue={phone}
                    name="phone"
                    inputRef={this.phoneInput}
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
  }
}
export default withStyles(styles)(AddContact);
