import { cardBase, badgeBase } from '../../ui/ui';

export const SkillCard = ({ title, items }) => {
  return (
    <article className={cardBase}>
      <h3 className='text-xl font-bold mb-4'>{title}</h3>

      <ul className='flex flex-wrap gap-2'>
        {items.map((tech) => (
          <li key={tech}>
            <span className={badgeBase}>{tech}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};