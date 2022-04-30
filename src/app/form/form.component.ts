import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Songs } from '../models/songs.model';
import { SongsService } from '../services/songs.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  id:string ="";
  song: Songs = new Songs();
  status = false;
  
  title?:String;
  artist?:String;
  globalSales?:String;
  musicGenre?:String;
  releaseDate?:String;
  
  constructor(private songsServices: SongsService,private router: Router, private router2:ActivatedRoute) { }


  saveSongs(): void{
    if(this.id){
      console.log(this.song.artist)
      this.songsServices.updateSong(this.id,
        {
          title: this.song.title,
          artist: this.song.artist,
          globalSales: this.song.globalSales,
          musicGenre: this.song.musicGenre,
          releaseDate: this.song.releaseDate,
        }).then(()=>{
          console.log("The song was updated successfully.");
          this.status = true;
          if(this.status){
            this.router.navigate(['/list']);
          }
        })
    }else if (!this.id){
      this.songsServices.createSong(this.song).then(()=>{
        console.log("The song was created and saved successfully.");
        this.status = true;
        if(this.status){
          this.router.navigate(['/list']);
        }
      })
    }

  }

  ngOnInit(): void {
    this.id = this.router2.snapshot.params['id'];
    if(this.id){
      this.getSong();
    }
    
    
  
  }

  onSelect(){
    this.router.navigate(['/list']);
  }

  //get song by id
  getSong(): void {
    this.songsServices.getSong(this.id).valueChanges().subscribe((data) =>{
      this.song = data as Songs;
      this.title = this.song.title;
      this.artist = this.song.artist;
      this.globalSales = this.song.globalSales;
      this.musicGenre = this.song.musicGenre;
      this.releaseDate = this.song.releaseDate;
    })
  }

}
