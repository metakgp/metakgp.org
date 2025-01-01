import '../app/style/dc.css'
import networkImage from '../assets/network.png';

function DCPage() {
  return (
    <div className='title'>
      this is DC++ page
      <img
        src=  {networkImage}
        alt=""
      />
    </div>
  );
}

export default DCPage;
