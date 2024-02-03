const timeframe = document.querySelectorAll(".dashboard__timeframe");
let hours = document.querySelectorAll(".dynamic-hours");
let previous = document.querySelectorAll(".dynamic-previous");

timeframe[1].classList.add("active");
getData("weekly");

function handleClick(index, period) {
    timeframe.forEach((e) => e.classList.remove("active"));
    timeframe[index].classList.add("active");
    getData(period);
}

timeframe[0].addEventListener("click", () => handleClick(0, "daily"));
timeframe[1].addEventListener("click", () => handleClick(1, "weekly"));
timeframe[2].addEventListener("click", () => handleClick(2, "monthly"));

function getData(timeframe) {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                let outHours = data[i].timeframes[timeframe].current;
                let outPrevious = data[i].timeframes[timeframe].previous;
                hours[i].innerHTML = outHours;
                previous[i].innerHTML = outPrevious;
            }
        });
}
