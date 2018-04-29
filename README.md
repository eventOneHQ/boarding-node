# Boarding Node [![Build Status](https://travis-ci.org/Filiosoft/boarding-node.svg?branch=master)](https://travis-ci.org/Filiosoft/boarding-node) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![GitHub license](https://img.shields.io/github/license/Filiosoft/boarding-node.svg)](https://github.com/Filiosoft/boarding-node/blob/master/LICENSE) [![GitHub tag](https://img.shields.io/github/release/Filiosoft/boarding-node.svg)](https://github.com/Filiosoft/boarding-node)

A clone of [Fastlane Boarding](https://github.com/fastlane/boarding) built with Node.js!

# Why?
At Filiosoft, we are building a conference app platform and we needed a way to integrate TestFlight beta invites into the platform. [Fastlane Boarding](https://github.com/fastlane/boarding) was great but we use Node.js primarily. So we created a clone of it built in Node.js and then decided to open source it. 

# Getting Started

To get started, follow these steps:

* Click the deploy button below
* Enter your configuration
* Click "Deploy app"

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://www.heroku.com/deploy?template=https://github.com/filiosoft/boarding-node)

## Security

To secure your webpage, you only have to set the `AUTH_TOKEN` environment variable to any password.

* You can send your users the link and tell them the password
* You can send them the direct link including the token like this: https://url.com/?token=[password]

## Available environment variables

**Required:**

* `ITC_USER` iTunes Connect username
* `ITC_PASSWORD` iTunes Connect password
* `ITC_APP_ID` The Apple ID or Bundle Identifier of your app

**Optional:**

* `AUTH_TOKEN` Set a password to protect your website from random people signing up
* `PRIVACY_URL` If you want a link to a privacy policy to be shown on the invite page.
* `GA_PROPERTY_ID` If you want analytics, add your Google Analytics Property ID

## Custom Domain

With Heroku you can easily use your own domain, follow [this guide](https://devcenter.heroku.com/articles/custom-domains).

# Development Setup

1.  `npm install`
2.  Create a `.env` file with the following contents:

```
# Required
ITC_APP_ID=<your_app_id>
ITC_USER=<your_email>
ITC_PASSWORD=<your_password>

# Optional
ITC_APP_TESTER_GROUP=<your_group>
AUTH_TOKEN=<your_token>
GA_PROPERTY_ID=<your_ga_property_id>
PRIVACY_URL=<your_url>
```

3.  `npm run dev`

# License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file.

> This project is in no way affiliated with Apple Inc. This project is open source under the MIT license, which means you have full access to the source code and can modify it to fit your own needs.
