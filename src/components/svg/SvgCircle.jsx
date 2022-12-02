import './SvgCircle.css';

const SvgCircle = ({ difficultyPercent, bg }) => {
  return (
    <div className='flex-wrapper'>
      <div className='single-chart'>
        <svg
          viewBox='0 0 36 36'
          style={{ stroke: bg }}
          className='circular-chart orange'
        >
          <path
            className='circle-bg'
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
          <path
            style={{ stroke: bg }}
            className='circle'
            strokeDasharray={`${difficultyPercent} 100`}
            d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
          />
        </svg>
      </div>
    </div>
  );
};

export { SvgCircle };
