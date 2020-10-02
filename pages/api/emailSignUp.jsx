//https://www.youtube.com/watch?v=Rzlop3Bgk1Q&ab_channel=UriKlar
import axios from "axios";

function getRequestParams(email) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  //Mailchimp API keys have a similar format that end with "-us6" or something similar
  //This is the data center; to pull this out of the API KEY string, we use this:
  const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

  const url =
    "https://" +
    DATACENTER +
    ".api.mailchimp.com/3.0/lists/" +
    LIST_ID +
    "/members";
  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from("Ben:" + API_KEY).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic " + base64ApiKey,
  };
  return { url, data, headers };
}

export default async (req, res) => {
  const { email } = req.body;
  if (!email || !email.length) {
    return res.status(400).json({ error: "Please enter your email" });
  }

  try {
    const { url, data, headers } = getRequestParams(email);
    console.log(headers);
    const response = await axios.post(url, data, { headers });

    //Success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error:
        "Oops, something must have went wrong...send us an email at HeardByHerd@gmail.com to be added",
    });
  }
};
