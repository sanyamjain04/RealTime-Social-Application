import ConversationHeader from "./Conversation-header"
import ConversationInput from "./conversation-input"
import ConversationMessages from "./conversation-messages"

const Conversation = () => {
  return (
    <div className="w-[calc(100vw-100px-20rem)] h-screen flex flex-col dark:bg-dark">
        <ConversationHeader />
        <ConversationMessages />
        <ConversationInput />

    </div>
  )
}

export default Conversation