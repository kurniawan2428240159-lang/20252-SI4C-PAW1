//alert("BElajar JAva Scrip")
//Ambil Value Nama
function kirim() {
  //ambil value nama
  let nama = document.getElementById("nama").value;
  console.log("Nama: " + nama);
  //Tampilkan Nama  ke ul id-list pesan
  // document.getElementById("list-pesan").innerHTML = nama;

//   document.getElementById("list-pesan").innerHTML += `<li>${nama}</li>`;
    document.getElementById("list-pesan").innerHTML += '<tr><td>${nama}</td><td>${saran}</td></tr>';
}
