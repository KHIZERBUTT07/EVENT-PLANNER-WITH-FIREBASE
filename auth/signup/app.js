import{
    auth ,
    onAuthStateChanged ,
    createUserWithEmailAndPassword ,
    doc ,
    db ,
    setDoc ,
    storage ,
    ref ,
    uploadBytes ,
    getDownloadURL, 
    
} from "../utils/utils.js";


// Create Account  =>  createUserWithEmailAndPassword 
// Upload Image    =>  ref , uploadBytes ,getDownloadurl  
// Set Complete Data Into Firestore => doc ,setDoc


const signup_btn = document.getElementById("signup_form");
const submit_btn = document.getElementById("submit_btn");


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

    // create account

    submit_btn.disabled = true;
    submit_btn.innerText = 'Loading...';
    createUserWithEmailAndPassword(auth,email,password)
    .then((user) => {
        console.log("user=>", user.user.uid)
        // upload user Img
        const userRef = ref(storage , `user/${user.user.uid}`);
        uploadBytes(userRef ,img)
        .then(() =>{
            console.log("User Image Uploaded")  ;
            // getting url of the image we just uploaded.
            getDownloadURL(userRef)
            .then((url) =>{  
                console.log("url agya hai=>", url);

                // update user info object

                userInfo.img = url
                // created user document reference

                var userDbref = doc(db , 'users' , user.user.uid);

                // set this document to db
                setDoc(userRef , userInfo).then(() => {
                    console.log("User object updated into db")
                    window,location.href = "/";
                    submit_btn.disabled = false;
                    submit_btn.innerText = 'Submit';
                });
            })
            .catch((err) => console.log("url firbase ni derha"));
            submit_btn.disabled = false;
            submit_btn.innerText = 'Submit';
            

            
        }).catch(() => {
            console.log("error in uploading user image");
            submit_btn.disabled = false;
            submit_btn.innerText = 'Submit';
        });
    }) 
    .catch((err) => {
        alert(err),(  submit_btn.disabled = false);
            submit_btn.innerText = 'Submit';
            });
    
    console.log(userInfo)
});