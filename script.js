// 顯示今天日期
const today = document.getElementById("today");

const now = new Date();
today.textContent = now.toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
});

// 手機版選單
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

// 點擊導覽連結後關閉手機選單
document.querySelectorAll("#mainNav a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
    });
});

// 圖表展示資料
// 未來可將這裡替換成 fetch("/api/data")，
// 由後端 API 取得 MySQL 資料。
const chartData = {
    labels: ["週一", "週二", "週三", "週四", "週五", "週六", "週日"],
    values: [42, 58, 51, 73, 66, 81, 69]
};

const ctx = document.getElementById("dataChart");

new Chart(ctx, {
    type: "line",
    data: {
        labels: chartData.labels,
        datasets: [{
            label: "資料筆數",
            data: chartData.values,
            borderWidth: 3,
            tension: 0.35,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
