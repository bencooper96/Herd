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

  const formGuid = "78fa930e-8e7d-4812-8b9e-0561a670c962";
  const portalId = 8611494;

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
