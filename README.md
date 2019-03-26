# Yet Another Vue NS App

* A native application built with NativeScript-Vue & TypeScript
* Boilerplate for future work
* Debuggable with VS Code
* Showcase some of features like importing components, clipboard, sharing, toast, gestures etc.

## Usage

``` bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle

# Or run with VS Code, selecting one of build configurations
```

## Troubleshooting

If you have problems with first startup, change `devtool` property in `webpack.config.js` to `none`, run the app, and then change back to `source-map` or `eval-source-map`