import { useRef, useState } from 'react';
import './Drag.css';

const outlinesData = [
  'Shopping in Barcelona',
  'Famous Shopping Streets',
  'Shopping malls',
  'Markets',
  'Opening times',
  'Sales Tax Refunds',
  ' You may also be interested in',
  'Where to stay',
];

const Drag = () => {
  const [outlines, setSetOutlines] = useState(outlinesData);

  //save reference for dragItem and dragOverItem
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  //handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _outlines = [...outlines];

    //remove and save the dragged item content
    const draggedItemContent = _outlines.splice(dragItem.current, 1)[0];

    //switch the position
    _outlines.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setSetOutlines(_outlines);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ margin: '0' }}>Outlines</h2>
      <p>Drag outlines to reorder</p>

      <div>
        {outlines.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={e => (dragItem.current = index)}
            onDragEnter={e => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={e => e.preventDefault()}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drag;
