import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Frontend Developer Intern, Arivana Intelligence",
        location: "Mathura, India",
        startYear: "Aug 2025",
        endYear: "Sep 2025",
        bulletPoints: [
            "Led a team of 3 interns to develop 3+ responsive landing pages using React and Tailwind CSS.",
            "Improved website performance by 35% through UI optimization and faster component rendering.",
            "Increased user engagement by 25% through mobile-first design and improved UX practices."
        ]
    },
]

const educationData = [
    {
        date: "Aug 2024 - Present",
        title: "Bachelor of Technology - Computer Science and Engineering",
        subtitle: "GLA University — Mathura, India (CGPA: 7.7)"
    },
    {
        date: "Apr 2023 - Apr 2024",
        title: "Intermediate (Class XII)",
        subtitle: "Kanha Makhan Public School — Mathura, India (81%)"
    },
    {
        date: "Apr 2021 - Apr 2022",
        title: "High School (Class X)",
        subtitle: "Kanha Makhan Public School — Mathura, India (90%)"
    }
];

const projectOverview = {
    certifications: [
        {
            name: "HTML, CSS, JavaScript",
            issuer: "Infosys Springboard",
            year: "Issued: Not specified",
            url: "https://www.linkedin.com/company/783611/"
        },
        {
            name: "MongoDB Basics For Students",
            issuer: "MongoDB",
            year: "Issued: Apr 2026",
            url: "https://www.linkedin.com/in/pawankumar9aa/overlay/Certifications/1390283521/treasury/?profileId=ACoAAFA5qhkBdXGD5-bR36AoEZz2mbJr0DYL81M"
        },
        {
            name: "Shark Tank",
            issuer: "GLA University",
            year: "Issued: Jan 2026",
            url: "https://www.linkedin.com/in/pawankumar9aa/overlay/Certifications/1229635491/treasury/?profileId=ACoAAFA5qhkBdXGD5-bR36AoEZz2mbJr0DYL81M"
        },
        {
            name: "Certificate of Participation (Microsoft AgriTech Hack)",
            issuer: "Microsoft",
            year: "Issued: Not specified",
            url: "https://www.linkedin.com/in/pawankumar9aa/overlay/Certifications/1872326604/treasury/?profileId=ACoAAFA5qhkBdXGD5-bR36AoEZz2mbJr0DYL81M"
        },
        {
            name: "Certificate of Achievement",
            issuer: "GLA University",
            year: "Issued: Not specified",
            url: "https://www.linkedin.com/in/pawankumar9aa/overlay/Certifications/910315708/treasury/?profileId=ACoAAFA5qhkBdXGD5-bR36AoEZz2mbJr0DYL81M"
        },
        {
            name: "Java Intermediate (Credential ID: CC-IKM1Z5XW)",
            issuer: "Sololearn",
            year: "Issued: Not specified",
            url: "https://www.linkedin.com/in/pawankumar9aa/overlay/Certifications/1174379390/treasury/?profileId=ACoAAFA5qhkBdXGD5-bR36AoEZz2mbJr0DYL81M"
        },
        {
            name: "Introduction to Programming Using Java (Credential ID: CC-U76L4M3Y)",
            issuer: "Sololearn",
            year: "Issued: Not specified",
            url: "https://www.linkedin.com/in/pawankumar9aa/overlay/Certifications/1173476590/treasury/?profileId=ACoAAFA5qhkBdXGD5-bR36AoEZz2mbJr0DYL81M"
        }
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};