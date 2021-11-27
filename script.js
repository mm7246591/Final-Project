(function($) {
    $(function() {
        let str = '';
    //--------首頁開始考試按鈕    
        $("#sel_year, #sel_obj").change(function() {
            const year = $("#sel_year").val();
            const obj = $("#sel_obj").val();
            if (year != "選擇年份" && obj != "選擇科目") $(".button").show()
            else $(".button").hide();
        });
        $(".button").click(function(){
            //const year = $("#sel_year").val();
            const obj = $("#sel_obj").val();
            switch(obj)
            {
                case "Chinese":
                    $("#home-form").attr("action", "examPage/Chinese.html");
                    break;
                case "English":
                    $("#home-form").attr("action", "examPage/English.html");
                    break;
                case "Math":
                    $("#home-form").attr("action", "examPage/Math.html");
                    break;
                default:
                    break;
            }
        });
    //--------這是什麼我不知道（記得填）  
        $(".content").hover(function() {
            $(".content").toggleClass("toggle")
        })
    //--------國文考試按鈕產生（？  
        for (let i = 1; i <= 42; i++) {
            str += `<label>
            <span>${i}</span>
            <input type="checkbox" name="Chinese" value="A">
            <input type="checkbox" name="Chinese" value="B">
            <input type="checkbox" name="Chinese" value="C">
            <input type="checkbox" name="Chinese" value="D">
            </label>`
        }
        $("#answer-form").append(str);
    //--------新增的每一個都要寫!!! Thanks
    })
})(jQuery)