import './Main.css';
import usa from '../../images/united-states-of-america.svg';
import Table from '../Table/Table';
import { useState } from 'react';
import TableOptions from '../TableOptions/TableOptions';
import { SvgCircle } from '../svg/SvgCircle';
import { useRowData } from '../../TableDataContext/tableDataContext.js';
import { intentMap } from '../../utils/intentMap';
import { hover } from '@testing-library/user-event/dist/hover';
import { keywordDifficulty } from '../../utils/keywordDifficulty';

const Main = () => {
  const { rowData } = useRowData();
  const [tableCategory, setTableCategory] = useState('Broad Match');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleCategory = categoryName => {
    setTableCategory(categoryName);
  };

  return (
    <div className='main'>
      <div className='wrapper'>
        <div className='top-section'>
          <div className='top-left'>
            <div className='flex-column'>
              <p>Volume</p>
              <div className='flex'>
                <h1>{rowData?.[1]}</h1>
                <img className='volumeImage' src={usa} alt='volume' />
              </div>
            </div>
            <hr />
            <div className='flex-column'>
              <p>Keyword Difficulty</p>
              <div className='flex'>
                <div>
                  <h1>{rowData?.[7]}%</h1>
                  <p>{keywordDifficulty(Number(rowData?.[7])).rating}</p>
                </div>
                <SvgCircle
                  difficultyPercent={rowData?.[7]}
                  bg={keywordDifficulty(Number(rowData?.[7])).color}
                />
              </div>
            </div>

            <p className='secondary subTitle'>
              {keywordDifficulty(Number(rowData?.[7])).text}
            </p>
          </div>
          <div className='top-right'>
            <div className='intent flex-column'>
              <p>Intent</p>

              <p
                className='tag'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundColor: intentMap[rowData?.[2]]?.color.bg,
                  color: isHovering
                    ? intentMap[rowData?.[2]]?.color.hover
                    : intentMap[rowData?.[2]]?.color.text,
                }}
              >
                {intentMap[rowData?.[2]]?.type}
              </p>
              {isHovering ? <p>{intentMap[rowData?.[2]]?.hoverText}</p> : ''}
            </div>
            <div className='results flex-column'>
              <p>Results</p>
              <h1>{rowData?.[5]?.slice(0, 3)}M</h1>
            </div>
            <div className='cpc-com flex'>
              <div className='cpc flex-column'>
                <p>CPC</p>
                <h1>${rowData?.[4]}</h1>
              </div>
              <div className='com flex-column'>
                <p>Com.</p>
                <h1>{rowData?.[3]}</h1>
              </div>
            </div>
          </div>
        </div>

        <TableOptions
          handleCategory={handleCategory}
          tableCategory={tableCategory}
        />

        <Table tableCategory={tableCategory} />
      </div>
    </div>
  );
};

export default Main;
