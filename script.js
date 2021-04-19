const container = document.querySelector('.container');


const fetchStories = async () => {

   try {
      const res = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3AIFkyzgzgsGVAY81SXXWWkmoKdaNAXB');//pazadas
      console.log(res);
      const stories = await res.json();
      const story = stories.results;
      console.log(story);
      story.forEach(article => {
         const wrapper = document.createElement('div');
         const section = document.createElement('h3');
         const title = document.createElement('h1');
         const date = document.createElement('p');
         const info = document.createElement('p');
         const link = document.createElement('a');
         const img = document.createElement('img');

         section.innerText = article.section;
         title.innerText = article.title;
         date.innerText = article.created_date; //to fix: has to show only date
         info.innerText = article.abstract;
         link.href = article.short_url;
         link.innerText = 'Read more...';
         link.target = '_blank';
         img.src = article.multimedia[0].url;
         wrapper.append(section, title, date, info, link, img);
         container.append(wrapper);

      })
   } catch (error) {
      console.log(error);
   }
}

fetchStories();