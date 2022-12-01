import { Skeleton } from 'primereact/skeleton';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import '../styles/SkeletonPage.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const WeatherAppPageSkeleton = () => {
    const n = 12; 
  return (
    <div className="info-content">
        <ul className="list-group">
            <li style={{paddingBottom:'25px'}} className="list-group-item"> 
                <Skeleton height="1rem" className="mt-3"></Skeleton>
            </li>
            <li className="list-group-item"> 
                <Skeleton height="1rem" className="mt-2"></Skeleton>
            </li>
            <li className="list-group-item">
                <Skeleton height="1rem" className="mt-2"></Skeleton>
            </li>
            <li className="list-group-item">
                <Skeleton height="1rem" className="mt-2"></Skeleton>
            </li>
            <li className="list-group-item">
                <Skeleton height="1rem" className="mt-2"></Skeleton>
            </li>
            <li className="list-group-item">
                <Skeleton height="1rem" className="mt-2"></Skeleton>
            </li>
            <li className="list-group-item">
                <ImageList sx={{ width: '18rem', height: 460 }} cols={3} rowHeight={164}>
                    { [...Array(n)].map((e,i) => (
                        <ImageListItem key={i}>
                            <Skeleton height="10rem" width='5.3rem'></Skeleton>
                        </ImageListItem>
                    ))}
                </ImageList>            
            </li>
        </ul>  
    </div>     
    )
}
