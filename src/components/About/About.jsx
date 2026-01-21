import { RevealOnScroll } from '../RevealOnScroll';
import { SkillCard } from './SkillCard';
import { getSkills } from '../../data/skills';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  const skills = getSkills(t);

  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            {t('about_me')}
          </h2>

          <article className='rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
              {t('passion')}
            </p>

            <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {skills.map(({ title, items }) => (
                <SkillCard
                  key={title}
                  title={title}
                  items={items}
                />
              ))}
            </section>
          </article>

          <section className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <article className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>
                🏫 {t('education')}
              </h3>

              <p className='font-semibold'>
                {t('undergraduate_course')}
              </p>
              <p className='text-sm text-gray-400'>(2023 – 2027)</p>
            </article>

            <article className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>
                💼 {t('work_experience')}
              </h3>

              <p className='font-semibold'>
                {t('work_experiences')}
              </p>
              <p className='text-gray-300'>
                {t('desc_experiences')}
              </p>
              <p className='text-sm text-gray-400'>(2024 – 2025)</p>
            </article>
          </section>
        </div>
      </RevealOnScroll>
    </section>
  );
};
