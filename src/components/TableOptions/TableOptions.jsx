import './TableOptions.css';

const TableOptions = ({ handleCategory, tableCategory }) => {
  return (
    <div className='bottom-section'>
      <div className='bottom-tabs-left'>
        <button
          className={`broad ${tableCategory === 'Broad Match' && 'active'}`}
          onClick={() => handleCategory('Broad Match')}
        >
          Broad Match
        </button>
        <button
          className={`related ${tableCategory === 'Related' && 'active'}`}
          onClick={() => handleCategory('Related')}
        >
          Related
        </button>
        <button
          className={`questions ${tableCategory === 'Questions' && 'active'}`}
          onClick={() => handleCategory('Questions')}
        >
          Questions
        </button>
      </div>
      <div className='bottom-tabs-right'>
        <button className='add'>Add to List</button>
      </div>
    </div>
  );
};

export default TableOptions;
