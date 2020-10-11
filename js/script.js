document.getElementById('myForm').addEventListener('submit',saveBookMark);

function saveBookMark(e){
let siteName = document.getElementById('siteName').value;
let siteUrl = document.getElementById('siteUrl').value;

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

e.preventDefault;

}
function deletebookMark(url){

console.log(url)

}

function fetchBookMarks(){
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    let bookResult = document.getElementById('bookMarksResults');

    bookResult.innerHTML = '';
    for(let i = 0;i < bookmarks.length;i++){
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;
        bookResult.innerHTML += '<div class="row">'+
                                '<h3>'+name+
                                '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
                                '<a onclick="deletebookMark(\''+url+'\')"class="btn btn-danger justify-content-end d-flex" href="#">Delete</a>'+
                                '</h3>'+
                                '</div>';
    }

}   
   
  
  
  
  
  
  
  
  
   




