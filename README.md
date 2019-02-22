# React Native 101: Camera Roll

An exercise for my React Native 101 challenge, include Photo Library access and Unsplash image browser.
Please replace your Unsplash developer API key on `YOURAPPID` on `ImageBrowser.js` file to fetch images.

# Getting Started

1. Clone this repo unto your local machine
2. cd into the repo
3. run `yarn` to install the dependencies
4. run `react-native link` to link your dependencies
5. Run on your iOS or Android simulator using `react-native run-ios` or `react-native run-android` respectively.
6. If you cannot run this project, try to "super clean" here:
```watchman watch-del-all && \
rm -rf node_modules && \
rm -rf /tmp/metro-bundler-cache-* && \
rm -rf /tmp/haste-map-react-native-packager-* && \
yarn