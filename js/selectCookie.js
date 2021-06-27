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

  const Nothing = 99999;
  const What = 77777;
  const finalFrontCookie = 400;
  const finalCenterCookie = 1000;
  const firstBackCookie = 1100;
  //input의 value값을 저장한 list input 만들기
  const input = [
    0,
    Number(tech1Value),
    Number(tech2Value),
    Number(tech3Value),
    Number(tech4Value),
    Number(tech5Value),
    Number(tech6Value),
    1700,
  ];

  //쿠키 경우의 수 줄이기 (전방 쿠키가 더이상 포함 안되는 경우)
  if (input[2] === Nothing && input[1] <= finalFrontCookie) {
    input[1] = finalFrontCookie;
  } else if (input[4] === Nothing && input[3] <= finalCenterCookie) {
    input[3] = finalCenterCookie;
  } else if (input[6] === Nothing && input[5] >= firstBackCookie) {
    input[5] = firstBackCookie;
  }
  //새로운 배열 선언

  //숨겨진 쿠키 2개의 위치 찾기
  const questionMark1 = input.indexOf(What);
  const questionMark2 = input.lastIndexOf(What);

  //숨겨진 쿠키 1의 앞 뒤 알아내기
  let a = -1;
  let b = -1;

  //숨겨진 쿠키 전에 없는 쿠키라면 a는 그 전 값이 된다.
  if (input[questionMark1 - 1] === Nothing) a = input[questionMark1 - 2];
  //아니면 a는 숨겨진 쿠키 전 값이 되겠지
  else a = input[questionMark1 - 1];

  //만약 숨겨진 쿠키 바로 뒤에가 없는 쿠키이거나 물음표라면, {그리고 숨겨진 쿠키 뒤에뒤에가 없는 쿠키거나 물음표라면}
  //b는 세번째 뒤에
  //아니면 2번째 뒤에
  //그것도 아니면 첫번째 뒤에
  if (
    input[questionMark1 + 1] === Nothing ||
    input[questionMark1 + 1] === What
  ) {
    if (
      input[questionMark1 + 2] === Nothing ||
      input[questionMark1 + 2] === What
    )
      b = input[questionMark1 + 3];
    else b = input[questionMark1 + 2];
  } else b = input[questionMark1 + 1];

  let endCookie = false;

  //만약 아래와 같은 2가지 경우라면 나누지 않고 한번에 쿠키 출력
  if (
    (input[questionMark1 + 1] === What &&
      input[questionMark1 + 2] === Nothing) ||
    (input[questionMark1 + 1] === Nothing && input[questionMark1 + 2] === What)
  ) {
    //true 이면 한번에 출력 일단 안하고
    endCookie = true;
  }

  //배열로 만들기

  let first_cookies = new Array();

  first_cookies = cookies.filter(
    (cookie) => cookie.value > a && cookie.value < b
  );
  console.log(first_cookies);
  const $result = document.getElementById("result1");

  $result.innerHTML = first_cookies
    .map((first_cookie) => `<li>${first_cookie.content}</li>`)
    .join("");

  {
    let c = -1;
    let d = -1;
    if (input[questionMark2 - 1] === Nothing) {
      c = input[questionMark2 - 2];
    } else c = input[questionMark2 - 1];

    if (input[questionMark2 + 1] === Nothing) {
      d = input[questionMark2 + 2];
    } else d = input[questionMark2 + 1];

    //배열로

    let second_cookies = new Array();

    second_cookies = cookies.filter(
      (cookie) => cookie.value > c && cookie.value < d
    );
    const $result = document.getElementById("result2");

    $result.innerHTML = second_cookies
      .map((second_cookie) => `<li>${second_cookie.content}</li>`)
      .join("");
  }
}
