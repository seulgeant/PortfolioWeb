import { Injectable } from '@angular/core';
import {Storage, getDownloadURL, list, uploadBytes} from '@angular/fire/storage'
import { getStorage, ref, deleteObject } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url:string="";
  name:string="";


  constructor(private storage:Storage) { }

  newImages($event:any){
    const filename=$event.target.files[0].name
    const file=$event.target.files[0]
    const imgRef =ref(this.storage, `imagen/`+filename)
    uploadBytes(imgRef, file)
    .then(response => (this.getImages(filename)))
    .catch(error=> console.log(error))
  }


  uploadImages($event:any, name:string){
    const file=$event.target.files[0]
    const imgRef =ref(this.storage, `imagen/`+name)
    uploadBytes(imgRef, file)
    .then(response => (this.getImages(name)))
    .catch(error=> console.log(error))
  }

 
  getImages(name:string){
    const imagesRef=ref(this.storage,'imagen')
    list(imagesRef)
    .then(async response => {
      //this.url=await getDownloadURL(response.items[0]);
      this.url=await getDownloadURL(ref(this.storage, `imagen/`+name));
      this.name=name;
      console.log("la Url es:"+this.url,"el nombre es:"+this.name)
  })
    .catch(error=> console.log(error))
  }

  deleteimage(name:string){
const storage = getStorage();
const desertRef = ref(storage, 'imagen/'+name);
deleteObject(desertRef).then(()=> {
  console.log('archivo borrado exitosamente')
}).catch((error) => {
  console.log(error)
});
  }





}
