import Cards from './Cards';
import './Container.css';

function CardContainer() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '1rem',
        height: '200px',
        
      };
  
  return (
    <div className="Container" style={containerStyle}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      
    </div>
  );
}

export default CardContainer;