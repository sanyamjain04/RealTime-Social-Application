import { Chat_History } from '../../data'
import { DocMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline } from './message-type';

export interface ChatProps {
    type: string;
    message?: string;
    incoming?: boolean;
    outgoing?: boolean;
    text?: string;
    subtype?: string;
    img?: string;
    preview?: string;
    reply?: string;
} 

const Message = () => {
    const renderMessage = (chat: ChatProps) =>{
        switch (chat.type) {
            case 'divider':
                return <Timeline {...chat} />
            case 'msg':
                switch (chat.subtype) {
                    case 'img':
                        return <MediaMessage {...chat} />
                    case 'doc':
                        return <DocMessage {...chat} />
                    case 'link':
                        return <LinkMessage {...chat} />
                    case 'reply':
                        return <ReplyMessage {...chat} />
                    default:
                        return <TextMessage {...chat} />
                }
            default:
                break;
        }

    }
  return (
    <div className='p-3'>
        <div className='flex flex-col gap-2'>
            {Chat_History.map(chat=>{
                return renderMessage(chat)
            })}
        </div>
        
    </div>
  )
}

export default Message