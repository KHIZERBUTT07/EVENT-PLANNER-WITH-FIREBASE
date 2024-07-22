import{
    auth ,
    createUserWithEmailAndPassword ,
    doc ,
    setDoc ,
    ref ,
    uploadBytes ,
    getDownloadURL ,
} from "../utils/utils.js";


// Create Account  =>  createUserWithEmailAndPassword 
// Upload Image    =>  ref , uploadBytes ,getDownloadurl  
// Set Complete Data Into Firestore => doc ,setDoc


const signup_btn = document.getElementById("signup_form");
signup_btn.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e)
    console.log("form=>",e.target)

    const  img = e.target[0].files[0]; 
    const  email = e.target[1].value; 
    const  password = e.target[2].value; 
    const  firstName = e.target[4].value; 
    const  LastName = e.target[5].value; 
    const  phone = e.target[6].value; 
    const  company = e.target[7].value; 

    // console.log("img=>" , img)

    const userInfo = {
        img,
        email,
        password,
        firstName,
        LastName,
        phone,
        company,

    };

    createUserWithEmailAndPassword(auth,email,password)
    .then((user) => {
        console.log("user=>", user.user.uid)
    })
    .catch((err) => alert(err))
    console.log(userInfo)
})