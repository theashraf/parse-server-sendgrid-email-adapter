# Parse Server Sendgrid Email Adapter

## Installation

```sh
npm install parse-server-sendgrid-email-adapter
```

## Usage

```javascript
const { ParseServer } = require('parse-server');
const sendGridAdapter = require('parse-server-sendgrid-email-adapter');

const config = {
  ...,
  emailAdapter: sendGridAdapter({
    apiKey: '', // sendgrid api key
    from: 'myApp <info@myApp.com>', // from email address,
    passwordResetEmailTemplate : '', // sendGrid template ID
    verificationEmailTemplate : '' // sendGrid template ID
  })
};

const parseServer = new ParseServer(config);
```
