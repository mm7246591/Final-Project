(function($) {
    $(function() {
        let chineseStr = '';
        let englishStr = '';
        let mathStr = '';
        //首頁開始考試按鈕    
        $("#sel_year, #sel_obj").change(function() {
            const year = $("#sel_year").val();
            const obj = $("#sel_obj").val();
            if (year != "選擇年份" && obj != "選擇科目") $(".button").show()
        });
        //選擇年份跟科目
        $(".button").click(function() {
            const obj = $("#sel_obj").val();
            switch (obj) {
                case "Chinese":
                    $("#home-form").attr("action", "examPage/Chinese.html");
                    break;
                case "English":
                    $("#home-form").attr("action", "examPage/English.html");
                    break;
                case "Math":
                    $("#home-form").attr("action", "examPage/Math.html");
                    break;
            }
        });
        //答案卡顯示  
        $(".content").hover(function() {
            $(".content").toggleClass("toggle")
        });
        //國文答案格
        for (let i = 1; i <= 42; i++) {
            chineseStr += `<label>
            <span>${i}</span>
            <input type="checkbox" name="Chinese" value="A">
            <input type="checkbox" name="Chinese" value="B">
            <input type="checkbox" name="Chinese" value="C">
            <input type="checkbox" name="Chinese" value="D">
            </label>`
        }
        //英文答案格
        for (let i = 1; i <= 56; i++) {
            englishStr += `<label>
            <span>${i}</span>
            <input type="checkbox" name="English" value="A">
            <input type="checkbox" name="English" value="B">
            <input type="checkbox" name="English" value="C">
            <input type="checkbox" name="English" value="D">
            <input type="checkbox" name="English" value="E">
            <input type="checkbox" name="English" value="F">
            <input type="checkbox" name="English" value="G">
            <input type="checkbox" name="English" value="H">
            <input type="checkbox" name="English" value="I">
            <input type="checkbox" name="English" value="J">
            </label>`
        }
        for (let i = 1; i <= 20; i++) {
            mathStr += `<label>
            <span>${i}</span>
            <input type="checkbox" name="Math" value="1">
            <input type="checkbox" name="Math" value="2">
            <input type="checkbox" name="Math" value="3">
            <input type="checkbox" name="Math" value="4">
            <input type="checkbox" name="Math" value="5">
            <input type="checkbox" name="Math" value="6">
            <input type="checkbox" name="Math" value="7">
            <input type="checkbox" name="Math" value="8">
            <input type="checkbox" name="Math" value="9">
            <input type="checkbox" name="Math" value="0">
            <input type="checkbox" name="Math" value="-">
            <input type="checkbox" name="Math" value="+/-">
            </label>`
        }
        $(".Chinese>#from-checkbox").append(chineseStr);
        $(".English>#from-checkbox").append(englishStr);
        $(".Math>#from-checkbox").append(mathStr);
        //--------新增的每一個都要寫!!! Thanks
    })
})(jQuery)