import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "IMAGEN – AI Image Generator Platform",
        description: "Turn text to image in seconds. Unleash your creativity with AI. Built with React, Node.js, Express.js, MongoDB, and Razorpay.",
        roles: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay"],
        image: "/images/feature-work/feature-img-1.png",
        href: "https://imagen-frontend-xmyy.onrender.com/"
    },
    {
        title: "Dhritam.com – Know Your Stress",
        description: "A headband and shirt that watch your heart and brain. Featuring AGNA EEG and KAVACH ECG to monitor stress levels and health 24/7.",
        roles: ["Node.js", "Express.js", "MongoDB", "IoT", "HealthTech"],
        image: "/images/feature-work/feature-img-2.png",
        href: "https://dhritam.com/"
    },
    {
        title: "UTPT Portal – Student & Admin Login",
        description: "Role-based login portal for UTPT with a focused authentication flow for students and administrators.",
        roles: ["Frontend", "Authentication", "Dashboard"],
        image: "/images/feature-work/feature-img-3.png",
        href: "https://pawan-sahil-utpt.netlify.app/login"
    },
    {
        title: "Arivana – Business Website",
        description: "A clean and modern web presence showcasing services, brand story, and clear call-to-actions for visitors.",
        roles: ["Responsive UI", "Brand Website", "Web Design"],
        image: "/images/feature-work/feature-img-4.png",
        href: "https://arivana.site/"
    },
    {
        title: "UTPT Landing Page",
        description: "A lightweight landing page built to present the UTPT platform overview, highlights, and onboarding path.",
        roles: ["Landing Page", "HTML/CSS", "Static Hosting"],
        image: "/images/feature-work/feature-img-5.png",
        href: "https://pawankumar1099.github.io/utptLandingPage/"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};