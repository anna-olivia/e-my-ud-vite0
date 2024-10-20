import styles from './Modal.module.css'


const Modal = ({ children, onClose }) => {
    // object destructuring anstatt immer props mit danach dot notation
    // reserved prop name
    // verweist auf Kind Element Komponente also auf das was zwischen hier Modal gerendert werden soll - hier newpost komponente


    return(
        <>
        <div className={styles.backdrop} onClick={onClose}/>
        {/* dadurch das hintergrund jetzt verdunkelt wird sollte auch NewPost.module.css geändert werden - damit es hervorgehoben wird */}
        <dialog open className={styles.modal}>
            {/* open Attribut gehört zum dialog element damit visibility true is ->  hier is default open immer true deswgen ann man auch ohne {true} schreiben */}
        {children}
        {/* reserved prop name */}
        </dialog>
        </>
    )
}

export default Modal;