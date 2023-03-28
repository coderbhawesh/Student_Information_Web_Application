// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkD7TYWE1ukY_frL1OyfBC5WScvfyj9UY",
  authDomain: "studentinfo-5ba0f.firebaseapp.com",
  projectId: "studentinfo-5ba0f",
  storageBucket: "studentinfo-5ba0f.appspot.com",
  messagingSenderId: "586947231797",
  appId: "1:586947231797:web:83181fc839b0600769f17c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase, ref, set, push, get, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();

var namebox = document.querySelector("#Namebox");
var rollbox = document.querySelector("#Rollbox");
var fatherbox = document.querySelector("#FatherBox");
var motherbox = document.querySelector("#Motherbox");
var datebox = document.querySelector("#Datebox");
var programmebox = document.querySelector("#Programmebox");
var branchbox = document.querySelector("#Branchbox");
var batchbox = document.querySelector("#Batchbox");
var presentbox = document.querySelector("#Presentbox");
var homebox = document.querySelector("#Homebox");
var mobilebox = document.querySelector("#Mobilebox");
var parentsbox = document.querySelector("#Parentsbox");
var bloodbox = document.querySelector("#Bloodbox");
var allergiesbox = document.querySelector("#Allergiesbox");

var findname = document.querySelector("#findName");
var findfather = document.querySelector("#findFather");
var findmother = document.querySelector("#findMother");
var finddob = document.querySelector("#findDob");
var findroll = document.querySelector("#findRoll");
var findprogramme = document.querySelector("#findProgramme");
var findbranch = document.querySelector("#findBranch");
var findbatch = document.querySelector("#findBatch");
var findpresent = document.querySelector("#findPresent");
var findhome = document.querySelector("#findHome");
var findmobile = document.querySelector("#findMobile");
var findparents = document.querySelector("#findParents");
var findblood = document.querySelector("#findBlood");
var findallergies = document.querySelector("#findAllergies");

var insBtn = document.querySelector("#Insbtn");
var updBtn = document.querySelector("#Updbtn");
var delBtn = document.querySelector("#Delbtn");
var finBtn = document.querySelector("#Finbtn");

function InsertData(){
    set(ref(db, "TheStudents/"+ rollbox.value),{
        Nameofstd: namebox.value,
        Rollno: rollbox.value,
        Father: fatherbox.value,
        Mother: motherbox.value,
        DOB: datebox.value,
        Programme: programmebox.value,
        Branch: branchbox.value,
        Batch: batchbox.value,
        PresentAddress: presentbox.value,
        HomeAddress: homebox.value,
        Mobile: mobilebox.value,
        ParentsMobile: parentsbox.value,
        BloodGrp: bloodbox.value,
        Allegies: allergiesbox.value,
    })
    .then(()=>{
        alert("Data Stored Successfully");
    })
    .catch((error)=>{
        alert("unsuccessful, error"+error);
    });
}


function FindData(){
    const dbref = ref(db);
    get(child(dbref, "TheStudents/" + findroll.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            findname.innerHTML = snapshot.val().Nameofstd;
            findfather.innerHTML = snapshot.val().Father;
            findmother.innerHTML = snapshot.val().Mother;
            finddob.innerHTML = snapshot.val().DOB;
            findroll.innerHTML = snapshot.val().Rollno;
            findprogramme.innerHTML = snapshot.val().Programme;
            findbranch.innerHTML =  snapshot.val().Branch;
            findbatch.innerHTML = snapshot.val().Batch;
            findpresent.innerHTML =  snapshot.val().PresentAddress;
            findhome.innerHTML =  snapshot.val().HomeAddress;
            findmobile.innerHTML =  snapshot.val().Mobile;
            findparents.innerHTML =  snapshot.val().ParentsMobile;
            findblood.innerHTML =  snapshot.val().BloodGrp;
            findallergies.innerHTML =  snapshot.val().Allegies;
        }
        else{
            alert("No data found");
        }
    })
    .catch((error)=>{
        alert(error)
    })
}

function UpdateData(){
    update(ref(db, "TheStudents/" + rollbox.value), {
        Nameofstd: namebox.value,
        Rollno: rollbox.value,
        Father: fatherbox.value,
        Mother: motherbox.value,
        DOB: datebox.value,
        Programme: programmebox.value,
        Branch: branchbox.value,
        Batch: batchbox.value,
        PresentAddress: presentbox.value,
        HomeAddress: homebox.value,
        Mobile: mobilebox.value,
        ParentsMobile: parentsbox.value,
        BloodGrp: bloodbox.value,
        Allegies: allergiesbox.value,
    })
    .then(()=>{
        alert("Data Updated Successfully!");
    })
    .catch((error)=>{
        alert(error);
    })
}

function RemoveData(){
    remove(ref(db, "TheStudents/" + rollbox.value))
    .then(()=>{
        alert("Data removed successfully");
    })
    .catch((error)=>{
        alert(error);
    })
}

// Assigning Events to Buttons //
insBtn.addEventListener('click', InsertData);
delBtn.addEventListener('click', RemoveData);
updBtn.addEventListener('click', UpdateData);
finBtn.addEventListener('click', FindData);