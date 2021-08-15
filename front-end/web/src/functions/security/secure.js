export default function Secure(e) {
    if (/[<>;"'&]/g.test(e.nativeEvent.key || (e.clipboardData && e.clipboardData.getData("Text")))) {
        e.stopPropagation();
        e.preventDefault();
    }
}