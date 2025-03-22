const container = document.querySelector('.stories-container')
const newStoryInnerHtml = `
    <img src="../images/stories/how-to-move-around-athens.webp" alt="story2">
      <div class="meta">
        <h4>Афины, Греция</h4>
        <span>27 фев, 2024 • ⏲ 8 мин</span>
      </div>
    <h3 class="story-title">Как передвигаться по Афинам</h3>
    <p class="short-story">Я только что окончил колледж и решил отправиться в шестимесячное одиночное путешествие по Европе, прежде чем начать свою карьеру. Я путешествовал с рюкзаком по 15 разным странам, останавливаясь в хостелах и встречаясь с людьми.</p>
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
  container.prepend(newStory)
  alert('Новая история уже доступна!!!')
}