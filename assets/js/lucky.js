// const ARRAY_LIST = [
//   {
//     numberRatio: 1,
//     item: "Vàng 9999",
//     ratio: 0.01,
//   },
//   {
//     numberRatio: 2,
//     item: "Ô tô Mec",
//     ratio: 0.01,
//   },
//   {
//     numberRatio: 3,
//     item: "Xe máy SH",
//     ratio: 0.01,
//   },
//   {
//     numberRatio: 4,
//     item: "Giảm 13K",
//     ratio: 0.01,
//   },
//   {
//     numberRatio: 5,
//     item: "Giảm 14K",
//     ratio: 0.01,
//   },
//   {
//     numberRatio: 6,
//     item: "Du lịch Phú Quốc",
//     ratio: 0.6,
//   },
//   {
//     numberRatio: 7,
//     item: "Giảm 16K",
//     ratio: 0.3,
//   },
//   {
//     numberRatio: 8,
//     item: "Giảm 17K",
//     ratio: 0.01,
//   },
//   {
//     numberRatio: 9,
//     item: "Giảm 18K",
//     ratio: 0.01,
//   },
//   {
//     numberRatio: 10,
//     item: "Giảm 19K",
//     ratio: 0.01,
//   },
//   {
//     numberRatio: 11,
//     item: "Khoản nợ siêu to",
//     ratio: 0.01,
//   },
//   {
//     numberRatio: 12,
//     item: "Giảm 21K",
//     ratio: 0.01,
//   },
// ];

// // const totalPsent = ARRAY_LIST.reduce((current, next) => {
// //   console.log("🚀 ~ totalPersent ~ next.ratio:", next.ratio);
// //   return current + next.ratio;
// // }, 0);
// // console.log("🚀 ~ totalPsent ~ totalPsent:", totalPsent);

// const listNumberRatio = ARRAY_LIST.map((arrayItem) => arrayItem.numberRatio);
// const listSetUpRatio = ARRAY_LIST.map((arrayItem) => arrayItem.ratio);

// // ============================= LuckyWheel animation   =============================

// // $(document).ready(function () {
// //  Setup variables
// // let heightCount = 1;
// // let arrayCount = [];
// var wheel = $(".wheel"),
//   active = $(".lucky-win"),
//   lastRotation = -90,
//   currentRotation = 0,
//   tolerance,
//   checkBtn = true,
//   deg;
// // $btnPlay = $("#btnPlay");
// //  Creating the Timeline
// var indicator = new TimelineMax();
// var spinWheel = new TimelineMax();

// function luckyWheelAnimation() {
//   //  Random degree
//   function getRandomInt() {
//     const random = Math.random() + Number.EPSILON;
//     let sum = 0;
//     let selectedNumber;
//     let selectedContent;

//     for (let i = 0; i < listNumberRatio.length; i++) {
//       sum += listSetUpRatio[i];

//       if (random <= sum) {
//         selectedNumber = listNumberRatio[i];
//         selectedContent = ARRAY_LIST[i].item;
//         break;
//       }
//     }

//     const presentInNumber = 360 / listNumberRatio.length;

//     // console.log(
//     //   "Tọa độ được chọn:",
//     //   presentInNumber * selectedNumber - 30 + 720
//     // );
//     // `vị trí được chọn là: ${heightCount}`,
//     console.log(`Giá trị là ${selectedNumber} -- ${selectedContent}`);

//     // arrayCount.push(selectedContent);
//     // heightCount++;

//     return presentInNumber * selectedNumber - 30 + 720;
//   }

//   var deg = getRandomInt();

//   indicator
//     .to(active, 0.13, {
//       rotation: 10,
//       transformOrigin: "65% 36%",
//       ease: Power1.easeOut,
//     })
//     .to(active, 0.13, {
//       rotation: -3,
//       ease: Power4.easeOut,
//     })
//     .add("end");
//   //  Luckywheel animation
//   spinWheel.to(wheel, 5, {
//     rotation: deg,
//     transformOrigin: "50% 50%",
//     ease: Power4.easeOut,
//     onUpdate: function () {
//       currentRotation = Math.round(this.target[0]._gsTransform.rotation);
//       //_gsTransform: current position of the wheel
//       tolerance = currentRotation + lastRotation;

