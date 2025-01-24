'use strict';

try {
  module.exports.SwaggerUIBundle = require("./swagger-ui-bundle.js");
  module.exports.SwaggerUIStandalonePreset = require("./swagger-ui-standalone-preset.js");
} catch(e) {
}

// `absolutePath` and `getAbsoluteFSPath` are both here because at one point,
// we documented having one and actually implemented the other.
// They were both retained so we don't break anyone's code.
module.exports.absolutePath = require("./absolute-path.js");
module.exports.getAbsoluteFSPath = require("./absolute-path.js");
