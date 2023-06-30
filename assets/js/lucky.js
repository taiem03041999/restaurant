const ARRAY_LIST = [
  {
    numberRatio: 1,
    item: "Giảm 10K",
    ratio: 0.01,
  },
  {
    numberRatio: 2,
    item: "Giảm 11K",
    ratio: 0.3,
  },
  {
    numberRatio: 3,
    item: "Giảm 12K",
    ratio: 0.01,
  },
  {
    numberRatio: 4,
    item: "Giảm 13K",
    ratio: 0.01,
  },
  {
    numberRatio: 5,
    item: "Giảm 14K",
    ratio: 0.01,
  },
  {
    numberRatio: 6,
    item: "Giảm 15K",
    ratio: 0.6,
  },
  {
    numberRatio: 7,
    item: "Giảm 16K",
    ratio: 0.01,
  },
  {
    numberRatio: 8,
    item: "Giảm 17K",
    ratio: 0.01,
  },
  {
    numberRatio: 9,
    item: "Giảm 18K",
    ratio: 0.01,
  },
  {
    numberRatio: 10,
    item: "Giảm 19K",
    ratio: 0.01,
  },
  {
    numberRatio: 11,
    item: "Giảm 20K",
    ratio: 0.01,
  },
  {
    numberRatio: 12,
    item: "Giảm 21K",
    ratio: 0.01,
  },
];

// const totalPsent = ARRAY_LIST.reduce((current, next) => {
//   console.log("🚀 ~ totalPersent ~ next.ratio:", next.ratio);
//   return current + next.ratio;
// }, 0);
// console.log("🚀 ~ totalPsent ~ totalPsent:", totalPsent);

const listNumberRatio = ARRAY_LIST.map((arrayItem) => arrayItem.numberRatio);
console.log("🚀 ~ listNumberRatio:", listNumberRatio);
const listSetUpRatio = ARRAY_LIST.map((arrayItem) => arrayItem.ratio);
console.log("🚀 ~ listSetUpRatio:", listSetUpRatio);

// ============================= LuckyWheel animation   =============================

// $(document).ready(function () {
//  Setup variables
var wheel = $(".wheel"),
  active = $(".lucky-win"),
  lastRotation = -90,
  currentRotation = 0,
  tolerance,
  deg;
$btnPlay = $("#btnPlay");
//  Creating the Timeline
var indicator = new TimelineMax();
var spinWheel = new TimelineMax();

function luckyWheelAnimation() {
  //  Random degree
  function getRandomInt() {
    const random = Math.random();
    let sum = 0;
    let selectedNumber;
    let selectedContent;

    for (let i = 0; i < listNumberRatio.length; i++) {
      sum += listSetUpRatio[i];

      if (random <= sum) {
        selectedNumber = listNumberRatio[i];
        selectedContent = ARRAY_LIST[i].item;
        break;
      }
    }

    const presentInNumber = 360 / listNumberRatio.length;

    // console.log(
    //   "Tọa độ được chọn:",
    //   presentInNumber * selectedNumber - 30 + 720
    // );
    console.log(
      "vị trí được chọn là:",
      selectedNumber + " - " + selectedContent
    );

    return presentInNumber * selectedNumber - 30 + 720;
  }

  var deg = getRandomInt();
  console.log("🚀 ~ luckyWheelAnimation ~ deg:", deg);

  indicator
    .to(active, 0.13, {
      rotation: 10,
      transformOrigin: "65% 36%",
      ease: Power1.easeOut,
    })
    .to(active, 0.13, {
      rotation: -3,
      ease: Power4.easeOut,
    })
    .add("end");

  //  Luckywheel animation
  spinWheel.to(wheel, 5, {
    rotation: deg,
    transformOrigin: "50% 50%",
    ease: Power4.easeOut,
    onUpdate: function () {
      currentRotation = Math.round(this.target[0]._gsTransform.rotation);
      //_gsTransform: current position of the wheel
      tolerance = currentRotation + lastRotation;

      if (Math.round(currentRotation) % (360 / 12) <= tolerance) {
        if (indicator.progress() > 0.2 || indicator.progress() === 0) {
          indicator.play(0);
        }
      }
      lastRotation = currentRotation;
    },
    onComplete: function () {
      TweenMax.to(wheel, 1, {
        rotation: 0, // Đưa về vị trí gốc (12 giờ)
        transformOrigin: "50% 50%",
        ease: Power4.easeOut,
        onComplete: function () {
          currentRotation = 0;
          lastRotation = 0;
        },
      });
      //   .delay(5)
    },
  });
  spinWheel.add("end");
}

// Hàm để bắt sự kiện nhấp vào nút Play
function handlePlayClick() {
  luckyWheelAnimation();
  currentRotation = 0;
  lastRotation = 0;
  //   indicator.timeScale(1).seek(0);
  //   spinWheel.timeScale(1).seek(0);
}

$btnPlay.click(handlePlayClick);
// });

// function randomNumber() {
//   const numbers = [1, 2, 3, 4, 5];
//   const ratios = [0.05, 0.8, 0.05, 0.05, 0.05];

//   // Tính tổng tỉ lệ phần trăm
//   const totalRatio = Math.round(
//     ratios.reduce((total, ratio) => total + ratio, 0)
//   );

//   // Kiểm tra tổng tỉ lệ phần trăm
//   if (totalRatio !== 1) {
//     // Tổng tỉ lệ phần trăm không chính xác, cần điều chỉnh
//     console.log("Tổng tỉ lệ phần trăm không chính xác");
//     return;
//   }

//   // Xác định số ngẫu nhiên dựa trên tỉ lệ phần trăm
//   const random = Math.random();
//   let sum = 0;
//   let selectedNumber;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += ratios[i];

//     if (random <= sum) {
//       selectedNumber = numbers[i];
//       break;
//     }
//   }

//   const persentInNumber = 360 / parseInt(numbers.length);
//   console.log("🚀 ~ randomNumber ~ persentInNumber:", persentInNumber);

//   console.log("Tọa độ được chọn:", persentInNumber * selectedNumber);
//   console.log("Số ngẫu nhiên được chọn:", selectedNumber);
// }

// let count = 0;

// const myTimeout = setInterval(() => {
//   randomNumber();
//   count++;

//   if (count === 10) {
//     clearInterval(myTimeout);
//   }
// }, 1000);
