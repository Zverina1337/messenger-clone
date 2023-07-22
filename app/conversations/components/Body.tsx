"use client";

import {FullMessageType} from "@/app/types";
import {useEffect, useRef, useState} from "react";
import useConversation from "@/app/hooks/useConversation";
import MessageBox from "@/app/conversations/components/MessageBox";
import requestManager from "@/app/fetcher";

interface BodyProps {
    initialMessages: FullMessageType[];
}
const Body: React.FC<BodyProps> = ({
    initialMessages
}) => {
    const [messages, setMessages] = useState(initialMessages);
    const bottomRef = useRef<HTMLDivElement>(null)

    const { conversationId } = useConversation()
    useEffect(() => {
        console.log(conversationId);
        requestManager(`/api/conversations/${conversationId}/seen`, "POST")
    }, [conversationId]);

    return (
        <div className="flex-1 overflow-y-auto">
            {messages.map((message, index) => {
                    return <MessageBox
                        isLast={index === messages.length - 1}
                        key={message.id}
                        data={message}
                    />
            })}
            <div ref={bottomRef} className="pt-24" />
        </div>
    );
};

export default Body;