
function drawMain(){

    var container = $("#main-container");

    container_html = "";

    container_html += '<div id="title-container">';
      container_html += '<div id="logo-left"><object class="svg-obj" id="los-de-abajo" data="data/images/los_de_abajo.svg" type="image/svg+xml"></object></div>';
      container_html += '<div id="title">MADRID 100% SOSTENIBLE>>>>></div>';
      container_html += '<div id="participa-logo"><object class="svg-obj" id="vota" data="data/images/vota.svg" type="image/svg+xml"></object></div>';
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
      container_html += '<object class="svg-obj" id="hazte-alcalde-sa" data="data/images/hazte_alcalde_sa.svg" type="image/svg+xml"></object>';
    container_html += '</div>';

    container_html += '<div id="rrss-container">';
    container_html += '<object class="svg-obj" id="logo_twitter" data="data/images/logo_twitter.svg" type="image/svg+xml"></object>';
    container_html += '<object class="svg-obj" id="logo_fb" data="data/images/logo_fb.svg" type="image/svg+xml"></object>';
    container_html += '</div>';

    container.html(container_html);

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


}

$(document).ready(function(){
    drawMain();

});
