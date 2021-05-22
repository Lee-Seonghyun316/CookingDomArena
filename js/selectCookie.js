function handleOnChange(e) {
  // alert(tech1.options[tech1.selectedIndex].value);
  const cookieValue = e.options[e.selectedIndex].value;

  // console.log(tech1.options[tech1.selectedIndex].value)
  alert(cookieValue);
  return cookieValue;
}

function button1_click() {
  // alert("버튼1을 누르셨습니다.");
  const tech1 = document.getElementById("tech1");
  const tech1Value = tech1.options[tech1.selectedIndex].value;
  // alert(tech1Value);
  const tech2 = document.getElementById("tech2");
  const tech2Value = tech2.options[tech2.selectedIndex].value;
  // alert(tech2Value);
  const tech3 = document.getElementById("tech3");
  const tech3Value = tech3.options[tech3.selectedIndex].value;
  // alert(tech3Value);
  const tech4 = document.getElementById("tech4");
  const tech4Value = tech4.options[tech4.selectedIndex].value;
  // alert(tech4Value);
  const tech5 = document.getElementById("tech5");
  const tech5Value = tech5.options[tech5.selectedIndex].value;
  // alert(tech5Value);
  const tech6 = document.getElementById("tech6");
  const tech6Value = tech6.options[tech6.selectedIndex].value;
  // alert(tech6Value);

  const input = [
    0,
    Number(tech1Value),
    Number(tech2Value),
    Number(tech3Value),
    Number(tech4Value),
    Number(tech5Value),
    Number(tech6Value),
    132,
  ];
  var result_ab = "";
  var result_ab_list = [];
  var result_cd = "";
  // alert(typeof input[3]);
  // const questionMark1 = 1;
  const questionMark1 = input.indexOf(777);
  const questionMark2 = input.lastIndexOf(777);
  // alert(questionMark1);
  var a = -1;
  var b = -1;
  if (input[questionMark1 - 1] === 999) a = input[questionMark1 - 2];
  else a = input[questionMark1 - 1];
  // alert(a);

  if (input[questionMark1 + 1] === 999 || input[questionMark1 + 1] === 777) {
    if (input[questionMark1 + 2] === 999 || input[questionMark1 + 2] === 777)
      b = input[questionMark1 + 3];
    else b = input[questionMark1 + 2];
  } else b = input[questionMark1 + 1];
  // alert(b);
  // alert(a);
  var endCookie = false;
  if (
    (input[questionMark1 + 1] === 777 && input[questionMark1 + 2] === 999) ||
    (input[questionMark1 + 1] === 999 && input[questionMark1 + 2] === 777)
  ) {
    endCookie = true;
    result_ab = a + "??" + b;
    // result_ab_list.push("h");
    document.getElementById("result").innerText = result_ab;
    // alert(typeof input[questionMark1 + 2]);
  } else {
    var c = -1;
    var d = -1;
    if (input[questionMark2 - 1] === 999) {
      c = input[questionMark2 - 2];
    } else c = input[questionMark2 - 1];

    // alert(c);
    if (input[questionMark2 + 1] === 999) {
      d = input[questionMark2 + 2];
    } else d = input[questionMark2 + 1];
    // if (c === -1 || d === -1) {
    //   result = a + "??" + b;
    // } else
    result_cd = a + "?" + b + "와" + c + "?" + d;
    document.getElementById("result").innerText = result_cd;
  }
}
