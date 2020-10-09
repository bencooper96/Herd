//https://www.youtube.com/watch?v=Rzlop3Bgk1Q&ab_channel=UriKlar
import axios from "axios";
// var md5 = require("md5");

function getRequestParams(md5Email, firstName, lastName, zipCode, betaTester) {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

  const url =
    "https://" +
    DATACENTER +
    ".api.mailchimp.com/3.0/lists/" +
    LIST_ID +
    "/members/" +
    md5Email;
  const data = {
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
      ZIPCODE: zipCode,
      BTEST: betaTester,
    },
  };

  const base64ApiKey = Buffer.from("Ben:" + API_KEY).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Basic " + base64ApiKey,
  };
  return { url, data, headers };
}

export default async (req, res) => {
  const { md5Email, firstName, lastName, zipCode, betaTester } = req.body;

  const { url, data, headers } = getRequestParams(
    md5Email,
    firstName,
    lastName,
    zipCode,
    betaTester
  );

  if (
    !firstName ||
    !firstName.length ||
    !lastName ||
    !lastName.length ||
    !zipCode ||
    !zipCode.length
  ) {
    return res.status(400).json({ error: "Please fill out all of the fields" });
  }

  try {
    const response = await axios.put(url, data, { headers });
    //Success
    return res.status(201).json({ error: betaTester });
  } catch (error) {
    return res.status(400).json({
      error:
        "Oops, something went wrong...send us an email at HeardByHerd@gmail.com to be added to the list",
    });
  }
};
