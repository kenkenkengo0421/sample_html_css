"use strict";
var btn = document.getElementById("btn");
btn.onclick = function () {
    var in_x = parseFloat(document.getElementById("x").value);
    var in_y = parseFloat(document.getElementById("y").value);
    var out_ans = 0;
    out_ans = in_x + in_y;
    document.getElementById("ans").innerText = out_ans.toString();
};
