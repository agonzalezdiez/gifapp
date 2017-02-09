

var container;
var footer;
var header;
var rrss;


function drawMain(){

    var images = ["data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif"];

    var columns = 3;

    var giffer_html = '<table id="giffer-container-table"><tr>';

    images.forEach(function(d,i){
        if(i%columns===0){
            giffer_html += '</tr><tr>';
        }
        giffer_html += '<td><img src="'+d+'"></td>';

    });
    giffer_html += '</div>';

    container = $("#main-container");
    footer = $("#footer-container");
    header = $("#header-container");
    rrss = $("#rrss-container");

    var header_html = "";
    header_html += '<div id="title-container">';
      header_html += '<div id="logo-left"><object class="svg-obj" id="los-de-abajo" data="data/images/los_de_abajo.svg" type="image/svg+xml"></object></div>';
      header_html += '<div class="title" id="title1">MADRID 100% SOSTENIBLE>>>>></div>';
      header_html += '<div class="title" id="title2" style="opacity:0.000001;">BILLETE ÚNICO>>>>></div>';
      header_html += '<div id="participa-logo"><img class="svg-obj" id="vota" src="data/images/vota.svg"/></div>';
    header_html += '</div>';

    header.html(header_html);

    container_html = "";

    /*container_html += '<div id="title-container">';
      container_html += '<div id="logo-left"><object class="svg-obj" id="los-de-abajo" data="data/images/los_de_abajo.svg" type="image/svg+xml"></object></div>';
      container_html += '<div class="title" id="title1">MADRID 100% SOSTENIBLE>>>>></div>';
      container_html += '<div class="title" id="title2" style="opacity:0.000001;">OTRA COSA!!!!!>>>>></div>';
      container_html += '<div id="participa-logo"><img class="svg-obj" id="vota" src="data/images/vota.svg"/></div>';
    container_html += '</div>';
    */
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
      container_html += '<img class="svg-obj" id="descarga_materiales" src="data/images/descarga_materiales.svg" />';
      container_html += giffer_html;
      //container_html += '<object class="svg-obj" id="hazte-alcalde-sa" data="data/images/hazte_alcalde_sa.svg" type="image/svg+xml"></object>';
    container_html += '</div>';

    container.html(container_html);

    var rrss_html = "";
    rrss_html += '<div id="rrss-container">';
    rrss_html += '<object class="svg-obj" id="logo_twitter" data="data/images/logo_twitter.svg" type="image/svg+xml"></object>';
    rrss_html += '<object class="svg-obj" id="logo_fb" data="data/images/logo_fb.svg" type="image/svg+xml"></object>';
    rrss_html += '</div>';

    rrss.html(rrss_html);

    //FOOTER
    var footer_html = '';

    footer_html += '<div id="footer">';
    footer_html += '<span id="footer-msg">Lorem fistrum sexuarl eiusmod fistro. Reprehenderit apetecan sit amet quietooor ese que llega et llevame al sircoo. Ullamco dolore torpedo labore. No te digo trigo por no llamarte Rodrigor ese hombree mamaar la caidita pupita exercitation duis quis hasta luego Lucas esse tiene musho peligro. A gramenawer de la pradera elit me cago en tus muelas diodenoo a peich no puedor sexuarl ex</span>';
    footer_html += '<span id="footer-twitter">API TWITTER</span>';
    footer_html += '';
    footer_html += '</div>';

    footer.html(footer_html);

    drawNumber();

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
        return general_margins[chars.length-1]+"px";
    });
    var real_chars = basic_chars.map(function(d,i){
        var pos = (cifras - i) - 1;
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

    /*giffer_html += '<div id="giffer-container"><table id="giffer-container-table"><tr>';

    //var images = ["data/images/vota.svg","data/images/vota.svg","data/images/vota.svg","data/images/vota.svg","data/images/vota.svg","data/images/vota.svg"];
    var images = ["data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif","data/images/YoSoyAlcalde.gif"];

    var columns = 3;

    images.forEach(function(d,i){
        if(i%columns===0){
            giffer_html += '</tr><tr>';
        }
        giffer_html += '<td><img src="'+d+'"></td>';

    });
    giffer_html += '</div>';*/

    container.html(giffer_html);
    var photo_html = "";

    photo_html += '<div id="photo-msg"><span class="photo-msg-text" id="photo-msg-text">PARA HACERTE ALCALDE/ALCALDESA DE MADRID, LO TIENES FÁCIL. PUEDES VOTAR EN <span class="photo-msg-text" id="photo-msg-text-mark">HTTPS://DECIDE.MADRID.ES/VOTA</span> <span class="photo-msg-text" id="photo-msg-text">LAS DOS PROPUESTAS CIUDADANAS Y </span><span  class="photo-msg-text" id="photo-msg-text-mark">HACERTE UN GIF PERSONALIZADO</span><span class="photo-msg-text" id="photo-msg-text">. GANE LO QUE GANE, GANA LA DEMOCRACIA DIRECTA. GANAN LOS DE ABAJO.</span></div>';
    //photo_html += '<div id="photo-msg"><span class="photo-msg-text" id="photo-msg-text">PARA HACERTE ALCALDE/SA EN MADRID LO TIENES MUY FÁCIL. PUEDES VOTAR EN DECIDE.MADRID Y AQUÍ PUEDES HACERTE UN </span><span class="photo-msg-text" id="photo-msg-text-mark">GIF PERSONALIZADO</span></div>';
    //photo_html += '<img class="svg-obj" id="seleccionar-archivo" src="data/images/seleccionar_archivo.svg" />';
    photo_html += '<div id="generated-gif-container"></div>';
    //photo_html += '<span id="photo-uploader">Subir foto para el gif</span>';
    photo_html += '<input type="file" id="imageLoader" name="imageLoader"/><canvas id="imageCanvas"></canvas>';
    var input = $( "input:file" ).css({
        background: "yellow",
        opacity: 0.000001,
        border: "3px red solid"
    });
    photo_html += '<label for="imageLoader" class="custom-file-upload"><img class="svg-obj" id="seleccionar-archivo" src="data/images/seleccionar_archivo.svg" />';

    //.css("background-image",'url("data/images/seleccionar_archivo.svg")');

    $("#photo-container").html(photo_html);

    var imageLoader = document.getElementById('imageLoader');
        imageLoader.addEventListener('click', function(){ 
            $("#uploaded-img-container").remove();
            $("#gif-result").remove(); 
            $("#cropping-done-btn").remove(); 
        }, false);
        imageLoader.addEventListener('change', handleImage, false);
}

function drawResult(url){

    container.html('<div id="result-container"></div>');

    var result_html = "";

    result_html += '<span id="result-msg">AQUÍ TIENES LA PRUEBA DE QUE ERES ALCALDE. RECUERDA QUE PUEDES VOTAR EN HTTPS://DECIDE.MADRID.ES/VOTA LAS DOS PROPUESTAS CIUDADANAS. Y AHORA ¡COMPARTE!</span>';

    result_html += '<div id="rrss-result">';
    result_html += '<img class="share-result svg-obj" id="share-result-tw" src="data/images/compartir_tw.svg" />';
    result_html += '<img class="share-result svg-obj" id="share-result-fb" src="data/images/compartir_fb.svg" />';
    result_html += '<img class="share-result svg-obj" id="share-result-link" src="data/images/compartir_link.svg" />';
    result_html += '</div>';

    result_html += '<div id="gif-result">';
    result_html += '<img src="'+url+'"/>';

    result_html += '</div>';

    $("#result-container").html(result_html);

    $(".share-result").on("click",function(d){
        var type = this.id.split('-')[2];
        if(type=="tw"){
            window.open("http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3","_blank");

        }else if(type="fb"){
            window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A//loquesea.org","_blank");

        }else if(type="link"){

        }
        else{

        }
    });

}

function generateGif(new_image){
    var gif = new GIF({
        workers: 2,
        quality: 10
    });

    var images = ['../data/01_losdeabajo.png','../data/02_losdeabajo.png','../data/03_losdeabajo.png','../data/04_losdeabajo.png','../data/05_losdeabajo.png','../data/06_losdeabajo.png','../data/07_losdeabajo.png','../data/08_losdeabajo.png'];

    images.forEach(function(imageElement,i){
        //console.log("AAA",i);
        var img = new Image(300,300);
        if(i!=2){
            img.src = imageElement;
        }
        else{
            img.src = new_image;
            //console.log("IMAGE",img.src);
        }
        img.style.width = '300px';
        img.style.height = 'auto';
        //console.log("IMG",img);
        gif.addFrame(img);
    });
    gif.on('finished', function(blob) {
        url = window.URL.createObjectURL(blob);
        $("#cropping-done-btn").remove();
        //$("#photo-container").append('<img id="gif-result" src="'+url+'"/>');
        window.open(url,"_blank");
        var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "YoSoyAlcalde.gif";
            a.click();
        //window.URL.revokeObjectURL(url);
        drawResult(url);
    });
    gif.render();

}

function handleImage(e){
    var canvas = document.getElementById('imageCanvas');
    
    var ctx = canvas.getContext('2d');
    var reader = new FileReader();
    var fileUploaded;

    reader.onload = function(event){
        /*var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        };
        img.src = event.target.result;
        */
        
        //generateGif(event.target.result,"aaaaa.png");
        //populateImg(event.target.result);
        //$("#photo-container").append('<img id="uploaded-img" src="'+event.target.result+'"/>');
        $("#photo-container").append('<div id="uploaded-img-container"></div>');
        //var opts = {"boundary":"#uploaded-img-container","enableZoom":true};
        //$("#uploaded-img").croppie(opts);
        //$('#item').croppie(opts);

        //console.log("URL TMP",event.target);

        //url_tmp = window.URL.createObjectURL(event.target.result);

    };

    reader.onloadend = function(event){

        //console.log("EVENT",event.target.result);
        $("#photo-container").append('<span id="cropping-done-btn">Listo!</span>');

        var basic = $('#uploaded-img-container').croppie({
            viewport: {
                width: 150,
                height: 200
            },
            enableZoom: true
        });
        basic.croppie('bind', {
            url: event.target.result,
            //url: "data/cat.jpg",
            points: [77, 469, 280, 739]
        });

        $("#cropping-done-btn")
            .css("cursor","pointer")
            .on("click",function(d){
                basic.croppie('result').then(function(result){
                    generateGif(result,"aa.png");
                    basic.croppie("destroy");
                });
            });

    };

    fileUploaded = reader.readAsDataURL(e.target.files[0]);     
}

$(document).ready(function(){
    drawMain();
    //drawResult();

    window.setInterval(function(){
        $(".title").css("opacity",function(i,d){
            return 1.0 - d;
        });
    },4000);
});
