import React, { useState } from "react";
import { Card } from "primereact/card";
import loginImg from "../images/signin.jpg";
import { Dropdown } from "primereact/dropdown";
import { connect } from "react-redux";
import { Button } from "primereact/button";
import { setAuthedUser } from "../actions/authedUser";
function Signin({ dispatch, users }) {
  const [selectedUser, setSelectedUser] = useState("");
  const onSignIn = () => {
    if (!selectedUser)
      return alert("You have to select a user in order to sign in");
    dispatch(setAuthedUser(selectedUser));
  };
  return (
    <div className="signinCard">
      <Card header={<img alt="Card" src={loginImg} />}>
        <h3>Pick a user to start the fun ...</h3>
        {Object.keys(users).length > 0 ? (
          <>
            <Dropdown
              value={selectedUser}
              options={Object.values(users).map((u) => ({
                label: u.name,
                value: u.id,
              }))}
              style={{ width: "100%" }}
              onChange={(e) => setSelectedUser(e.target.value)}
              placeholder="Select a user"
            />
            <div
              className="center"
              style={{ marginTop: "40px", marginBottom: "20px" }}
            >
              <Button
                label="Sign In"
                icon="pi pi-user"
                onClick={onSignIn}
                style={{ width: "70%", backgroundColor: "#00b2ff" }}
              />
            </div>
          </>
        ) : (
          // user didn't load yest show a spinner
          <div className="center">
            <i
              className="pi pi-spin pi-spinner"
              style={{ fontSize: "3em" }}
            ></i>
          </div>
        )}
      </Card>
    </div>
  );
}
const mapStateToProps = ({ users }) => ({ users });
export default connect(mapStateToProps)(Signin);
