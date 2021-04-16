const axios = require('axios');

const getOrgByEventUserPromise = async (event) => {
  var urlLocal = 'https://jsonplaceholder.typicode.com/posts';
  return axios.get(urlLocal + `/${event.userid}`)
  .then( orgData => orgData.data.title);
};

const event = { properties: { organizationId: "ip_43A43232R3243EW342WF43FE43" }, userid: "5" };

const addGlobals = async (event) => {
return getOrgByEventUserPromise(event)
.then(data => Object.assign({}, event, { data }))
    .catch(e => {
      console.log('something bad', e.message || e);
    });
};

const displayGlobals = async (event) => {
 //console.log(await addGlobals(event));
  addGlobals(event).then(console.log);
}

displayGlobals(event);