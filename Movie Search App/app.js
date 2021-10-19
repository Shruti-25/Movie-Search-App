const form=document.querySelector("form");
const result=document.querySelector("#result");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const searchText=form.elements[0].value;
   getShows(searchText);
   form.elements[0].value="";

});
function getShows(searchText){
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
    const url=`https://api.tvmaze.com/search/shows?q=${searchText}`;
     fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        
        for(let item of data){
            console.dir(item.show.image.medium);

        
            const img=document.createElement('img');
            img.src=item.show.image.medium;
          img.style.margin="10px";
           result.append(img);
        }
    })
    .catch((err) => {
        console.log(err.message);
    });
}