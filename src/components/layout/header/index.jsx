import React from 'react';
import styles from './index.module.css'
import Carpetlogo from '../../../assets/images/carpetlogo.jpg'
import { GitIcon, GithubIcon, InstaIcon, LinkedlnIcon, MailIcon, MenuIcon, SearchIcon, WhatsIcon } from '../../../icons';
import Slides from '../../slides';
import { Link } from 'react-router-dom';
import Wrapper from '../../UI';
const Header = () => {
  return(
<>

    <div className={styles.background}>
<Wrapper>

        <div className={styles.texts}>
            <div className={styles.logo}>
              <div className={styles.backh2}>
                    <Link to={"/"}>Bakues</Link>

              </div>
              <div className={styles.nav}>
                <Link to={"https://www.linkedin.com/in/elcin-abdullayev-583861229/"} target='_blank' className={styles.svgback}>
                  <LinkedlnIcon/>
                </Link>
                
                <Link to={"https://www.github.com/7u4bgr"} target='_blank' className={styles.svgback}>
                 <GithubIcon/>
                </Link>
                <Link to={"https://www.instagram.com/abdlyvs"} target='_blank' className={styles.svgback}>
                 <InstaIcon/>
                </Link>
                <Link to={"https://wa.me/0507487048"} target='_blank' className={styles.svgback}>
                 <WhatsIcon/>
                </Link>
              </div>
              <div className={styles.search}>
                    <input placeholder='Search...' type="text" />
                  
              </div>
                    
            </div>
        </div>
    </Wrapper>
    </div>

    <div className={styles.background1}>
        <div className={styles.texts1}>
              <Link to={"/sport"}>İdman</Link>
              <Link to={"/economy"}>İqtisadiyyat</Link>
              <Link to={"/business"}>Şou-Biznes</Link>
              <Link to={"/politics"}>Siyasət</Link>
              <Link to={"/science"}>Elm</Link>
              <Link to={"/health"}>Səhiyyə</Link>
              <Link to={"/culture"}>Mədəniyyət</Link>
              <Link to={"/tourism"}>Turizm</Link>
        </div>

    </div>
    <Slides/>

</>
    )
};

export default Header;
