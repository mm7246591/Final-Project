(function($) {
    $(function() {
        var api = "http://127.0.0.1:3000/score";
        // var data = {"type": "chinese", "score": 88};
        $.get(api, function(res){
            $("#score").text(res.score);
            console.log("HHHH");
        })
    })
})(jQuery)