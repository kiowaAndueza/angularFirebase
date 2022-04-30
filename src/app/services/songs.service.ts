import { Injectable } from '@angular/core';
import { Songs } from '../models/songs.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class SongsService {
  
  private dbSongs = '/songs';
  
  songsRef : AngularFireList<Songs>;

  constructor(private db: AngularFireDatabase) {
    this.songsRef = db.list(this.dbSongs)
   }

  //get all songs
   getAll():AngularFireList<Songs>{
     return this.songsRef;
   }


   //create new song
   createSong(song: Songs): any{
     return this.songsRef.push(song);
   }

   //get song by id
   getSong(id: string): AngularFireObject<Songs>{
    return this.db.object('/songs/' + id);
   }
  

   //update song
   updateSong(id:string, value:any): Promise<void>{
    return this.songsRef.update(id,value);
   }

   //delete song
   deleteSong(id: string): Promise<void>{
     return this.songsRef.remove(id);
   }

   //delete all songs
   deleteSongs(): Promise<void>{
     return this.songsRef.remove();
   }
}
