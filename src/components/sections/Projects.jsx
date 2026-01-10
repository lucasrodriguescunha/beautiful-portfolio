import { RevealOnScroll } from "../RevealOnScroll"
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            {t('featured_projects')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2"> {t('clear_email_title')} </h3>
              <p className="text-gray-400 mb-4">
                {t('clear_email_description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "imaplib"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/lucasrodriguescunha/clear-email"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {t('view_project')} &#8594;
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2"> {t('moodflix_title')} </h3>
              <p className="text-gray-400 mb-4">
                {t('moodflix_description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vite", "React", "TMDB API", "Appwrite", "Vercel"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://moodflix-steel.vercel.app/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {t('view_project')} &#8594;
                </a>
              </div>
            </div>


            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2"> {t('document_manager_title')} </h3>
              <p className="text-gray-400 mb-4">
                {t('document_manager_description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Kotlin", "Spring", "React", "PostgreSQL", "Flyway", "GitLab", "Gradle", "Prime React", "JUnit", "Kotest"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {t('view_project')} &#8594;
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2"> {t('memory_game')} </h3>
              <p className="text-gray-400 mb-4">
                {t('memory_game_description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['HTML', 'CSS', 'JavaScript', 'React'].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {t('view_project')} &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}