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
    description:'',
    value:0,
    isExpense:false
  }
  id;

  constructor(private route:ActivatedRoute,
              private service:WordService,
              private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getWord(this.id).subscribe((data:any) => {
       (data);
      this.word.description = data.WrongWord;
      this.word.isExpense = data.RightWord;
      this.word.value = data.Value;
    })
  }

  cancel(){
    this.router.navigate(['/'])
  }

  confirm(){
    this.service.deleteWord(this.id).subscribe((data)=>{
       (data);
    })
  }

}
