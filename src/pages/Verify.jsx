import React from "react";
import auth from "../../appwrite/auth";

function Verify() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const secret = urlParams.get("secret");
  console.log(userId, secret);
  async function handleVerification() {
    await auth.updateVerification(userId, secret);
  }
  handleVerification();
  return <></>;
}

export default Verify;
