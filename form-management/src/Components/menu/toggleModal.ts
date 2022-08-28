export const toggleModal = (ref: any, state: any) => {
  if (state) {
    ref.current.classList.remove("modalShow");
    ref.current.classList.add("modalFade");
    ref.current.addEventListener("animationend", () => {
      ref.current.classList.remove("modalFade");
    });
  } else {
    ref.current.classList.add("modalShow");
    ref.current.classList.remove("modalFade");
  }
};
