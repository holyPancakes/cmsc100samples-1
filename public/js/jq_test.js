$(document).ready(function(){
    $("#intro").hide();
    
    $("#show_heading").click(function(){
        $("#intro").show();
    });

    $("p.p1").on({
        "mouseover": function(){
            $("#show_this").fadeIn();
        },
        "mouseout": function(){
            $("#show_this").fadeOut();
        }
    });
    
    $(".textbox").keyup(function(){
        a = Number($("#a").val());
        b = Number($("#b").val());
        sum = a + b
        $("#sum").val(sum);
    });

    //$("#newContent").load("index.html", function(resp){
     //   alert("Content updated!");
    //});
    
    $("button[name='get_students']").click(function(){
        $.get("http://localhost:5000/degree-programs/17",
            function(resp){
                console.log(resp);
            })
    });
    $("button[name='post_student']").click(function(){
        $.post("http://localhost:5000/degree-programs",{
            code:"BSF",
            name:"BS Forestry"
            },
            function(resp){
                console.log(resp);
            })
    });
    
    $("button[name='reverse_select']").click(function(){
        $(".cmsc100ef2l").each(function(i){
            if(this.isChecked
                
            }else{
                
            }
            
        });
    });
    
});