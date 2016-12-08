var address = require("./SignalProtocolAddress.js");
var curve = require("./Curve.js");
var keyhelper = require("./KeyHelper.js");
var fingerprint = require("./NumericFingerprint.js");
var builder = require("./SessionBuilder.js");
var cipher = require("./SessionCipher.js");
var crypto = require("./crypto.js");
var manager = require("./curve25519_worker_manager.js");

  module.exports = exports = {
      SignalProtocolAddress: address.SignalProtocolAddress,
      Curve: curve.Curve,
      KeyHelper: keyhelper,
      FingerprintGenerator: fingerprint,
      SessionBuilder: builder.SessionBuilder,
      SessionCipher: cipher.SessionCipher,
      crypto: crypto.crypto,
      HKDF: crypto.HKDF,
      worker: manager
  }
/*
(function(global) {
  global.libsignal = module.exports = exports = {
      SignalProtocolAddress: address.SignalProtocolAddress,
      Curve: curve.Curve,
      KeyHelper: keyhelper.KeyHelper,
      FingerprintGenerator: fingerprint.FingerprintGenerator,
      SessionBuilder: builder.SessionBuilder,
      SessionCipher: cipher.SessionCipher,
      crypto: crypto.crypto,
      HKDF: crypto.HKDF,
      worker: manager.worker
  }
})(this);
*/
