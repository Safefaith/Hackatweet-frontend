// import { useRef, useEffect } from "react";

// function ModalSignUp({ children, isOpen, handleClose }) {
//   const dialogRef = useRef(null);

//   useEffect(() => {
//     const dialog = dialogRef.current;

//     if (isOpen) {
//       if (!dialog?.open) {
//         dialog?.showModal();
//       }
//     } else {
//       dialog?.close();
//     }

//     // Gestion de la fermeture par Escape ou clic en dehors du modal
//     const handleCancel = (event) => {
//       event.preventDefault();
//       handleClose();
//     };

//     dialog?.addEventListener("cancel", handleCancel);
//     return () => dialog?.removeEventListener("cancel", handleCancel);
//   }, [isOpen, handleClose]);

//   const close = () => {
//     handleClose();
//     dialogRef.current?.close();
//   };

//   return (
//     <dialog ref={dialogRef} aria-modal="true">
//       {children}

//       <button
//         type="button"
//         onClick={close}
//         title="Fermer le modal"
//         aria-label="Fermer le modal"
//       >
//         Fermer
//       </button>
//     </dialog>
//   );
// }

// export default ModalSignUp;
