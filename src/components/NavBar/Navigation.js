import NavLinks from './NavLinks';
import { useState} from 'react';

function Navigation() {
    const[sider] = useState("nav-links");

    return( 
        <div style={{color:'white'}}class="nav">
            <NavLinks fn={sider} />
        </div>
     );
}

export default Navigation;