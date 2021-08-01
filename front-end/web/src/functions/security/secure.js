export default function Secure(e) {
    if (/[<>:;/]/g.test(e.nativeEvent.key)) {
        e.preventDefault();
    }
}