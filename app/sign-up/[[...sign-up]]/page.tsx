import { SignUp } from "@clerk/nextjs"
import React from 'react'

const SignUpPage = () => {
    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
            <div className="w-full max-w-[430px] mx-auto">
                <SignUp />
            </div>
        </div>
    )
}

export default SignUpPage