import { Grid} from "@nextui-org/react"
import styles from '../styles/Home.module.css'

function NavBar(){
    // const navStyles: object = {
    // backgroundColor: "#181818", opacity: .9, 
    // position: 'fixed',
    // top: 0,
    // right: 0,
    // left: 0,
    // minHeight: '10vh',
    // zIndex: 10000000, 
    // display: 'flex', 
    // justifyItems: 'center',
    // alignItems: "center"
    // }
    return(
        <>
<nav role="navigation" className={styles.navBar} >
    <Grid.Container gap={3} id={styles.lgMenu} justify="center" alignItems="center" direction="row">
        <Grid>
      <a href="#about" className={styles.nav_links}>About</a>
        </Grid>
        <Grid>
      <a href="#repos" className={styles.nav_links}>Projects</a>
      </Grid>
      <Grid>
      <a href="#contact" className={styles.nav_links}>Contact</a>
      </Grid>
      <Grid>
      <a href="/resume.pdf" target="_blank" className={styles.nav_links}>Resume</a>
      </Grid>
    </Grid.Container>
  <div id={styles.menuToggle}>
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id={styles.menu}>
      <a href="#about"><li className={styles.nav_links}>About</li></a>
      <a href="#repos"><li className={styles.nav_links}>Projects</li></a>
      <a href="#contact"><li className={styles.nav_links}>Contact</li></a>
      <a href="/resume.pdf" target="_blank"><li className={styles.nav_links}>Resume</li></a>
    </ul>
  </div>
</nav>
        </>
    )
}

export default NavBar