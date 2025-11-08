const fs=require('fs');

// Asynchrounous Read
fs.readFile('sample.txt', "utf-8",(err, data)=>{
    if(err){
        console.error('Error reading file:', err);
        return;
    }

    console.log('File content: ',data);
});

// Sychrounus Read
fs.readFileSync('sample.txt', "utf-8", (err, data)=>{

    if(err){
        console.error('Error reading file:', err);
        
    }

    console.log('File content:', data);
});

// 1.write file

// 1. Asynchrounus Write
fs.writeFile('exsample.text', 'Hello.. my new file created to write', (err, data)=>{
    if(err) throw err;

    console.log('File write successfully!');

});


// 2. Append Data
fs.appendFile('sample.txt', '\nNew line added!',(err, data)=>{
    if (err) throw err;
});



// 3. synchrouns write
fs.writeFileSync('syc-file.txt','Synchrounces files write!',(err, data)=>{
    if(err) throw err;    
});
console.log('Synchrounces file create and write');

// check if file exsits
if(fs.existsSync('sample.txt')){
    console.log('File exsits!');
    
}else{
    console.log('File not fount');
    
}

// delete file
fs.unlink('delete.txt',(err)=>{
    if(err) console.log('File delete not working , file not avalible',err);

});

// Working with Directories

// 1. create a folder
fs.mkdir('new-folder',(err)=>{
    if (err) console.log('Alrady this Folder name avalbile!', err);
    
});

// To create nested folders:
fs.mkdir('parent/child',{recursive: true},(err)=>{
    if (err) console.log(err);
    console.log('Nexted folder created!');
    
});

// 2. Read Folder Contents
fs.readdir('new-folder',(err, files)=>{
    if(err) console.log('Folder files read geting error!');
    
    console.log('Folader file readed successfully',files);
    
})

//3. Remove Folder
fs.rmdir('delete-folder',(err)=>{
    
    if(err) console.log(err);
});

// To remove a non-empty folder
fs.rm('delete-folder',{recursive: true, force: true}, (err)=>{
    if(err) console.log(err);
    
})


// Rename Files or FOlder
fs.rename('old-name.txt', 'new-name.txt',(err)=>{
    if(err) console.log(err);
    
});

// get file informantion
fs.stat('readme.md',(err,stats)=>{
    if(err) console.log(err);

    console.log(stats);
    
    
})

Streams (for Large Files)
const largefile= fs.createWriteStream('largefile.txt');
largefile.write('Frist line/n');
largefile.write('second line/n');
largefile.write('thound line/n');

const readStream = fs.createReadStream('largefile.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('File reading completed!');
});

const getLargeFile=fs.createReadStream('largefile.txt');
const copyLargeFile=fs.createWriteStream('copy-largefile-22.txt');

getLargeFile.pipe(copyLargeFile);

