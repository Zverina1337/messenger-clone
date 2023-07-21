import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import { EmptyState } from "@/app/components/EmptyState";
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
                Conversation Id!
            </div>
        </div>
    )
}

export default ConversationId;