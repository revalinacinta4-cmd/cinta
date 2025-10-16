//1. pilih tombol berdasarkan ID-nya
const tombolSapa = document .getElementById('sapaButton');
//2. Tambahkan 'event listrner' untuk aksi 'click'
tombolSapa.addEventListener('click', function() {
  //3. jalankan kode ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!');
});
