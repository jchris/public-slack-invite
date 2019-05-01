const { parse } = require('querystring');
const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const formData = parse(Buffer.from(event.body, 'base64').toString())
    console.log("SLACK_LEGACY_TOKEN", process.env.SLACK_LEGACY_TOKEN)
    console.log("formData", formData)
    const email = formData.email.trim();
    const baseURL = "https://slack.com/api/users.admin.invite"
    const toSlack = `email=${encodeURIComponent(email)}&token=${SLACK_LEGACY_TOKEN}&set_active=true`;
    const response = axios.get(`${baseURL}?${toSlack}`)
    console.log(response);

    // if (res.statusCode !== 200) {
    //   console.error(res);
    //   return { statusCode: 500, body: "error with slack api" }
    // } else {
    //
    // }

    const subject = event.queryStringParameters.name || "World"
    return { statusCode: 200, body: JSON.stringify({ msg: `Hello ${subject}` }) }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
