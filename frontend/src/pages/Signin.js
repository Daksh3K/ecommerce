import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Signin() {
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { user, userSignIn } = useContext(AuthContext);

  const handleUserSignIn = (e) => {
    e.preventDefault();
    userSignIn(phone, address);
  };

  return (
    <div>
      <div>Sign In</div>
      <div>
        <form
          onSubmit={(e) => {
            handleUserSignIn(e);
          }}
        >
          <input
            placeholder="phone number"
            type="tel"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            placeholder="address"
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <input type="submit" value="Sign In" />
        </form>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
}
