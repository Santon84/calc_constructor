
import CalcButton from '../UI/CalcButton'
import { useDispatch } from 'react-redux';
import { addNum } from '../../store/CalculateStore';
import './Numbers.scss';
const numbers = ['7','8','9','4','5','6','1','2','3','0',','];


const Numbers = () => {
  const dispatch = useDispatch();

  const clickHandle = (item: string) => {
    // return (event: React.MouseEvent) => {
      // const target = e.target as HTMLElement; 
      dispatch(addNum(item));  
     // }
     console.log('number clicked');
  }
  return (
    <div className='calc__numbers'>
      {numbers.map((item, index) => {
        
        return (
        
           <CalcButton key={index} value={item} addClass='calc__numbers_width' clickHandler={clickHandle} />
       
        )
      })}
   </div>
  )
}

export default Numbers
