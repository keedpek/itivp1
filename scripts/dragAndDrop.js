document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector(".gallery-container");
  const galleryItems = document.querySelectorAll(".gallery-img");
  let draggedItem = null;
  
  galleryItems.forEach((item) => {
    item.addEventListener("dragstart", e => dragstart(e));
    item.addEventListener("dragend", dragend);
  });

  // Обработка событий на контейнере
  galleryContainer.addEventListener("dragover", (e) => {
    e.preventDefault(); // Разрешаем drop
  });

  galleryContainer.addEventListener("dragenter", (e) => {
    if (e.target.classList.contains("gallery-img")) {
      e.target.classList.add("over");
    }
  });

  galleryContainer.addEventListener("dragleave", (e) => {
    if (e.target.classList.contains("gallery-img")) {
      e.target.classList.remove("over");
    }
  });

  galleryContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("gallery-img") && draggedItem !== e.target) {
      // Меняем местами элементы
      const parent = galleryContainer;
      const draggedIndex = Array.from(parent.children).indexOf(draggedItem);
      const targetIndex = Array.from(parent.children).indexOf(e.target);

      if (draggedIndex < targetIndex) {
        parent.insertBefore(draggedItem, e.target.nextSibling);
      } else {
        parent.insertBefore(draggedItem, e.target);
      }
    }

    // Удаляем класс over
    e.target.classList.remove("over");
  });
});

function dragstart(e) {
  draggedItem = e.target;
  setTimeout(() => {
    e,target.preventDefault()
    e.target.classList.add("dragging");
  }, 0);
}

function dragend() {
  setTimeout(() => {
    draggedItem.classList.remove("dragging");
    draggedItem = null;
  }, 0);
}