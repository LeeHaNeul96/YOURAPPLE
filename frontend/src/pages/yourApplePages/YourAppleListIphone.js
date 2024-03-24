
import style from '/Users/ihaneul/Desktop/React/frontend/src/css/yourAppleList.module.css';
import { Link } from 'react-router-dom';
export default function YourAppleListMac({images}){

    const iphoneImages = images.filter(image => image.divisionNo === 3);
    function priceFormat(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
    <div className={style.horizontalContainer}>
        {iphoneImages.map((image) => (
             <Link to={`/YourAppleView`} state={{yourAppleNo: image.yourAppleNo}} className={style.imgContainer}>
             <img className={style.imgSize} src={image.imageAddress} />
             <div className={style.title}>{image.title}</div>
             <div>{priceFormat(image.price)}₩</div>
             <div>{image.dates}</div>
             </Link>
        ))} 
        </div> 
    );
};