

function handleImage(e){
    var canvas = document.getElementById('imageCanvas');
    
    var ctx = canvas.getContext('2d');
    var reader = new FileReader();
    var fileUploaded;

    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        };
        img.src = event.target.result;
        console.log("FILE UP",event.target.result);
        generateGif(new File([event.target.result],"aaaaa.png"));
        
    };

    fileUploaded = reader.readAsDataURL(e.target.files[0]);     

    //generateGif(fileUploaded);
}

function drawView(){

    var photo_html = "";

    photo_html += '<span id="photo-uploader">Upload file</span>';
    photo_html += '<input type="file" id="imageLoader" name="imageLoader"/><canvas id="imageCanvas"></canvas>';
    var input = $( "input:file" ).css({
        background: "yellow",
          border: "3px red solid"
    });

    $("#photo_container").html(photo_html);

    var controls_html = "";

    controls_html += '<span id="upload-btn"></span>';
    controls_html += '<input id="text-source" value="Enter text"></input>';
    controls_html += '<span id="text-source-btn">Poner texto</span>';
    controls_html += '<input id="color-picker-container" type="color"></input>';

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
        console.log("AAA",new_image);
        var img = new Image(300,300); // width, height vddalues are optional params 
        if(i!=2){
            img.src = imageElement;
        }
        else{
            var url2 = window.URL.createObjectURL(new_image);
            //img.src = new_image.name;
            img.src = url2;
            console.log("URL",url2);
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

$(document).ready(function(){

    drawView();

});
