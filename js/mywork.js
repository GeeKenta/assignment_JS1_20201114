// jsを記述する際はここに記載していく
console.log("テストやで")   

function onClickPlayerIcon(self){
    $(".selected").each(function(){
        $(this).toggleClass("selected");
    });

    $(self).toggleClass("selected");
}

function janken(){

    if($(".selected").length===0){
        alert("自分の手を選んでくださいー！");
        return;
    }

    var evalue = Math.floor(Math.random()*3.0);
    $("#Opponent").remove();
    $("#OpponentPanel").append("<img id='Opponent' src='janken"+evalue+".png' />");
    
    var pfilename = $(".selected").attr("src");

    var pvalue = pfilename.match(/\d/)[0];

    var result = (pvalue+3-evalue)%3;

    if (result == 0){
        $("#result").text("引き分け");

    } else if (result == 1){
        $("#result").text("勝ったー！！");
        
    } else if (result == 2){
        $("#result").text("負けた、、、。");  
    }

}