// Mengambil daftar ninja dari database
const ninjaList = [
    {
        name: "Naruto Uzumaki",
        village: "Konoha",
        ultimateJutsu: "Rasengan",
        image: "naruto.jpg",
        price: "12000"
    },
    {
        name: "Sasuke Uchiha",
        village: "Konoha",
        ultimateJutsu: "Chidori",
        image: "sasuke.jpg",
        price: "10000"
    },
    {   name: "Sakura",
        village: "Konoha",
        ultimateJutsu: "Shannaro",
        image: "sakura.jpg",
        price: "7000"
    },
    {   name: "Hinata",
        village: "Konoha",
        ultimateJutsu: "Jyuuken",
        image: "hinata.jpg",
        price: "8000"
    },
    {   name: "Kakashi",
        village: "Konoha",
        ultimateJutsu: "Raikiri",
        image: "kakashi.jpg",
        price: "11000"
    },

    // Daftar ninja lainnya
];

// Mengisi daftar ninja ke dalam HTML
const ninjaListHTML = ninjaList.map((ninja) => {
    return `<li>
                <img src="${ninja.image}" alt="${ninja.name}">
                <h2>${ninja.name}</h2>
                <p>Village: ${ninja.village}</p>
                <p>Ultimate Jutsu: ${ninja.ultimateJutsu}</p>
                <p>Price: ${ninja.price}</p>
                <button class="buy-btn">Beli</button>
            </li>`;
}).join("");

document.getElementById("ninja-list").innerHTML = ninjaListHTML;

// Menghandle tombol "Beli" untuk membeli ninja
document.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const ninjaName = e.target.parentNode.querySelector("h2").textContent;
        const ninjaPrice = prompt("Masukkan jumlah pembelian untuk " + ninjaName + ":");
        if (ninjaPrice) {
            // Proses pembelian ninja
            // Simpan data pembelian ke dalam database
        }
    });
});

// Menghandle tombol "Simpan" untuk menyimpan ninja ke dalam file TXT
document.getElementById("save-btn").addEventListener("click", (e) => {
    const ninjaName = e.target.parentNode.querySelector("h2").textContent;
    const ninjaData = {
        name: ninjaName,
        village: ninjaList.find((ninja) => ninja.name === ninjaName).village,
        ultimateJutsu: ninjaList.find((ninja) => ninja.name === ninjaName).ultimateJutsu
    };
    // Simpan data ninja ke dalam file TXT
    // Menggunakan fungsi PHP untuk menulis ke file TXT
});

// Menghandle tombol "Unduh" untuk mengunduh file TXT
document.getElementById("download-btn").addEventListener("click", () => {
    // Menggunakan fungsi PHP untuk mengunduh file TXT
});