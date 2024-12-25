'use client';

import { Input }                                                    from "@shared/shadcn/components/input";
import { InputOTP, InputOTPGroup, InputOTPSlot }                    from "@shared/shadcn/components/input-otp";
import { Button }                                   from "@shared/shadcn/components/button";
import { Tabs, TabsContent, TabsList, TabsTrigger }                        from "@shared/shadcn/components/tabs";
import { EnableNewYearUI } from "@features/new-year-ui";

export default function Home() {
    return (
        <div className='dark'>
            <Button
            >
                Продолжить
            </Button>

            <Input label={'Email'} className='mt-4 w-max'/>
            <Input label={'Email'} className='mt-4 w-max'/>
            <Input label={'Email'} className='mt-4 w-max'/>

            <InputOTP maxLength={3}>
                <InputOTPGroup className='mt-4'>
                    <InputOTPSlot index={0}/>
                    <InputOTPSlot index={1}/>
                    <InputOTPSlot index={2}/>
                </InputOTPGroup>
            </InputOTP>

            <Tabs defaultValue="account" className="w-[400px] mt-4 text-white">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
            <div className='mt-24'>
                <EnableNewYearUI/>
            </div>
        </div>
    );
}
