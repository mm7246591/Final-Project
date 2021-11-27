(function($) {
    $(function() {
        let str = '';
        $("#sel_year, #sel_obj").change(function() {
            const year = $("#sel_year").val();
            const obj = $("#sel_obj").val();
            if (year != "選擇年份" && obj != "選擇科目") {
                $(".button").show()
            };
        });
        $(".content").hover(function() {
            $(".content").toggleClass("toggle")
        })
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
    })
})(jQuery)