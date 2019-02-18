# React Greeting [![npm version](https://img.shields.io/npm/v/react-greeting.svg?style=flat)](https://www.npmjs.com/package/react-greeting) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lightsound/react-greeting/blob/master/LICENSE) [![Build Status](https://dev.azure.com/lightsound/MyApps/_apis/build/status/lightsound.azure-pipelines-test?branchName=master)](https://dev.azure.com/lightsound/MyApps/_build/latest?definitionId=1&branchName=master)

This is a simple component only just display "Hello, foo".

## Install

```bash
yarn add react-greeting
```

## Sample

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Greeting from "react-greeting";

ReactDOM.render(
  <Greeting text="React" />,
  document.getElementById("root")
);
```

## LICENSE

MIT
