<?php
// Fungsi untuk menulis ke file TXT
function writeToFile($data) {
    $file = fopen("file.txt", "a");
    foreach ($data as $ninja) {
        fwrite($file, implode("\n", $ninja) . "\n\n");
    }
    fclose($file);
}

// Fungsi untuk mengunduh file TXT
function downloadFile() {
    header("Content-Disposition: attachment; filename=file.txt");
    header("Content-Type: text/plain");
    readfile("file.txt");
    exit;
}

// Proses pembelian ninja
if (isset($_POST["buy"])) {
    $ninjaName = $_POST["ninja-name"];
    $ninjaPrice = $_POST["ninja-price"];
    // Proses pembelian ninja
    // Simpan data pembelian ke dalam database
    $ninjaData = [
        "name" => $ninjaName,
        "village" => "Konoha",
        "ultimateJutsu" => "Rasengan"
    ];
    writeToFile([$ninjaData]);
}

// Proses simpan ninja ke dalam file TXT
if (isset($_POST["save"])) {
    $ninjaName = $_POST["ninja-name"];
    $ninjaData = [
        "name" => $ninjaName,
        "village" => "Konoha",
        "ultimateJutsu" => "Rasengan"
    ];
    writeToFile([$ninjaData]);
}

// Proses mengunduh file TXT
if (isset($_GET["download"])) {
    downloadFile();
}
?>