import PusherServer from "pusher";
import PusherClient from "pusher-js";

export const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.NEXT_PUSHER_APP_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: 'eu',
    useTLS: true
});

export const pusherClient = new PusherClient(
    "5db76edb5e810928eee8",
    {
        channelAuthorization: {
            endpoint: "/api/pusher/auth",
            transport: "ajax"
        },
        cluster: 'eu'
    }
)