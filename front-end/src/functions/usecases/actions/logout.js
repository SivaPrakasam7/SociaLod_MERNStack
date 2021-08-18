export default function Logout() {
    document.cookie = "CID=; path=/";
    window.location = "/";
}