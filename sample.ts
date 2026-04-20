var btn = document.getElementById("btn") as HTMLElement;
btn.onclick = function() {

  var in_x:number = parseFloat((document.getElementById("x") as HTMLInputElement).value);
  var in_y:number = parseFloat((document.getElementById("y") as HTMLInputElement).value);
  var out_ans = 0;
  out_ans = in_x + in_y;

  (document.getElementById("ans") as HTMLElement).innerText = out_ans.toString();
};
