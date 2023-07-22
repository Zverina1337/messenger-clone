import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import { EmptyState } from "@/app/components/EmptyState";
import { Header } from "@/app/conversations/components/Header"
import Body from "@/app/conversations/components/Body";
import Form from "@/app/conversations/components/Form";

interface Params {
    conversationId: string;
}

const ConversationId = async ({ params } : { params: Params }) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMessages(params.conversationId);

    if (!conversation) {
        return (
            <div className="lg:pl-80 h-full">
                <div className="h-full flex flex-col">
                    <h1>
                        <EmptyState/>
                    </h1>
                </div>
            </div>
        )
    }

    return (
        <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
                <Header conversation={conversation} />
                <Body initialMessages={messages} />
                <Form />
            </div>
        </div>
    )
}

export default ConversationId;