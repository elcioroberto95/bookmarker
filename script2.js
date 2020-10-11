document.getElementById('myForm').addEventListener('submit',saveBookMark);

function saveBookMark(e){
let siteName = document.getElementById('siteName').value;
let siteUrl = document.getElementById('siteUrl').value;
if(!validateForm(siteName,siteUrl)){
    return false;
}

        let bookmark = {
            name:siteName,
            url:siteUrl,
        }


if (localStorage.getItem('bookmarks') === null){

let bookmarks = [];

bookmarks.push(bookmark);

localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
}
else
{
   let bookmarks = JSON.parse(localStorage.getItem('bookmarks')); 
   bookmarks.push(bookmark)
   localStorage.setItem('bookmarks',JSON.stringify(bookmarks)); 
}
siteUrl = '';
siteName = '';
alert("Datas send with success");
document.getElementById('myForm').reset();
fetchBookMarks()

}
function deletebookMark(url){
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for(let i = 0;i < bookmarks.length;i++){
        if(bookmarks[i].url == url){
            bookmarks.splice(i,1);
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    
fetchBookMarks()



}



function fetchBookMarks(){
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    let bookResult = document.getElementById('bookMarksResults');

    bookResult.innerHTML = '';
    for(let i = 0;i < bookmarks.length;i++){
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;
        bookResult.innerHTML +=
        `
        <div class="well">
                                <h3>${name}
                                <a class="btn btn-default" target="_blank" href="${url}">Visit</a>
                                <a onclick="deletebookMark('${url}')"class="btn btn-danger" href="#">Delete</a>
                                </h3>
        </div>`
        
        
        
    }

}   

function validateForm(siteName,siteUrl){
    if(!siteName || !siteUrl){
        alert("Please fill in the form ");
        return false;
        }
var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
        if (!siteUrl.match(regex)) {
        alert("Please use a valid URL");
        return false;
        } 
    return true;
}
   
  
  
  
  
  
  
  
  
   




