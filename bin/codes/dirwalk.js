const path = require('path'),
    fs = require('fs');

Walker = (dir, ext) => {
    const replacedir = path.join(__dirname, dir);
    const wlak = (dir) => {
        var results = [];
        fs.readdirSync(dir).forEach((file) => {
            file = `${dir}/${file}`;
            var stat = fs.statSync(file);
            if (stat && stat.isDirectory()) results = results.concat(wlak(file));
            else {
                fext = file.split('.').slice(-1);
                res = file.replace(`${replacedir}/`, '').replace(`.${fext}`, '');
                if (fext == ext) results.push({ path: file, categeory: res.split('/')[0] });
            }
        });
        return results;
    }
    return wlak(replacedir);
};

console.log(Walker('../../back-end/src/entities', 'js'));