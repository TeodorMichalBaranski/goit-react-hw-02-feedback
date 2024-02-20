import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h3> {title}</h3>
      {children}
    </section>
  );
};
export default Section;
