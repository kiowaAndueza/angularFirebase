import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SongsService } from '../services/songs.service';
import { Songs } from '../models/songs.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  songsList?: Songs[];
  song?: Songs;
  indexList = -1;


  constructor(private songsService: SongsService, private router: Router) { }
  ngOnInit(): void {
    this.getDatesDB();
  }

  //update list from DB
  updateList(): void{
    this.song = undefined;
    this.indexList = -1;
    this.getDatesDB();
  }

  //get data from DB
  getDatesDB():void{
    this.songsService.getAll().snapshotChanges().pipe(
    map(change =>
      change.map(c => ({
        id: c.payload.key, ...c.payload.val()
      }))
      )
    ).subscribe((data:any) =>{
      this.songsList = data;
    })
  }

  //delete all data from DB
  deleteList():void{
    this.songsService.deleteSongs()
    .then(()=> this.updateList())
    .catch(err => console.log(err))
  }

  //delete song from
  deleteSong(song: Songs): void {
    this.songsService.deleteSong(song.id)
    .then(()=> this.updateList())
    .catch(err => console.log(err))
  }

  setActive(song: Songs, index: number):void{
    this.song= song;
    this.indexList = index;
  }

  //config
  configList(songsList: Songs, index: number):void{
    this.song= songsList;
    this.indexList = index;
  }

  getDetails(song: { id?: string;}){
    this.router.navigate(['/description', song.id]);
  }


  updateForm(song: Songs){
    this.router.navigate(['/update', song.id]);
  }

}