//       if (Math.round(currentRotation) % (360 / 12) <= tolerance) {
//         if (indicator.progress() > 0.2 || indicator.progress() === 0) {
//           indicator.play(0);
//         }
//       }
//       lastRotation = currentRotation;
//     },
//     onComplete: function () {
//       TweenMax.to(wheel, 1, {
//         rotation: 0, // Đưa về vị trí gốc (12 giờ)
//         transformOrigin: "50% 50%",
//         ease: Power4.easeOut,
//         onComplete: function () {
//           currentRotation = 0;
//           lastRotation = 0;
//           checkBtn = true;
//         },
//       }).delay(2);
//     },
//   });
//   spinWheel.add("end");
// }

// // Hàm để bắt sự kiện nhấp vào nút Play
// function handlePlayClick() {
//   luckyWheelAnimation();
//   currentRotation = 0;
//   lastRotation = 0;
//   //   indicator.timeScale(1).seek(0);
//   //   spinWheel.timeScale(1).seek(0);
// }

// const btnPlay = document.getElementById("btnPlay");
// btnPlay.addEventListener("click", () => {
//   if (checkBtn) {
//     handlePlayClick();
//     checkBtn = false;
//   }
// });

// // let count = 0;
// // const myTimeout = setInterval(() => {
// //   handlePlayClick();
// //   count++;

// //   if (count === 100) {
// //     clearInterval(myTimeout);
// //     console.log(arrayCount);
// //     // Ví dụ sử dụng
// //     var stringOccurrences = countStringOccurrences(arrayCount);

// //     // In ra số lần xuất hiện của từng chuỗi
// //     for (var key in stringOccurrences) {
// //       console.log(key + ": " + stringOccurrences[key]);
// //     }
// //     // });
// //   }
// // }, 1000);

// // function countStringOccurrences(arr) {
// //   // Tạo một đối tượng để lưu trữ và đếm
// //   var count = {};

// //   // Lặp qua mảng và đếm số lần xuất hiện của từng chuỗi
// //   for (var i = 0; i < arr.length; i++) {
// //     var element = arr[i];

// //     // Nếu phần tử là chuỗi
// //     if (typeof element === "string") {
// //       // Kiểm tra nếu chuỗi đã tồn tại trong đối tượng count
// //       if (count[element]) {
// //         count[element]++; // Tăng số lần xuất hiện lên 1
// //       } else {
// //         count[element] = 1; // Thêm chuỗi vào đối tượng count với số lần xuất hiện là 1
// //       }
// //     }
// //   }

// //   return count;
// // }

// // function randomNumber() {
// //   const numbers = [1, 2, 3, 4, 5];
// //   const ratios = [0.05, 0.8, 0.05, 0.05, 0.05];

// //   // Tính tổng tỉ lệ phần trăm
// //   const totalRatio = Math.round(
// //     ratios.reduce((total, ratio) => total + ratio, 0)
// //   );

// //   // Kiểm tra tổng tỉ lệ phần trăm
// //   if (totalRatio !== 1) {
// //     // Tổng tỉ lệ phần trăm không chính xác, cần điều chỉnh
// //     console.log("Tổng tỉ lệ phần trăm không chính xác");
// //     return;
// //   }

// //   // Xác định số ngẫu nhiên dựa trên tỉ lệ phần trăm
// //   const random = Math.random();
// //   let sum = 0;
// //   let selectedNumber;

// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += ratios[i];

// //     if (random <= sum) {
// //       selectedNumber = numbers[i];
// //       break;
// //     }
// //   }

// //   const persentInNumber = 360 / parseInt(numbers.length);
// //   console.log("🚀 ~ randomNumber ~ persentInNumber:", persentInNumber);

