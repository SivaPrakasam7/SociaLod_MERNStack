export default function CKIE() {
    if (document.cookie.replace("CID=", "") === "") {
        return false;
    } else {
        return true;
    }
}