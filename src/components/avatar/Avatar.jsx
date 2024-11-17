import styles from './Avatar.module.css'

export function Avatar({hasBorder=true, src}) {
    console.log(hasBorder);
    return(
        
        <>
            <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
        </>
    )
}