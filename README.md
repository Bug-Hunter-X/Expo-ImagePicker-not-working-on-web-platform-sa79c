# Expo ImagePicker Web Platform Issue

This repository demonstrates a bug where the Expo ImagePicker component fails to function correctly on web platforms due to its reliance on native modules.  The issue manifests as a crash or failure of the image picker to work.  A solution is provided that uses a different approach for handling image selection in web environments.

## Bug

The `bug.js` file shows an example of how using the Expo ImagePicker component directly in a React Native web application will result in an error.

## Solution

The `bugSolution.js` file demonstrates a working solution that leverages the browser's native file input for image selection in web environments.  It provides a fallback mechanism for the Expo ImagePicker, ensuring image selection functionality across all platforms.