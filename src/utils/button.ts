document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los contenedores de tarjeta
    const cardContainers = document.querySelectorAll(".card-container");
  
    cardContainers.forEach((container) => {
      const toggleBtns = container.querySelectorAll(".toggle-btn");
      const initialContent = container.querySelector(".initial-content");
      const expandedContent = container.querySelector(".expanded-content");
      const card = container.querySelector(".card");
      const cardTitle = container.querySelector(".card-title");
  
      if (initialContent && expandedContent && card && cardTitle) {
        let isExpanded = false;
  
        toggleBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            isExpanded = !isExpanded;
  
            if (isExpanded) {
              initialContent.classList.add("opacity-0", "pointer-events-none");
              expandedContent.classList.remove("opacity-0", "pointer-events-none");
              // Cambiar la altura de la card a 26rem en mobile
              card.classList.remove("h-[20rem]");
              card.classList.add("h-[26rem]");
              // Cambiar el título a "CARACTERÍSTICAS"
              cardTitle.innerText = "CARACTERÍSTICAS";
            } else {
              initialContent.classList.remove("opacity-0", "pointer-events-none");
              expandedContent.classList.add("opacity-0", "pointer-events-none");
              // Volver la altura de la card a 20rem en mobile
              card.classList.remove("h-[26rem]");
              card.classList.add("h-[20rem]");
              // Cambiar el título de vuelta a "OBJETIVO"
              cardTitle.innerText = "OBJETIVO";
            }
          });
        });
      }
    });
  });
  