// //   console.log("Tọa độ được chọn:", persentInNumber * selectedNumber);
// //   console.log("Số ngẫu nhiên được chọn:", selectedNumber);
// // }

// // let count = 0;

// // const myTimeout = setInterval(() => {
// //   randomNumber();
// //   count++;

// //   if (count === 10) {
// //     clearInterval(myTimeout);
// //   }
// // }, 1000);

/**
 * Prize data will space out evenly on the deal wheel based on the amount of items available.
 * @param text [string] name of the prize
 * @param color [string] background color of the prize
 * @param reaction ['resting' | 'dancing' | 'laughing' | 'shocked'] Sets the reaper's animated reaction
 */
const prizes = [
  {
    text: "10% Off Sticker Price",
    color: "hsl(134.86 57.38% 35.88%)",
    reaction: "dancing",
    ratio: 0.02,
    numberRatio: 1,
  },
  {
    text: "Free Car",
    color: "hsl(0 0% 100%)",
    reaction: "shocked",
    ratio: 0.95,
    numberRatio: 2,
  },
  {
    text: "No Money Down",
    color: "hsl(134.86 57.38% 35.88%)",
    reaction: "shocked",
    ratio: 0.005,
    numberRatio: 3,
  },
  {
    text: "Half Off Sticker Price",
    color: "hsl(0 0% 100%)",
    reaction: "shocked",
    ratio: 0.01,
    numberRatio: 4,
  },
  {
    text: "Free DIY Carwash",
    color: "hsl(134.86 57.38% 35.88%)",
    reaction: "dancing",
    ratio: 0.005,
    numberRatio: 5,
  },
  {
    text: "Eternal Damnation",
    color: "hsl(0 0% 100%)",
    reaction: "laughing",
    ratio: 0.005,
    numberRatio: 6,
  },
  {
    text: "Used Travel Mug",
    color: "hsl(134.86 57.38% 35.88%)",
    reaction: "laughing",
    ratio: 0.005,
    numberRatio: 7,
  },
  {
    text: "One Solid Hug",
    color: "hsl(0 0% 100%)",
    reaction: "dancing",
    ratio: 0,
    numberRatio: 8,
  },
];

const listNumberRatio = prizes.map((arrayItem) => arrayItem.numberRatio);
const listSetUpRatio = prizes.map((arrayItem) => arrayItem.ratio);
// let arrayCount = [];

const wheel = document.querySelector(".deal-wheel");
const spinner = wheel.querySelector(".spinner");
const trigger = wheel.querySelector(".btn-spin");
const ticker = wheel.querySelector(".ticker");
// const reaper = wheel.querySelector(".grim-reaper");
const prizeSlice = 360 / prizes.length;
const prizeOffset = Math.floor(180 / prizes.length);
const spinClass = "is-spinning";
const selectedClass = "selected";
const spinnerStyles = window.getComputedStyle(spinner);
let tickerAnim;
let rotation = 0;
let currentSlice = 0;
let prizeNodes;

const createPrizeNodes = () => {
  prizes.forEach(({ text, color, reaction }, i) => {
    const rotation = prizeSlice * i * -1 - prizeOffset;

    spinner.insertAdjacentHTML(
      "beforeend",
      `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
<span class="text">${text}</span>
</li>`
    );
  });
};

const createConicGradient = () => {
  spinner.setAttribute(
    "style",
    `background: conic-gradient(from -90deg,${prizes
      .map(
        ({ color }, i) =>
          `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}% `
      )
      .reverse()}); `
  );
};

const setupWheel = () => {
  createConicGradient();
  createPrizeNodes();
  prizeNodes = wheel.querySelectorAll(".prize");
};

const runTickerAnimation = () => {
  // https://css-tricks.com/get-value-of-css-rotation-through-javascript/
  const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];
  let rad = Math.atan2(b, a);

  if (rad < 0) rad += 2 * Math.PI;

  const angle = Math.round(rad * (180 / Math.PI));
  const slice = Math.floor(angle / prizeSlice);

  if (currentSlice !== slice) {
    ticker.style.animation = "none";
    setTimeout(() => (ticker.style.animation = null), 10);
    currentSlice = slice;
  }

  tickerAnim = requestAnimationFrame(runTickerAnimation);
};

