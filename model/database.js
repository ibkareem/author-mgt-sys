const { read } = require('fs');
const fs = require('fs/promises');
const path = require('path');


const DB = {
    location : path.join(__dirname, '../files/database.json'),
    read(){
         return fs.readFile(this.location)
    },
    async write(data){
        try {
            var buffer = JSON.parse(await this.read());
            data[0].id = buffer[0].id + 1;
            data[0].dateRegistered = new Date().getTime();
            buffer.push(data[0]);
            fs.writeFile(this.location, JSON.stringify(buffer, null, 3));
            return buffer;
        } catch (error) {
            fs.writeFile(this.location, JSON.stringify(data, null, 3));
            return data;
        }
    },
    async update(id, data){
        var buffer = JSON.parse(await this.read());
        console.log(buffer)
    }
}

module.exports = DB