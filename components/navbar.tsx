import { Grid, Spacer, Link } from "@nextui-org/react"
import styles from '../styles/Home.module.css'

function NavBar(){
    return(
        <nav style={{backgroundColor: "#181818", opacity: .9, 
        position: 'fixed', top: 0, right: 0, left: 0, minHeight: '10vh', zIndex: 10000000, display: 'flex', justifyItems: 'center', alignItems: "center"}}>
            <Grid.Container justify="center" alignItems="center" direction="row" >
                <a className={styles.nav_links} href="#about">About</a>
                <Spacer x={.5}/>
                <a className={styles.nav_links} href="#repos">Projects</a>
                <Spacer x={.5}/>
                <a className={styles.nav_links} href="#contact">Contact</a>
                <Spacer x={.5}/>
                <a className={styles.nav_links} target="_blank" href="/DanDervich resume.pdf">Resume</a>
            </Grid.Container>
        </nav>
    )
}

export default NavBar