import React from "react";

interface HomeProps {
    message: string
    picture: string
}

export default function Home({message, picture}:HomeProps) {
    return (
        <>
            <img src={picture} />
            {message}
        </>
    )
}