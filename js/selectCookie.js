//버튼 눌렀을 때 실행되는 함수 :
//값 html 요소를 id로 받아오고 그 value 값을 가져옴
function button1_click() {
  const tech1 = document.getElementById("tech1");
  const tech1Value = tech1.options[tech1.selectedIndex].value;
  const tech2 = document.getElementById("tech2");
  const tech2Value = tech2.options[tech2.selectedIndex].value;
  const tech3 = document.getElementById("tech3");
  const tech3Value = tech3.options[tech3.selectedIndex].value;
  const tech4 = document.getElementById("tech4");
  const tech4Value = tech4.options[tech4.selectedIndex].value;
  const tech5 = document.getElementById("tech5");
  const tech5Value = tech5.options[tech5.selectedIndex].value;
  const tech6 = document.getElementById("tech6");
  const tech6Value = tech6.options[tech6.selectedIndex].value;

  //input의 value값을 저장한 list input 만들기
  const input = [
    1,
    Number(tech1Value),
    Number(tech2Value),
    Number(tech3Value),
    Number(tech4Value),
    Number(tech5Value),
    Number(tech6Value),
    141,
  ];

  //새로운 배열 선언
  let result_ab = new Array();
  let result_cd = new Array();

  //숨겨진 쿠키 2개의 위치 찾기
  const questionMark1 = input.indexOf(777);
  const questionMark2 = input.lastIndexOf(777);

  //숨겨진 쿠키 1의 앞 뒤 알아내기
  let a = -1;
  let b = -1;

  //숨겨진 쿠키 전에 없는 쿠키라면 a는 그 전 값이 된다.
  if (input[questionMark1 - 1] === 999) a = input[questionMark1 - 2];
  //아니면 a는 숨겨진 쿠키 전 값이 되겠지
  else a = input[questionMark1 - 1];

  //만약 숨겨진 쿠키 바로 뒤에가 없는 쿠키이거나 물음표라면, {그리고 숨겨진 쿠키 뒤에뒤에가 없는 쿠키거나 물음표라면}
  //b는 세번째 뒤에
  //아니면 2번째 뒤에
  //그것도 아니면 첫번째 뒤에
  if (input[questionMark1 + 1] === 999 || input[questionMark1 + 1] === 777) {
    if (input[questionMark1 + 2] === 999 || input[questionMark1 + 2] === 777)
      b = input[questionMark1 + 3];
    else b = input[questionMark1 + 2];
  } else b = input[questionMark1 + 1];

  let endCookie = false;

  //만약 아래와 같은 2가지 경우라면 나누지 않고 한번에 쿠키 출력
  if (
    (input[questionMark1 + 1] === 777 && input[questionMark1 + 2] === 999) ||
    (input[questionMark1 + 1] === 999 && input[questionMark1 + 2] === 777)
  ) {
    //true 이면 한번에 출력 일단 안하고
    endCookie = true;
  }

  //배열로 만들기
  for (let i = a + 10; i < b; i = i + 10) {
    result_ab.push(i);
  }

  {
    let c = -1;
    let d = -1;
    if (input[questionMark2 - 1] === 999) {
      c = input[questionMark2 - 2];
    } else c = input[questionMark2 - 1];

    if (input[questionMark2 + 1] === 999) {
      d = input[questionMark2 + 2];
    } else d = input[questionMark2 + 1];

    //배열로
    for (let i = c + 10; i < d; i = i + 10) {
      result_cd.push(i);
    }
    console.log(result_ab);
    result_cd = result_cd.concat(result_ab);
    console.log(result_cd);
    let result_cookies = new Array();

    result_cookies = cookies.filter((cookie) =>
      result_cd.includes(cookie.value)
    );
    const $result = document.getElementById("result");
    console.log(result_cookies);

    $result.innerHTML = result_cookies
      .map((result_cookie) => `<li>${result_cookie.content}</li>`)
      .join("");
  }
}
