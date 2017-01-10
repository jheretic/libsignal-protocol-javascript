var address = require("./SignalProtocolAddress.js");
var curve = require("./Curve.js");
var keyhelper = require("./KeyHelper.js");
var fingerprint = require("./NumericFingerprint.js");
var builder = require("./SessionBuilder.js");
var cipher = require("./SessionCipher.js");
var crypto = require("./crypto.js");
var manager = require("./curve25519_worker_manager.js");

var libsignal = libsignal || {};

libsignal = module.exports = exports = {
    SignalProtocolAddress: address.SignalProtocolAddress,
    Curve: curve.Curve,
    KeyHelper: keyhelper,
    FingerprintGenerator: fingerprint,
    SessionBuilder: builder.SessionBuilder,
    SessionCipher: cipher.SessionCipher,
    crypto: crypto.crypto,
    HKDF: crypto.HKDF,
    worker: manager
};
/*
(function(global, factory) {
    if (typeof define === 'function' && define["amd"])
        define(["bytebuffer"], factory);
    else if (typeof require === "function" && typeof module === "object" && module && module["exports"])
        module["exports"] = factory(require("bytebuffer"), true);
    else
        global["libsignal"] = factory(global["libsignal"]);
})(this, function(Signal){
    var s = {
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
    return s;
});
*/
