function upDate(previewPic){
    var src = previewPic.getAttribute("src");
    var alt = previewPic.getAttribute("alt");
    document.getElementById('image').style.backgroundImage = "url('" + src + "')";
    document.getElementById('image').innerHTML = alt;
}

function unDo(){
    document.getElementById('image').style.backgroundImage = "none";
    document.getElementById('image').innerHTML = "Hover over a puppy below to display here.";
    }