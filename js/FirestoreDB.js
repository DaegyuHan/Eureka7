import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ8Md6-Og_p8aSUX7rILikn9_5O6ljHYc",
    authDomain: "test-22f51.firebaseapp.com",
    projectId: "test-22f51",
    storageBucket: "test-22f51.appspot.com",
    messagingSenderId: "389812878486",
    appId: "1:389812878486:web:8eec260eb61462d81656b7",
    measurementId: "G-BLJ3M68GJM"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


$("#test").click(async function () {
    alert('확인');
    // let test = $('#test_input').val();

    // let doc = {
    //     'test': test
    // };
    // await addDoc(collection(db, "test"), doc);
    // alert('저장완료!');
    // window.location.reload();
})


// let docs = await getDocs(collection(db, "test"));
// docs.forEach((doc) => {
//     let row = doc.data();

//     let test = row['test'];

//     let temp_html = `
//     ${test}`;
//     $('#test_area').append(temp_html);
// });