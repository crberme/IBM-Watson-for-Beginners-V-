var PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3');
var { IamAuthenticator } = require('ibm-watson/auth');

var personalityInsights = new PersonalityInsightsV3({
  version: '{version}',
  authenticator: new IamAuthenticator({
    apikey: '{apikey}',
  }),
  url: '{url}',
});

var profileParams = {
  // Get the content from the JSON file.
  content: require('./input.json'),
  content_type: 'application/json',
  consumption_preferences: true,
  raw_scores: true
};

personalityInsights.profile(profileParams, function(error, profile) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(profile, null, 2));
  }
});