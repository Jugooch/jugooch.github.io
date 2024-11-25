"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, Briefcase, GraduationCap, ChevronDown, Code, Palette, Database, Cloud } from 'lucide-react';
import { useState } from 'react';

const skills = {
    Frontend: [
        "Flutter",
        "React/Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Angular",
        "Bootstrap",
    ],
    "UI/UX": [
        "Figma",
        "Adobe Creative Cloud",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Web Design",
    ],
    Languages: [
        "C#",
        "Java",
        "JavaScript",
        "TypeScript",
        "Dart",
        "SQL",
        "HTML",
        "CSS",
    ],
    "Backend/Databases": [
        "Node.js",
        "Spring Boot",
        "ASP.NET",
        "RESTful APIs",
        "MongoDB",
        "Firebase",
        "MySQL",
    ],
    "Cloud & DevOps": [
        "Azure",
        "CI/CD",
        "Git",
        "Heroku",
    ],
};

const experience = [
    {
        company: "Reynolds and Reynolds",
        title: "Software Developer",
        period: "Aug 2024 - Present",
        achievements: [
            "Contributed to a full-stack web application utilized by thousands of car dealerships",
            "Utilized C# for backend development and Vue.js for frontend development",
            "Engaged in full-stack software development including API integrations",
            "Collaborated with designers and developers through code reviews",
            "Used debugging and these reviews to continuously improve the application"
        ]
    },
    {
        company: "ClearStack AI",
        title: "Contract - UI/UX Developer",
        period: "May 2024 - Present",
        achievements: [
            "Led development of company's main landing page using Vue.js",
            "Interfaced directly with clients to gather requirements",
            "Contributed to the implementation of the company's CI/CD Pipeline",
            "Researched how AI can be utilized to improve UI/UX and Frontend flows"
        ]
    },
    {
        company: "Kinective",
        title: "Software Development Intern",
        period: "Oct 2022 - Aug 2023",
        achievements: [
            "Helped establish a company design system that improved frontend development flows",
            "Utilized Vue, Java, and Selenium to create an internal QA automation application",
            "Built an internal scheduling tool that helped organize QA processes",
            "Learned directly from the leads of the frontend, backend, and design teams"
        ]
    },
];

const education = [
    {
        degree: "Bachelor of Science in Software Development (Minor in Web Design)",
        school: "Grand Canyon University",
        period: "2021 - 2024",
        details: "Focus on full-stack development and software engineering principles",
        coursework: [
            "C# I, II & III",
            "Java I, II & III",
            "Database Fundamentals",
            "Cloud Computing",
            "Data Structures and Algorithms",
            "Web Development I & II",
            "Web Design I & II",
            "Agile Project Management"
        ]
    },
    {
        degree: "Associate of Arts in Computer Science",
        school: "Hill College",
        period: "2020 - 2021",
        details: "Foundation in programming fundamentals and computer science",
        coursework: [
            "C++ I & II",
            "BIMS I & II",
            "Assembly I"
        ]
    }
];

function SkillCategory({ title, skills, icon: Icon }: {
    title: string;
    skills: string[];
    icon: any;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border"
        >
            <div className="flex items-center gap-2 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2"
                    >
                        <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{skill}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

function ExperienceCard({ job, isOpen, onClick }: {
    job: typeof experience[0];
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            layout
            onClick={onClick}
            className="relative p-6 rounded-lg bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border hover:border-primary/50 cursor-pointer group h-fit"
        >
            <motion.div layout className="flex justify-between items-start">
                <div>
                    <motion.h3 layout className="text-xl font-semibold mb-1">{job.company}</motion.h3>
                    <motion.div layout className="text-muted-foreground">
                        <p className="font-medium">{job.title}</p>
                        <p className="text-sm">{job.period}</p>
                    </motion.div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 mt-4 overflow-hidden"
                    >
                        {job.achievements.map((achievement, i) => (
                            <motion.li
                                key={i}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-sm"
                            >
                                <span className="text-primary">•</span>
                                {achievement}
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function EducationCard({ edu, isOpen, onClick }: {
    edu: typeof education[0];
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <motion.div
            layout
            onClick={onClick}
            className="relative p-6 rounded-lg bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border hover:border-primary/50 cursor-pointer group h-fit"
        >
            <motion.div layout className="flex justify-between items-start">
                <div>
                    <motion.h3 layout className="text-xl font-semibold mb-1">{edu.degree}</motion.h3>
                    <motion.div layout className="text-muted-foreground">
                        <p className="font-medium">{edu.school}</p>
                        <p className="text-sm">{edu.period}</p>
                    </motion.div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-4 overflow-hidden"
                    >
                        <p className="text-sm text-muted-foreground">{edu.details}</p>
                        <div>
                            <h4 className="text-sm font-semibold mb-2">Relevant Coursework:</h4>
                            <ul className="grid grid-cols-2 gap-2">
                                {edu.coursework.map((course, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-2 text-sm"
                                    >
                                        <span className="text-primary">•</span>
                                        {course}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function DetailedAbout() {
    const [openExperience, setOpenExperience] = useState<number | null>(null);
    const [openEducation, setOpenEducation] = useState<number | null>(null);

    const skillIcons = {
        Frontend: Code,
        "UI/UX": Palette,
        "Backend/Databases": Database,
        "Cloud & DevOps": Cloud,
        Languages: Code,
    };

    return (
        <div className="min-h-screen py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-20"
                >
                    {/* Skills Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gradient mb-8 flex items-center gap-2">
                            <BadgeCheck className="w-8 h-8" />
                            Skills & Technologies
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(skills).map(([category, skillList]) => (
                                <SkillCategory
                                    key={category}
                                    title={category}
                                    skills={skillList}
                                    icon={skillIcons[category as keyof typeof skillIcons]}
                                />
                            ))}
                        </div>
                    </section>

                    {/* Work Experience Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gradient mb-8 flex items-center gap-2">
                            <Briefcase className="w-8 h-8" />
                            Work Experience
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 auto-rows-min">
                            {experience.map((job, index) => (
                                <ExperienceCard
                                    key={index}
                                    job={job}
                                    isOpen={openExperience === index}
                                    onClick={() => setOpenExperience(openExperience === index ? null : index)}
                                />
                            ))}
                        </div>
                    </section>

                    {/* Education Section */}
                    <section>
                        <h2 className="text-3xl font-bold text-gradient mb-8 flex items-center gap-2">
                            <GraduationCap className="w-8 h-8" />
                            Education
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 auto-rows-min">
                            {education.map((edu, index) => (
                                <EducationCard
                                    key={index}
                                    edu={edu}
                                    isOpen={openEducation === index}
                                    onClick={() => setOpenEducation(openEducation === index ? null : index)}
                                />
                            ))}
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}