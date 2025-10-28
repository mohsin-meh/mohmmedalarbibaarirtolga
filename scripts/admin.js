// scripts/admin.js
document.getElementById('show-form').addEventListener('click', ()=> {
  const f = document.getElementById('news-form');
  f.style.display = (f.style.display === 'none' || f.style.display === '') ? 'block' : 'none';
});

let news = JSON.parse(localStorage.getItem('news')) || [];

function renderNews(){
  const el = document.getElementById('news-table');
  el.innerHTML = '<div class="table-card">' + (news.length ? news.map((n,i)=>`
    <div class="news-row">
      <img src="${n.image || '../images/logo.png'}" class="news-image" alt="">
      <div style="flex:1">
        <strong>${n.title}</strong>
        <div>${n.content}</div>
        <small>${n.date}</small>
      </div>
      <div>
        <button class="action-btn edit-btn" onclick="editNews(${i})">تعديل</button>
        <button class="action-btn delete-btn" onclick="deleteNews(${i})">حذف</button>
      </div>
    </div>`).join('') : '<p style="padding:12px">ما كاين حتى خبر</p>') + '</div>';
}
renderNews();

function submitNews(){
  const t = document.getElementById('title').value.trim();
  const c = document.getElementById('content').value.trim();
  const imgInput = document.getElementById('image');
  if(!t || !c){ alert('عمر العنوان والمحتوى'); return; }
  const date = new Date().toLocaleDateString();

  if(imgInput.files && imgInput.files[0]){
    const reader = new FileReader();
    reader.onload = function(e){
      news.unshift({title:t, content:c, image:e.target.result, date});
      localStorage.setItem('news', JSON.stringify(news));
      renderNews();
      document.getElementById('news-form').reset();
      document.getElementById('news-form').style.display = 'none';
    }
    reader.readAsDataURL(imgInput.files[0]);
  } else {
    news.unshift({title:t, content:c, image:'', date});
    localStorage.setItem('news', JSON.stringify(news));
    renderNews();
    document.getElementById('news-form').reset();
    document.getElementById('news-form').style.display = 'none';
  }
}

function deleteNews(i){
  if(confirm('تأكيد الحذف؟')){
    news.splice(i,1);
    localStorage.setItem('news', JSON.stringify(news));
    renderNews();
  }
}

function editNews(i){
  const n = news[i];
  document.getElementById('title').value = n.title;
  document.getElementById('content').value = n.content;
  document.getElementById('news-form').style.display = 'block';
  // نحذف القديم ونخلي الادمن يعيد النشر بعد التعديل
  news.splice(i,1);
  localStorage.setItem('news', JSON.stringify(news));
  renderNews();
}
