import { EnableNewYearUI } from "@features/new-year-ui";
import { Chat }            from "@shared/ui/chat/ui";

export default function Home() {
    return (
        <div className='dark' vaul-drawer-wrapper="">
            <div className='flex flex-col'>
                <EnableNewYearUI/>
                <Chat/>
            </div>
        </div>
    );
}
