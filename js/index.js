const $tech1 = document.querySelector(".tech1");
const $tech2 = document.querySelector(".tech2");
const $tech3 = document.querySelector(".tech3");
const $tech4 = document.querySelector(".tech4");
const $tech5 = document.querySelector(".tech5");
const $tech6 = document.querySelector(".tech6");

const cookies = [
  {
    value: 999,
    dataImage: "../Img/999.png",
    name: "x",
    content: "쿠키 X",
  },
  {
    value: 777,
    dataImage: "../Img/777.png",
    name: "hide",
    content: "숨겨진 쿠키",
  },
  {
    value: 1,
    dataImage: "../Img/1.png",
    name: "hide",
    content: "용감한 쿠키",
  },
  {
    value: 11,
    dataImage: "../Img/11.png",
    name: "hide",
    content: "다크초코 쿠키",
  },
  {
    value: 21,
    dataImage: "../Img/21.png",
    name: "hide",
    content: "딸기크레페맛 쿠키",
  },
  {
    value: 31,
    dataImage: "../Img/31.png",
    name: "hide",
    content: "블랙레이즌맛 쿠키",
  },
  {
    value: 41,
    dataImage: "../Img/41.png",
    name: "hide",
    content: "라떼맛 쿠키",
  },
  {
    value: 51,
    dataImage: "../Img/51.png",
    name: "hide",
    content: "에스프레소맛 쿠키",
  },
  {
    value: 61,
    dataImage: "../Img/61.png",
    name: "hide",
    content: "감초맛 쿠키",
  },
  {
    value: 71,
    dataImage: "../Img/71.png",
    name: "hide",
    content: "허브맛 쿠키",
  },
  {
    value: 81,
    dataImage: "../Img/81.png",
    name: "hide",
    content: "석류맛 쿠키",
  },
  {
    value: 91,
    dataImage: "../Img/91.png",
    name: "hide",
    content: "퓨어바닐라 쿠키",
  },
  {
    value: 101,
    dataImage: "../Img/101.png",
    name: "hide",
    content: "호밀맛 쿠키",
  },
  {
    value: 111,
    dataImage: "../Img/111.png",
    name: "hide",
    content: "뱀파이어 쿠키",
  },
  {
    value: 121,
    dataImage: "../Img/121.png",
    name: "hide",
    content: "정글전사 쿠키",
  },
  {
    value: 131,
    dataImage: "../Img/131.png",
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

$("#tech1 option[value=777]").prop("selected", "selected").change();

$tech2.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech2 option[value=999]").prop("selected", "selected").change();

$tech3.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech3 option[value=51]").prop("selected", "selected").change();

$tech4.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech4 option[value=777]").prop("selected", "selected").change();

$tech5.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech5 option[value=101]").prop("selected", "selected").change();

$tech6.innerHTML = cookies
  .map(
    (
      cookie
    ) => `<option value=${cookie.value} data-image=${cookie.dataImage} name=${cookie.name}>
                ${cookie.content}
              </option>`
  )
  .join(``);

$("#tech6 option[value=131]").prop("selected", "selected").change();
