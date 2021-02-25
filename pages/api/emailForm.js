import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  const {
    body: { email },
  } = req;

  var data = {
    submittedAt: new Date(),
    fields: [
      {
        name: "email",
        value: `${email}`,
      },
    ],
    context: {
      pageUri: "www.joinherd.us",
      pageName: "Landing page",
    },
  };

  var final_data = JSON.stringify(data);

  const formGuid = process.env.HUBSPOT_FORM_GUI;
  const portalId = process.env.HUBSPOT_PORTAL_ID;

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;
  const headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: final_data,
  };

  fetch(url, headers)
    .then((response) => response.json()) // one extra step
    .then((data) => {
      data.errors
        ? res.status(400).json({ errors: data.errors })
        : res.status(200).json({ data: data });
    });
};
