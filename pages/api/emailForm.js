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

//   xhr.open('POST', url);
//   // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
//   xhr.setRequestHeader('Content-Type', 'application/json');

//   xhr.onreadystatechange = function() {
//       if(xhr.readyState == 4 && xhr.status == 200) {
//           alert(xhr.responseText); // Returns a 200 response if the submission is successful.
//       } else if (xhr.readyState == 4 && xhr.status == 400){
//           alert(xhr.responseText); // Returns a 400 error the submission is rejected.
//       } else if (xhr.readyState == 4 && xhr.status == 403){
//           alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
//       } else if (xhr.readyState == 4 && xhr.status == 404){
//           alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
//       }
//      }

//   // Sends the request

//   xhr.send(final_data)
// }
