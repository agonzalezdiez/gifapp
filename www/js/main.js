

var container;


function votaClick(){
    console.log("VOTA CLICK");
}

function drawMain(){

    container = $("#main-container");

    container_html = "";

    container_html += '<div id="title-container">';
      container_html += '<div id="logo-left"><object class="svg-obj" id="los-de-abajo" data="data/images/los_de_abajo.svg" type="image/svg+xml"></object></div>';
      container_html += '<div id="title">MADRID 100% SOSTENIBLE>>>>></div>';
      container_html += '<div id="participa-logo"><img class="svg-obj" id="vota" src="data/images/vota.svg"/></div>';
    container_html += '</div>';
    container_html += '<div id="counter-container">';
      container_html += '<div class="counter-texts" id="pre-counter"><object class="svg-obj" id="madrid-tiene" data="data/images/madrid_tiene.svg" type="image/svg+xml"></object></div>';
      container_html += '<div id="counter">';
        container_html += '<div id="counter-value">';
        container_html += '<span id="counter-value-7"></span>';
        container_html += '<span id="counter-value-6"></span>';
        container_html += '<span id="counter-value-5"></span>';
        container_html += '<span id="counter-value-4"></span>';
        container_html += '<span id="counter-value-3"></span>';
        container_html += '<span id="counter-value-2"></span>';
        container_html += '<span id="counter-value-1"></span>';
        container_html += '<span id="counter-value-0"></span>';
        container_html += '</div>';
        container_html += '<object class="svg-obj" id="lineas-contador" data="data/images/lineas_contador.svg" type="image/svg+xml"></object>';
      container_html += '</div>';
      container_html += '<div class="counter-texts" id="post-counter"><object id="alcaldesas" data="data/images/alcaldesas.svg" type="image/svg+xml"></object></div>';
    container_html += '</div>';
    container_html += '<div id="gifer-container">';
      container_html += '<img class="svg-obj" id="hazte-alcalde-sa" src="data/images/hazte_alcalde_sa.svg" />';
      //container_html += '<object class="svg-obj" id="hazte-alcalde-sa" data="data/images/hazte_alcalde_sa.svg" type="image/svg+xml"></object>';
    container_html += '</div>';

    container_html += '<div id="rrss-container">';
    container_html += '<object class="svg-obj" id="logo_twitter" data="data/images/logo_twitter.svg" type="image/svg+xml"></object>';
    container_html += '<object class="svg-obj" id="logo_fb" data="data/images/logo_fb.svg" type="image/svg+xml"></object>';
    container_html += '</div>';

    container.html(container_html);

    drawNumber();

    //console.log("VOTA",$("#vota"));

}

function drawNumber(){
    var number = 12345678;
    var cifras = 8;
    var basic_chars = ['','','','','','','',''];
    var general_margins = ['281','248','211','178','142','106','71','37'];

    var chars = (""+number+"").split('').reverse();
    if(chars.length>cifras){
        return "";
    }

    $("#counter-value").css("left",function(){
        console.log("SETEO LEFT",general_margins[chars.length-1]);
        return general_margins[chars.length-1]+"px";
    });
    console.log("CHARS",chars);
    var real_chars = basic_chars.map(function(d,i){
        var pos = (cifras - i) - 1;
        //console.log("INDEX",cifras,i,pos,chars.length);
        if((pos)<chars.length){
            return chars[pos];
        }
        else{
            return d;
        }
    });

    var margins = ['36','35','83','35','36','80','38','0'];
    
    real_chars.reverse().forEach(function(d,i){
        var pos = i;
        $("#counter-value-"+pos).text(d)
            .css("padding-left",function(){
                return margins[i]+"px";
            });
    });
    $("#vota")
        .css("cursor","pointer")
        .click(function(d){
            window.open("https://decide.madrid.es/vota","_blank");
        });
    $("#hazte-alcalde-sa")
        .css("cursor","pointer")
        .click(function(d){
            drawCompleteGiffer();
        });



}

function drawCompleteGiffer(){

    container.html("");

    var giffer_html = '<div id="photo-container"></div>';

    giffer_html += '<div id="giffer-container"><table id="giffer-container-table"><tr>';

    //var images = ["data/images/vota.svg","data/images/vota.svg","data/images/vota.svg","data/images/vota.svg","data/images/vota.svg","data/images/vota.svg"];
    var images = ["data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif"];

    var columns = 3;

    images.forEach(function(d,i){
        if(i%columns===0){
            giffer_html += '</tr><tr>';
        }
        giffer_html += '<td><img src="'+d+'"></td>';

    });
    giffer_html += '</div>';

    container.html(giffer_html);
    var photo_html = "";

    photo_html += '<span id="photo-uploader">Subir foto para el gif</span>';
    photo_html += '<input type="file" id="imageLoader" name="imageLoader"/><canvas id="imageCanvas"></canvas>';
    var input = $( "input:file" ).css({
        background: "yellow",
          border: "3px red solid"
    });

    $("#photo-container").html(photo_html);

    var imageLoader = document.getElementById('imageLoader');
        imageLoader.addEventListener('change', handleImage, false);
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

}

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

$(document).ready(function(){
    drawMain();
});
