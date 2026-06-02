"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectOverview = () => {
    const [projectData, setProjectData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setProjectData(data?.projectOverview)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])
    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16 ">
                        <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
                            <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">Certifications</p>
                            <div className="flex flex-col gap-4">
                                {projectData?.certifications?.length ? (
                                    projectData.certifications.map((value: any, index: number) => (
                                        <Link
                                            key={index}
                                            href={value?.url || "#"}
                                            target={value?.url && value.url !== "#" ? "_blank" : undefined}
                                            className="group flex items-start justify-between gap-4"
                                        >
                                            <div className="flex flex-col gap-1">
                                                <h4>{value?.name}</h4>
                                                <p className="text-sm text-primary/70">{value?.issuer} • {value?.year}</p>
                                            </div>
                                            {value?.url && value.url !== "#" ? (
                                                <Image
                                                    src={"/images/icon/tile-arrow-icon.svg"}
                                                    alt="tile-icon"
                                                    width={24}
                                                    height={24}
                                                    className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                                                />
                                            ) : null}
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-primary/70">Add your certifications in the page data API.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectOverview