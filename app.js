document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){

  const xhr = new XMLHttpRequest;

  xhr.open('GET','https://api.nasa.gov/planetary/apod?api_key=0viUdSFpCFVk3t8c04KDWbng6VcIvoxiWv4FEMgo', true);

  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      const explanation = response.explanation;
      const imgSrc = response.url;
      const title = response.title;
      const date = response.date;
      const photographer = response.copyright;
      document.getElementById('img1').src=`${imgSrc}`;
      document.querySelector('.jokes').innerHTML = explanation;
      document.querySelector('.title').innerHTML = title;
      document.querySelector('.date').innerHTML = date;
      document.querySelector('.photographer').innerHTML = `Photographer: ${photographer}`;
 document.querySelector('.get-jokes').style.display = "none";
    }
  }

  xhr.send();
  e.preventDefault();
}