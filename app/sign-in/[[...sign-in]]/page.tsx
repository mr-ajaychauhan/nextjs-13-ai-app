import React from 'react'
import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
            <div className="w-full max-w-[400px] mx-auto">
                <SignIn />
            </div>
        </div>
    )
}

export default SignInPage