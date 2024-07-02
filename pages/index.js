import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from 'next/router';
import CardExample from './CardExample';

export default function Home() {
    const router = useRouter();

    return (
        <div>
            <Header />
            <div style={{ textAlign: "center" }}>
                <h1 style={{ width: "560px", margin: "30px auto 20px auto" }}>Welcome to my Humble Project Bank</h1>
                <p style={{ width: "280px", margin: "30px auto 20px auto" }}>I hope you enjoy the features I made with different knowledge!</p>
            <CardExample />
            </div>
            <Footer />
        </div>
    );
}
