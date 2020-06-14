const ctx4 = document.querySelector("#canvas4").getContext('2d');

function countDown() {
  const add0 = data => String(data).length === 1 ? "0"+data : String(data);
  const time = new Date();
  const showHour = time.getHours(), showMin =time.getMinutes(), showSec = time.getSeconds();
  const showList = [showHour, showMin, showSec];

  showList.forEach((item, index)=>{
    const showItem = add0(item).split("");
    showItem.forEach((res, id) =>{
      drawCountDown(res, defaultPosition(index * 2 + id, "num"))
    });
    if(index !== showList.length -1) {
      drawCountDown(digit.length-1, defaultPosition(index, "point"))
    }
  });
};

const drawCountDown = (count, beginPosition) =>{
  const drawItem = digit[count];
  drawItem.forEach((line, index)=>{
    line.forEach((item, id)=>{
      ctx4.beginPath();
      ctx4.arc(beginPosition + id * 20 + 10, index * 20 + 10, 10, 0, 2 * Math.PI);
      ctx4.fillStyle = item === 1 ? "rgba(0, 102, 153, 1)" : "#ffffff";
      ctx4.strokeStyle = "#ffffff"
      ctx4.stroke();
      ctx4.fill();
    });
  });
};


const defaultPosition = (num, type) => {
  if(type === "num") {
    return num * 160 + Math.floor(num / 2) * 60;
  }else {
    return num * 380 + 300
  }
}

setInterval(countDown, 1000)
