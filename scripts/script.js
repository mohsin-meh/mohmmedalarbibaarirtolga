// scripts/script.js
document.addEventListener('DOMContentLoaded', () => {
  const news = JSON.parse(localStorage.getItem('news')) || [];
  const sec = document.getElementById('news-section');
  if(!sec) return;
  if(news.length === 0){
    sec.innerHTML += '<p class="news-article">لا توجد أخبار حالياً.</p>';
    return;
  }
  news.forEach(n => {
    const html = `
      <article class="news-article">
        <h3>${n.title}</h3>
        <small>${n.date}</small>
        <p>${n.content}</p>
        ${n.image ? `<img src="${n.image}" alt="صورة الخبر">` : ''}
      </article>
    `;
    sec.innerHTML += html;
  });
});
