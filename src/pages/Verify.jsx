import React from "react";
import auth from "../../appwrite/auth";

async function Verify() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const secret = urlParams.get("secret");
  console.log(userId, secret);
  await auth.updateVerification(userId, secret);
  return <></>;
}
Verify();
export default Verify;
