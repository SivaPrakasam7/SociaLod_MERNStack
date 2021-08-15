export default function Validate(form) {
    const validate = {
        profile: /data:image\/[a-zA-Z]*;base64,[^"]*/g,
        name: /[a-zA-Z0-9-_]+/g,
        email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/g,
        password: /[a-zA-Z0-9~`!@#$%^&*()_+-={}|[\]\\:";'<>?,./]{8,}/g,
        cpassword: /[a-zA-Z0-9~`!@#$%^&*()_+-={}|[\]\\:";'<>?,./]{8,}/g,
        mobile: /([+]\d{2}( |)|)\d{10}/g
    };
    for (var i of form) {
        if (validate[i.name] && !validate[i.name].test(i.value)) {
            i.focus();
            return false;
        }
    }
    return true;
}