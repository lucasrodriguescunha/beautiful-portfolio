import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();

    const frontendSkills = [
        "HTML",
        "CSS",
        "SASS",
        "Bootstrap",
        "Tailwind CSS",
        "Prime NG",
        "Prime React",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular"
    ];

    const backendSkills = [
        "Python",
        "Java",
        "Kotlin",
        "Spring",
        "Flyway"
    ];

    const devOpsSkills = [
        "AWS",
        "Docker",
        "Git",
        "GitHub",
        "GitLab",
        "Jenkins"
    ];

    const sgbdsSkills = [
        "PostgreSQL",
        "MySQL",
        "MongoDB"
    ];

    const testsSkills = [
        "Jest",
        "JUnit",
        "Jasmine/Karma"
    ];

    const messagingsSkills = [
        "RabbitMQ",
        "Apache Kafka"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                    >
                        {t('about_me')}
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y transition-all">
                        <p className="text-gray-300 mb-6">
                            {t('passion')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                                <div className="flex flex-wrap gap-2"
                                >
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend </h3>
                                <div className="flex flex-wrap gap-2"
                                >
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> DevOps </h3>
                                <div className="flex flex-wrap gap-2"
                                >
                                    {devOpsSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> SGBDs </h3>
                                <div className="flex flex-wrap gap-2"
                                >
                                    {sgbdsSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> {t('tests')} </h3>
                                <div className="flex flex-wrap gap-2"
                                >
                                    {testsSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> {t('messaging')} </h3>
                                <div className="flex flex-wrap gap-2"
                                >
                                    {messagingsSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 {t('education')} </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>{t('undergraduate_course')} </strong>
                                </li>
                                <li>
                                    {t('relevant_courses')}
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 {t('work_experience')}  </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        {t('work_experiences')}

                                    </h4>
                                    <p>
                                        {t('desc_experiences')}
                                    </p>
                                </div>

                                {/* <div>
                                    <h4 className="font-semibold">
                                        Intern at DEF Startups
                                        (2019)
                                    </h4>
                                    <p>
                                        Assisted in building front-end components and integration REST APIs.
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}