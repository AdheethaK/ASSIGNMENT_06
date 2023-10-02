var is_clicked = false;
$("#arrow").on('click',()=>{
    console.log("done")
    $("#arrow").css({
        transition: "transform 0.5s ease",
        transform: "rotate(180deg)"});
    if(is_clicked){
        is_clicked=false;
        $("#arrow").css({
            transition: "transform 0.5s ease",
            transform: "rotate(0deg)"});
    }else{
        is_clicked=true;
    }
})