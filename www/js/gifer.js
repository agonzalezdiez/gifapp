

function handleImage(e){
    var canvas = document.getElementById('imageCanvas');
    
    var ctx = canvas.getContext('2d');
    var reader = new FileReader();
    var fileUploaded;

    reader.onload = function(event){
        generateGif(event.target.result,"aaaaa.png");
    };

    fileUploaded = reader.readAsDataURL(e.target.files[0]);     
}

function drawView(){

    var photo_html = "";

    photo_html += '<span id="photo-uploader">Subir foto para el gif</span>';
    photo_html += '<input type="file" id="imageLoader" name="imageLoader"/><canvas id="imageCanvas"></canvas>';
    var input = $( "input:file" ).css({
        background: "yellow",
          border: "3px red solid"
    });

    $("#photo_container").html(photo_html);

    var controls_html = "";

    //controls_html += '<span id="upload-btn"></span>';
    //controls_html += '<input id="text-source" value="Enter text"></input>';
    //controls_html += '<span id="text-source-btn">Poner texto</span>';
    //controls_html += '<input id="color-picker-container" type="color"></input>';

    $("#controls_container").html(controls_html);

    var imageLoader = document.getElementById('imageLoader');
        imageLoader.addEventListener('change', handleImage, false);


    $("#text-source-btn")
        .css("cursor","pointer")
        .on("click",function(d){
            console.log("CLIACK",d,$("#text-source").val());
            var text = $("#text-source").val();
            var color = picker.target.value;
            var canvas = document.getElementById('imageCanvas');
            var context = canvas.getContext("2d");
              context.fillStyle = color;
              context.font = "bold 16px Arial";
              context.fillText(text, 100, 100);
              context.fillText("AAAAAAA", 100, 100);
        });
}

function generateGif(new_image){
    var gif = new GIF({
        workers: 2,
        quality: 10
    });

    var images = ['../data/01_losdeabajo.png','../data/02_losdeabajo.png','../data/03_losdeabajo.png','../data/04_losdeabajo.png','../data/05_losdeabajo.png','../data/06_losdeabajo.png','../data/07_losdeabajo.png','../data/08_losdeabajo.png'];

    images.forEach(function(imageElement,i){
        console.log("AAA",i);
        var img = new Image(300,300);
        if(i!=2){
            img.src = imageElement;
        }
        else{
            img.src = new_image;
            console.log("IMAGE",img.src);
        }
        img.style.width = '300px';
        img.style.height = 'auto';
        console.log("IMG",img);
        gif.addFrame(img);
    });
    gif.on('finished', function(blob) {
        console.log("FINISHED",blob);
        url = window.URL.createObjectURL(blob);
        window.open(url,"_blank");
        var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "YoSoyAlcalde.gif";
            a.click();
        window.URL.revokeObjectURL(url);
    });
    gif.render();

};

/*$(document).ready(function(){
    drawView();
});*/
