document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery-container')
  let draggedElement = null

  const items = document.querySelectorAll('.gallery-img, video')
  items.forEach(item => {
    item.addEventListener('dragstart', e => dragStart(e))
    item.addEventListener('dragend', e => dragEnd(e))
  })

  galleryContainer.addEventListener('drop', e => dropItem(e))
  galleryContainer.addEventListener('dragover', (e) => {
    e.preventDefault()
  })

  
  function dragStart(e) {
    draggedElement = e.target
    setTimeout(() => {
      e.target.style.opacity = '0.5'
    }, 0)
  }

  function dragEnd(e) {
    setTimeout(() => {
      e.target.style.opacity = '1'
    }, 0)
    draggedElement = null
  }

  function dropItem(e) {
    e.preventDefault();
    if (draggedElement && draggedElement !== e.target) {
      const targetIndex = Array.from(galleryContainer.children).indexOf(e.target)
      const draggedIndex = Array.from(galleryContainer.children).indexOf(draggedElement)

      if (targetIndex > -1 && draggedIndex > -1) {
        const children = Array.from(galleryContainer.children)
        children.splice(draggedIndex, 1)
        children.splice(targetIndex, 0, draggedElement)

        galleryContainer.innerHTML = ''
        children.forEach(child => galleryContainer.appendChild(child))
      }
    }
  }
})
