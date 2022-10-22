"use strict";

module.exports.hello = function (event, context, callback) {

  const response =  {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };

  callback(null, response);
};

module.exports.post = function (event, context, callback) {

  const response =  {
    statusCode: 200,
    body:event.body,
  };

  callback(null, response);
};
