

function handleImage(e){
    var canvas = document.getElementById('imageCanvas');
    
    var ctx = canvas.getContext('2d');
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);     
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

    var picker = new CP(document.querySelector('input[type="color"]'));

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

    picker.on("destroy", function(color) {
        //this.target.value = '#' + color;
        console.log("PRE",picker.set(),this.target.value);
        console.log("color",picker.val);
    },"#color-picker-container");
}

$(document).ready(function(){

    drawView();

});
