import { EnableNewYearUI } from "@features/new-year-ui";
import { AuthModal }       from "@features/session";

export default function Home() {
    return (
        <div className='dark' vaul-drawer-wrapper="">
            <div className='mt-24 flex flex-col'>
                <EnableNewYearUI/>
                <AuthModal/>
            </div>
        </div>
    );
}
