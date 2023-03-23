
import CalcButton from '../UI/CalcButton'
import { useDispatch } from 'react-redux';
import { addNum } from '../../store/currentNumStore';
import './Numbers.scss';
const numbers = ['7','8','9','4','5','6','1','2','3','0','.'];


const Numbers = () => {
  const dispatch = useDispatch();

  const clickHandle = (number: string) => {
    // return (event: React.MouseEvent) => {
     dispatch(addNum(number));  
     // }
     console.log(number);
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
