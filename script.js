const container = document.querySelector('.container');


const fetchStories = async () => {

   try {
      const res = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3AIFkyzgzgsGVAY81SXXWWkmoKdaNAXB');
      const stories = await res.json();
      const story = stories.results;
      story.forEach(article => {
         const wrapper = document.createElement('section');
         const section = document.createElement('span');
         const title = document.createElement('h1');
         const date = document.createElement('span');
         const info = document.createElement('p');
         const link = document.createElement('a');
         const img = document.createElement('img');

         wrapper.classList.add('wrap');
         section.innerText = `Section: ${article.section} `;
         title.innerText = article.title;
         title.classList.add('title');
         date.innerText = article.published_date.slice(0, 10);
         date.classList.add('date');
         info.innerText = article.abstract;
         link.href = article.short_url;
         link.innerText = 'Read more...';
         link.target = '_blank';
         img.src = article.multimedia[0].url;
         wrapper.append(img, section, date, title, info, link,);
         container.append(wrapper);

      })
   } catch (error) {
      console.log(error);
   }
}

fetchStories();