const dataContainer = document.getElementById('cardContainer');
fetch('https://type.fit/api/quotes')
  .then(response => response.json())
  .then(data => {
    console.log(data)
     data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');

      const nameElement = document.createElement('h2');
      nameElement.textContent = item.text;
      card.appendChild(nameElement);

      if(item.author!=null){
        const ageElement = document.createElement('p');
        ageElement.textContent = `Author: ${item.author}`;
        card.appendChild(ageElement);
      }

      var a = document.createElement('a');
      var link = document.createTextNode("Tweet this");
      a.appendChild(link);
      a.title = "Tweet this";
      a.id = 'tweetLink';
      a.target='_blank';
      a.style.float = 'right';
      a.style.textDecoration = 'none';
      a.style.fontSize = '1rem';
      var finaltext = item.text + '%0A%0A'+'More Quotes => '+'%0A%0A'+'Developed By: @shubhamlashkan';
      a.href = 'https://twitter.com/intent/tweet?text='+finaltext;
      card.appendChild(a);

      dataContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));