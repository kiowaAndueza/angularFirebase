import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongsService } from '../services/songs.service';
import { Songs } from '../models/songs.model';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  public id: string ="";
  song?: Songs;
  title?:String;
  artist?:String;
  globalSales?:String;
  musicGenre?:String;
  releaseDate?:String;

  constructor(private songsService: SongsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['key'];
    this.getSong();
  }



  //get song by id
  getSong(): void {
    this.songsService.getSong(this.id).valueChanges().subscribe((data) =>{
      this.song = data as Songs;
      this.title = this.song.title;
      this.artist = this.song.artist;
      this.globalSales = this.song.globalSales;
      this.musicGenre = this.song.musicGenre;
      this.releaseDate = this.song.releaseDate;
    })
  }


  

}

