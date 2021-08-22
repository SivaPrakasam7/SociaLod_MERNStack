export default async function BrowseProfile() {
    var reader = new FileReader();
    const browse = document.getElementById('browse');
    reader.onload = (e) => {
        document.getElementById('profile').getElementsByTagName('img')[0].src = e.target.result;
    };
    reader.readAsDataURL(browse.files[0]);
}