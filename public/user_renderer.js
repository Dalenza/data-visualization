const name = sessionStorage.getItem('name').toUpperCase();
const group = sessionStorage.getItem('group').toUpperCase();

async function renderRankClass(url) {
    let data = await get_data(url);
    document.getElementById("Rank_C").innerText = data.rank;
}
async function renderRankSection(url) {
    let data = await get_data(url);
    document.getElementById("Rank_S").innerText = data.rank;
}
async function renderScore(url) {
    let data = await get_data(url);
    document.getElementById("G_score").innerText = data['moy generale'];
    document.getElementById("S1_score").innerText = data['moy sem1'];
    document.getElementById("S2_score").innerText = data['moy sem2'];
}
async function Radar_chart(url) {
    let grades = await get_data(url);
    const labels = Object.keys(grades);
    const values = Object.values(grades);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Grades",
                backgroundColor: "rgba(185, 49, 97, 0.5)",
                // borderColor: "transparent",
                borderColor: "rgba(255,20,147,0.3)",
                borderWidth: 2,
                data: values
            },
        ],
    };

    const config = {
        type: "radar",
        data: data,
        options: {
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: ["Grades distribution"],
                    fontFamily: "sans-serif",
                    fontSize: 24,
                    fontColor: "rgb(0,120,0)",
                },
            },
            scales: {
                r: {
                    pointLabels: {
                        color: 'red',
                        font: '50px'
                    }
                }
            }
        },
    };
    const myChart = new Chart("radar-chart__canvas", config);

}
async function get_data(url) {
    let res = await fetch(url);
    let data = await res.json();
    return data;
}
renderRankClass(`user/StudentRankClass/${name}/${group}`);
renderRankSection(`user/StudentRankSection/${name}`);
renderScore(`user/StudentScore/${name}`);
Radar_chart(`user/StudentGrade/${name}`);