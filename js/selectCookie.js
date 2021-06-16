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
  let result_ab = new Array();
  let result_cd = new Array();
  const questionMark1 = input.indexOf(777);
  const questionMark2 = input.lastIndexOf(777);
  let a = -1;
  let b = -1;
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
    //string으로 표시해보
    // for (let i = a;i<b;i=i+10){
    //   let i_string = i
    //   result_ab += i
    // }

    //배열로 잠시 후
    for (let i = a; i < b; i = i + 10) {
      let i_string = i;
      result_ab.push(i);
    }
    //
    // // result_ab = a + "??" + b;
    // document.getElementById("result").innerText = result_ab;
    // alert(typeof input[questionMark1 + 2]);
  } else {
    let c = -1;
    let d = -1;
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

    //string으로
    // for (let i = c; i < d; i = i + 10) {
    //   let i_string = i;
    //   result_cd += i;
    // }
    // result_cd = result_ab + result_cd;

    //배열로
    for (let i = c; i < d; i = i + 10) {
      result_cd.push(i);
    }
    result_cd.concat(result_ab);
    let result_cookies = new Array();
    // for (let i = 0; i < result_cd.length; i++) {
    //   list_result.concat(cookies.filter((cookie) => cookie.value == i));
    // }

    result_cookies = cookies.filter((cookie) =>
      result_cd.includes(cookie.value)
    );
    const $result = document.getElementById("result");
    console.log(result_cookies);

    $result.innerHTML = result_cookies.map(
      (result_cookie) => `<li>${result_cookie.content}</li>`
    ).join("");
    // document.getElementById("result").innerText = result_cd;
  }
}
