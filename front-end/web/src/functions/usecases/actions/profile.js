export default async function Selectprofile() {
    var reader = new FileReader();
    const browse = document.getElementById("browse");
    reader.onload = function (e) {
        document.getElementById('profile').src = e.target.result;
    }
    reader.readAsDataURL(browse.files[0]);
}