const express = require('express');
const app = express();
const port = 5500


app.get('/', (req,res) =>{
    res.send('Hello')
})

app.get('/mahasiswa', (req,res) =>{
    res.send('Hello word')
})

app.get('/mahasiswa/:nim', (req,res) =>{
    const nim = req.params.nim

    res.send(`Mahasiswa dengan nim ${nim} ditemukan`)
});

app.get('/mahasiswa/:nim/:semester', (req,res) =>{
    const nim = req.params.nim
    const semester = req.params.semester

    res.send(`Mahasiswa dengan nim ${nim} semester ${semester} ditemukan`)
});

app.get('/get-mahasiswa-by-nim', (req,res) => {
    const nim = req.query.nim

    res.send(`Mahasiswa dengan nim ${nim} di temukan`)
});

app.get('/nilai-persemester', (req,res) =>{
    const nim = req.query.nim
    const semester =req.query.semester

    res.send(`Mahasiswa dengan nim ${nim} semester ${semester} ditemukan`)
});

app.use(express.json()),

app.post('/mahasiswa', (req,res) => {
    const nim = req.body.nim;
    const nama = req.body.nama;
    const angkatan = req.body.angkatan;
    const prodi = req.body.prodi;

    const msg ={status:"sukses",
                    data:{"nim":nim, "nama":nama, "angkatan":angkatan, "prodi":prodi}};
    res.send(msg);                
})
app.put('/', (req,res) =>{
    res.send('Put express js')
})

app.post('/', (req,res) =>{
   res.send('Post express js')
})

app.delete('/', (req,res) =>{
    res.send('Delet express js')
})

app.listen(port,() => {
    console.log(`Server berjalan pada localhost:${port}`);
    
})