const selectPrize = () => {
  const selected = Math.floor(rotation / prizeSlice);
  prizeNodes[selected].classList.add(selectedClass);
  // reaper.dataset.reaction = prizeNodes[selected].dataset.reaction;
};

const spinertia = () => {
  // min, max
  // min = Math.ceil(min);
  // max = Math.floor(max);
  // console.log(
  //   "🚀 ~ spinertia ~ Math.floor(Math.random() * (max - min + 1)) + min:",
  //   Math.floor(Math.random() * (max - min + 1)) + min
  // );
  // return Math.floor(Math.random() * (max - min + 1)) + min;

  const random = Math.random() + Number.EPSILON;
  let sum = 0;
  let selectedNumber;
  let selectedContent;

  for (let i = 0; i < listNumberRatio.length; i++) {
    sum += listSetUpRatio[i];

    if (random <= sum) {
      selectedNumber = listNumberRatio[i];
      selectedContent = prizes[i].text;
      break;
    }
  }

  const presentInNumber = 360 / listNumberRatio.length;
  // console.log(
  //   "Tọa độ được chọn:",
  //   presentInNumber * selectedNumber - 30 + 720
  // );
  // `vị trí được chọn là: ${heightCount}`,
  // console.log(`Giá trị là ${selectedNumber} -- ${selectedContent}`);

  // arrayCount.push(selectedContent);

  return presentInNumber * selectedNumber - 30 + 720;
};

trigger.addEventListener("click", () => {
  trigger.disabled = true;
  // rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
  rotation = Math.floor(360 * 7 + spinertia());
  // console.log("🚀 ~ trigger.addEventListener ~ rotation:", rotation);
  prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
  wheel.classList.add(spinClass);
  spinner.style.setProperty("--rotate", rotation);
  ticker.style.animation = "none";
  runTickerAnimation();
});

// function handlePlayClick() {
//   trigger.disabled = true;
//   // rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
//   rotation = 360 * 7 + spinertia();
//   console.log("🚀 ~ trigger.addEventListener ~ rotation:", rotation);
//   prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
//   wheel.classList.add(spinClass);
//   spinner.style.setProperty("--rotate", rotation);
//   ticker.style.animation = "none";
//   runTickerAnimation();
// }

spinner.addEventListener("transitionend", () => {
  cancelAnimationFrame(tickerAnim);
  trigger.disabled = false;
  trigger.focus();
  rotation %= 360;
  selectPrize();
  wheel.classList.remove(spinClass);
  spinner.style.setProperty("--rotate", rotation);
});

setupWheel();

// let count = 0;
// const myTimeout = setInterval(() => {
//   handlePlayClick();
//   count++;

//   if (count === 100) {
//     clearInterval(myTimeout);
//     console.log(arrayCount);
//     // Ví dụ sử dụng
//     var stringOccurrences = countStringOccurrences(arrayCount);

//     // In ra số lần xuất hiện của từng chuỗi
//     for (var key in stringOccurrences) {
//       console.log(key + ": " + stringOccurrences[key]);
//     }
//     // });
//   }
// }, 1000);

// function countStringOccurrences(arr) {
//   // Tạo một đối tượng để lưu trữ và đếm
//   var count = {};

//   // Lặp qua mảng và đếm số lần xuất hiện của từng chuỗi
//   for (var i = 0; i < arr.length; i++) {
//     var element = arr[i];

//     // Nếu phần tử là chuỗi
//     if (typeof element === "string") {
//       // Kiểm tra nếu chuỗi đã tồn tại trong đối tượng count
//       if (count[element]) {
//         count[element]++; // Tăng số lần xuất hiện lên 1
//       } else {
//         count[element] = 1; // Thêm chuỗi vào đối tượng count với số lần xuất hiện là 1
//       }
//     }
//   }

//   return count;
// }
