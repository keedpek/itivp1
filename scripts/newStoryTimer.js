const container = document.querySelector('.stories-container')
const newStoryInnerHtml = `
    <img src="../images/stories/the-best-time-to-visit-hawaii.webp" alt="story1">
    <div class="meta">
      <h4>Гаваи, США</h4>
      <span>27 фев, 2024 • ⏲ 8 мин</span>
    </div>
    <h3 class="story-title">Лучшее Время для Посещения Гаваи</h3>
    <p class="short-story">Меня всегда интересовала духовность, поэтому я решил совершить годичное путешествие в Индию, чтобы изучить различные религиозные практики и традиции.</p>
    <a class="full-post-link" href="">Читать весь пост</a>
`
const timer = 10000

setTimeout(() => {
  createNewStory(newStoryInnerHtml)
}, timer)


function createNewStory(innerHtml) {
  const newStory = document.createElement('div')
  newStory.classList.add('story-component')
  newStory.innerHTML = innerHtml
  container.appendChild(newStory)
  console.log(newStory);
  
  alert('Новая история уже доступна!!!')
}