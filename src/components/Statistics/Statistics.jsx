import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePrecentage }) => {
  return (
    <div className={css.statistic}>
      <h2>Statistics</h2>
      <p className={css.item}>
        Good: <span className={css.number}>{good} </span>
      </p>
      <p className={css.item}>
        Neutral: <span className={css.number}>{neutral} </span>
      </p>
      <p className={css.item}>
        Bad: <span className={css.number}>{bad} </span>
      </p>
      <p className={css.item__calc}>
        Total: <span className={css.number}>{total} </span>
      </p>
      <p className={css.item__calc}>
        Good percentage:{' '}
        <span className={css.number}>{positivePrecentage} </span>
      </p>
    </div>
  );
};
export default Statistics;
