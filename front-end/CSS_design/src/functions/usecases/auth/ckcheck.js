export default function CKIE() {
    if (document.cookie.replace("CID=", "") === "") {
        return true;
    } else {
        return false;
    }
}