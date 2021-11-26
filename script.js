(function($) {
    $(function() {
        const year = $("#sel_year").val();
        const object = $("#sel_obj").val();
        let str = '';
        $("#sel_year, #sel_obj").change(function() {

            if (year != "選擇年份" && object != "選擇科目") $("#strBtn").show();
        });
        $(".content").hover(function() {
            $(".content").toggleClass("toggle")
        })
        for (let i = 1; i <= 42; i++) {
            str += `<label>
            <span>${i}</span>
            <input type="radio" name="Chinese" value="A">
            <input type="radio" name="Chinese" value="B">
            <input type="radio" name="Chinese" value="C">
            <input type="radio" name="Chinese" value="D">
            </label>`
        }
        $("#answer-form").append(str);
    })
})(jQuery)