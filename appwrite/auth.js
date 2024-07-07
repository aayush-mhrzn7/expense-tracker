import { Account, Client, ID, OAuthProvider } from "appwrite";
import config from "../conifg/config";
class AppwriteAuthentication {
  client = new Client();
  account;
  constructor() {
    this.client
      .setProject(config.appwriteProjectId)
      .setEndpoint(config.appwriteUrl);
    this.account = new Account(this.client);
  }
  async signup({ email, password, name }) {
    try {
      return await this.account.create(ID.unique(), email, password, name);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("error: ", error);
    }
  }

  async googleOauth() {
    try {
      this.account.createOAuth2Session(
        OAuthProvider.Google,
        "http://localhost:5173/sucess",
        "http://localhost:5173/failed"
      );
      const session = await account.getSession("current");
      console.log(session.provider);
      console.log(session.providerUid);
      console.log(session.providerAccessToken);
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async forgotPassword({ email }) {
    try {
      return await this.account.createRecovery(email, "http://localhost:5173/");
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async updatePassword(userId, secret, { password, repassword }) {
    try {
      return await this.account.updateRecovery(
        userId,
        secret,
        password,
        repassword
      );
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async verification() {
    try {
      return await this.account.createVerification(
        "http://localhost:5173/verify"
      );
    } catch (error) {
      console.log("error: ", error);
    }
  }
  async updateVerification(userId, secret) {
    try {
      return await this.account.updateVerification(userId, secret);
    } catch (error) {
      console.log("error: ", error);
    }
  }
}
