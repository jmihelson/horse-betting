import './horseRow.css';

const HorseRow = ({ horse, onChange }) => {
  const {name, amount} = horse;
  return (
    <div className="row">
      <div>{name}</div>
    
<div>
      <div className="buttonWrapper">
        
        <button className='up' onClick={() => onChange(5)}>+</button>
        <button className='down' onClick={() => onChange(-5)}>-</button>

      </div>
      </div>
      <div>€ {amount}</div>
    </div>
  );
};

export default HorseRow;