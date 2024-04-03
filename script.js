
index.html
function Login(){
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    if (email == "michaelwibo@gmail.com" && password == "admin"){
        window.alert("login Berhasil");
        window.location=("CV.html");
    }
    if (email == "" && password == ""){
        window.alert("Pastikan Email sudah terisi")
        
    }
    

}