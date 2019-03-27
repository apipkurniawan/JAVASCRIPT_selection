// DOM selection

// document.getElementById() -> element
	// const judul = document.getElementById('judul');
	// judul.style.color = 'red';
	// judul.style.backgroundColor = '#ccc';
	// judul.innerHTML = 'Apip Kurniawan';


// document.getElementsByTagName() -> HTML Collection
	// const p = document.getElementsByTagName('p');
	// p[2].style.backgroundColor = 'lightblue';
	// mewarnai dengan looping
	// for (let i = 0; i < p.length; i++) {
		// p[i].style.backgroundColor = 'lightblue';
	// }
	// mengubah hasil dari HTML Collection menjadi element
	// const h1 = document.getElementsByTagName('h1')[0];
	// h1.style.fontSize = '50px';


// document.getElementsByClassName() -> HTML Collection
	// const p1 = document.getElementsByClassName('p1')[0];
	// p1.innerHTML = 'ini di ubah dari javascript';


// document.querySelector() -> element
	// const p4 = document.querySelector('#b p');
	// p4.style.color = 'green';
	// p4.style.fontSize = '30px';

	// const li2 = document.querySelector('section#b ul li:nth-child(2)');
	// li2.style.backgroundColor = 'orange';

	// const p = document.querySelector('p');
	// p.innerHTML = 'ini di ubah melalui javascript';


// document.querySelectorAll() -> NodeList
	// const p = document.querySelectorAll('p');
	// p[2].style.backgroundColor = 'lightblue';
	// mewarnai dengan looping
	// for (let i = 0; i < p.length; i++) {
		// p[i].style.backgroundColor = 'lightblue';
	// }


// mengubah node root
	// cara 1
	// const sectionB = document.querySelector('section#b');
	// const p4 = sectionB.getElementsByTagName('p')[0];
	// p4.style.backgroundColor = 'orange';

	// cara 2
	// const sectionB = document.getElementById('b');
	// const p4 = sectionB.querySelector('p');
	// p4.style.backgroundColor = 'orange';



// DOM Manipulation

// element.innerHTML untuk mengganti value
	// const judul = document.getElementById('judul');
	// judul.innerHTML = '<em>Apip Kurniawan</em>';

	// const sectionA = document.querySelector('section#a');
	// sectionA.innerHTML = 'Hello world!!';

// element.style untuk memberikan style
	// const judul = document.querySelector('#judul');
	// judul.style.color = 'lightblue';
	// judul.style.backgroundColor = 'salmon';

// element.setAttribute() untuk membuat attribute
	// const judul = document.getElementsByTagName('h1')[0];
	// judul.setAttribute('name', 'apip');

	// const a = document.querySelector('section#a a');
	// a.setAttribute('id', 'link');
// element.getAttribute() untuk melihat attribute
	// a.getAttribute('href');
	// judul.getAttribute('id');	
// element.removeAttribute() untuk menghapus attribute
	// a.removeAttribute('href');

// element.classList() untuk mengelola class
	// const p2 = document.querySelector('.p2');

	// p2.classList.add('label'); // menambah class
	// p2.classList.remove('label'); // menghapus class
	
	// p2.classList.toggle('label'); // menambah class jika tidak ada class yang di maksud
	// p2.classList.toggle('label'); // menghapus class jika ada class yang di maksud

	// document.body.style.backgroundColor = 'lightblue' // memberi warna background pada body cara 1
	// document.body.classList.toggle('biru-muda') // memberi warna background pada body cara 2
	// document.body.classList.toggle('biru-muda') // menghapus warna background pada body jika sebelumnya memiliki warna tersebut
	
	// p2.classList.item(1); // menampilkan class berdasarkan urutan yang diinginkan
	// p2.classList.contains('label'); // menanyakan apakah class tersebut ada, jika ada bernilai true jika sebaliknya false
	
	// p2.classList.replace('label', 'labelBaru'); // mengganti nama class


// DOM Manipulation Method
	// Manipulasi Node
	// menambah paragraph baru
	// const pBaru = document.createElement('p'); // membuat element baru
	// const teksPBaru = document.createTextNode('paragraph baru'); // membuat value/text baru
	// pBaru.appendChild(teksPBaru); // menyimpan value/teks ke dalam paragraph(p)
	// const sectionA = document.getElementById('a'); // menyimpan pBaru di akhir section A
	// sectionA.appendChild(pBaru); // menyimpan pBaru di akhir section A dan menampilkan element baru yang sudah dibuat tadi

	// menambah list/item baru
	// const liBaru = document.createElement('li');
	// const teksLiBaru = document.createTextNode('item baru');
	// liBaru.appendChild(teksLiBaru);
	// const ul = document.querySelector('section#b ul');
	// const li2 = ul.querySelector('li:nth-child(2)');
	// ul.insertBefore(liBaru, li2);

	// menghapus element
	// const link = document.getElementsByTagName('a')[0];
	// sectionA.removeChild(link);

	// mengganti element
	// const sectionB = document.getElementById('b');
	// const p4 = sectionB.querySelector('p');
	// const h2Baru = document.createElement('h2');
	// const teksH2Baru = document.createTextNode('judul baru!');
	// h2Baru.appendChild(teksH2Baru); // memasukan judul ke h2
	// sectionB.replaceChild(h2Baru, p4); // mengganti nya

	// pBaru.style.backgroundColor = 'lightblue';
	// liBaru.style.backgroundColor = 'lightblue';
	// h2Baru.style.backgroundColor = 'lightblue';



// belajar eventHandler (cara lama dan tidak bisa membuat dua perintah sekaligus)
// cara 1
	// const p3 = document.querySelector('.p3');
	// function ubahWarna() {
	// 	p3.style.backgroundColor = 'lightblue';
	// }
// cara 2
	// function ubahWarna2() {
	// 	p2.style.backgroundColor = 'lightgreen';
	// }
	// const p2 = document.querySelector('.p2');
	// p2.onclick = ubahWarna2;

// belajar addEventListener (cara baru / sering di pakai dan bisa membuat dua atau lebih perintah sekaligus)
	// const p4 = document.querySelector('section#b p');
	// p4.addEventListener('click', function(){
	// 	const ul = document.querySelector('section#b ul'); // ambil parent
	// 	const liBaru = document.createElement('li'); // bikin element baru
	// 	const teksLiBaru = document.createTextNode('item baru'); // bikin value nya
	// 	liBaru.appendChild(teksLiBaru); // kita rangkai
	// 	ul.appendChild(liBaru); // simpan di dalam ul
	// }); 
	
// contoh melakukan dua perintah
	const p3 = document.querySelector('.p3');
	p3.addEventListener('mouseenter', function(){
		p3.style.backgroundColor = 'lightblue';
	});
	p3.addEventListener('mouseleave', function(){
		p3.style.backgroundColor = 'white';
	});
	