const { auth } = require("express-oauth2-jwt-bearer");
const dotenv = require("dotenv");

dotenv.config();

const issuerBaseURL = `https://${process.env.AUTH0_DOMAIN}`;
const audience = process.env.AUTH0_AUDIENCE
console.log(`1 ${issuerBaseURL}`)
console.log(`2 ${audience}`)
const validateAccessToken = auth({
  issuerBaseURL: issuerBaseURL,
  audience: audience,
  tokenSigningAlg: "RS256",
});

module.exports = {
  validateAccessToken,
};

