const core = require('@actions/core');
const github = require('@actions/github');
var request = require('request');

function prepareRequestObject() {
    var action = core.getInput('action');
    var namespace = core.getInput('namespace');
    var key = core.getInput('key');
    var token = core.getInput('token');
    if (!action) {
        action = 'Hit';
    }
    if (!namespace) {
        namespace = 'NameSpace';
    }
    if (!key) {
        key = 'Key';
    }
    if (!token) {
        token = null;
    }
    var headers = {
        'User-Agent': 'MyCounter Github Action',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    var options = {
        url: 'https://www.mycounter.app/api/v1/' + action + '/' + namespace + '/' + key,
        method: 'POST',
        headers: headers,
        form: {}
    }
    if (token) {
        options.form.Token = token;
    }
    return options;
}


function main() {
    try {
        var requestObject = prepareRequestObject();
        request(requestObject, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                remoteResponse = JSON.parse(body);
                if (remoteResponse.Status) {
                    core.setOutput('value', remoteResponse.Value);
                } else {
                    core.setFailed(remoteResponse.Message);
                }
            } else {
                core.setFailed(error.message);
            }
        })
    } catch (error) {
        core.setFailed(error.message);
    }
}

main();