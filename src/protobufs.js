/* vim: ts=4:sw=4 */
ProtoBuf = require("protobufjs");
files = require("../build/protoText.js");

exports.protobuf = function() {
    'use strict';

    function loadProtoBufs(filename) {
        return ProtoBuf.loadProto(files.protoText['protos/' + filename]).build('textsecure');
    }

    var protocolMessages = loadProtoBufs('WhisperTextProtocol.proto');

    return {
        WhisperMessage            : protocolMessages.WhisperMessage,
        PreKeyWhisperMessage      : protocolMessages.PreKeyWhisperMessage
    };
}();
