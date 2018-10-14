import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Consumer } from "../../context";
import { withStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
const styles = {
  card: {
    minWidth: 300,
    display: "inline-block",
    margin: "10px 5px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};
function Arrow(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </SvgIcon>
  );
}
class Contact extends Component {
  state = {
    showInfoContacts: false
  };
  CLoseHandler = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showInfoContacts } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <Typography variant="headline" component="h2">
                {name}{" "}
                <Arrow
                  onClick={() => {
                    this.setState({
                      showInfoContacts: !this.state.showInfoContacts
                    });
                  }}
                  style={{ cursor: "pointer" }}
                />
                <i
                  className={"fas fa-times"}
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.CLoseHandler.bind(this, id, dispatch)}
                />
              </Typography>
              {showInfoContacts ? (
                <ul>
                  <li>name : {name}</li>
                  <li>Email : {email}</li>
                  <li>phone : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default withStyles(styles)(Contact);
