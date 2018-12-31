import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WordService } from '../word.service';

@Component({
  selector: 'app-delete-word',
  templateUrl: './delete-word.component.html',
  styleUrls: ['./delete-word.component.css']
})
export class DeleteEntryComponent implements OnInit {

  word ={
    wrongWord:'',
    rightWord:''
  }
  wrongWord;

  constructor(private route:ActivatedRoute,
              private service:WordService,
              private router:Router) { }

  ngOnInit() {
    this.wrongWord = this.route.snapshot.paramMap.get('wrongWord');
    this.service.getWord(this.wrongWord).subscribe((data:any) => {
      this.word.wrongWord = data.wrongWord;
      this.word.rightWord = data.rightWord;
    })
  }

  cancel(){
    this.router.navigate(['/'])
  }

  confirm(){
    this.service.deleteWord(this.wrongWord).subscribe((data)=>{
       (data);
    })
  }

}
