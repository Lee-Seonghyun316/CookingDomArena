const $tech1 = document.querySelector(".tech1");
const $tech2 = document.querySelector(".tech2");
const $tech3 = document.querySelector(".tech3");
const $tech4 = document.querySelector(".tech4");
const $tech5 = document.querySelector(".tech5");
const $tech6 = document.querySelector(".tech6");

const cookies = [
  {
    value: 99999,
    dataImage: "File/Img/99999.png",
    name: "x",
    content: "쿠키 X",
  },
  {
    value: 77777,
    dataImage: "File/Img/77777.png",
    name: "hide",
    content: "숨겨진 쿠키",
  },
  {
    value: 100,
    dataImage: "File/Img/100.png",
    name: "hide",
    content: "용감한 쿠키",
  },
  {
    value: 200,
    dataImage: "File/Img/200.png",
    name: "hide",
    content: "다크초코 쿠키",
  },
  {
    value: 300,
    dataImage: "File/Img/300.png",
    name: "hide",
    content: "딸기크레페맛 쿠키",
  },
  {
    value: 400,
    dataImage: "File/Img/400.png",
    name: "hide",
    content: "벨벳케이크맛 쿠키",
  },
  {
    value: 500,
    dataImage: "File/Img/500.png",
    name: "hide",
    content: "망고맛 쿠키",
  },
  {
    value: 600,
    dataImage: "File/Img/600다.png",
    name: "hide",
    content: "바다요정 쿠키",
  },
  {
    value: 700,
    dataImage: "File/Img/700.png",
    name: "hide",
    content: "블랙레이즌맛 쿠키",
  },
  {
    value: 800,
    dataImage: "File/Img/800.png",
    name: "hide",
    content: "라떼맛 쿠키",
  },
  {
    value: 900,
    dataImage: "File/Img/900.png",
    name: "hide",
    content: "에스프레소맛 쿠키",
  },
  {
    value: 1000,
    dataImage: "File/Img/1000.png",
    name: "hide",
    content: "감초맛 쿠키",
  },
  {
    value: 1100,
    dataImage: "File/Img/1100.png",
    name: "hide",
    content: "허브맛 쿠키",
  },
  {
    value: 1200,
    dataImage: "File/Img/1200.png",
    name: "hide",
    content: "석류맛 쿠키",
  },
  {
    value: 1300,
    dataImage: "File/Img/1300.png",
    name: "hide",
    content: "퓨어바닐라 쿠키",
  },
  {
    value: 1400,
    dataImage: "File/Img/1400.png",
    name: "hide",
    content: "호밀맛 쿠키",
  },
  {
    value: 1500,
    dataImage: "File/Img/1500.png",
    name: "hide",
    content: "뱀파이어 쿠키",
  },
  {
    value: 1600,
    dataImage: "File/Img/1600.png",
    name: "hide",
    content: "정글전사 쿠키",
  },
  {
    value: 1700,
    dataImage: "File/Img/1700.png",
    name: "hide",
    content: "아몬드맛 쿠키",
  },
];

$tech1.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech1 option[value=77777]").prop("selected", "selected").change();

$tech2.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech2 option[value=99999]").prop("selected", "selected").change();

$tech3.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech3 option[value=500]").prop("selected", "selected").change();

$tech4.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech4 option[value=77777]").prop("selected", "selected").change();

$tech5.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech5 option[value=1100]").prop("selected", "selected").change();

$tech6.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech6 option[value=1300]").prop("selected", "selected").change();
