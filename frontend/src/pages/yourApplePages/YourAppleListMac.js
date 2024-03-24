
import {Link} from 'react-router-dom';
import style from '/Users/ihaneul/Desktop/React/frontend/src/css/yourAppleList.module.css';
export default function YourAppleListMac({images}){
    const macImages = images.filter(image => image.divisionNo === 1);
    function priceFormat(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
    <div className={style.horizontalContainer}>
   
        {macImages.map((image) => (
            
            <Link key={image.yourAppleNo} to={`/YourAppleView`} state={{yourAppleNo: image.yourAppleNo}} className={style.imgContainer}>
            <img className={style.imgSize} src={image.imageAddress}/>
            <div className={style.title}>{image.title}</div>
            <div>{priceFormat(image.price)}₩</div>
            <div>{image.dates}</div> 
            </Link>
        ))}
      
        </div> 
    )
};