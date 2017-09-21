require('dotenv').config();

module.exports = {
    witToken : process.env.WIT_TOKEN,
    slackToken : process.env.SLACK_TOKEN,
    slackLogLevel: 'verbose',
    serviceTimeout: 30
};