import { Component, OnInit } from '@angular/core';

// Import for Reactive Forms from Angular
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-random-facts',
  templateUrl: './random-facts.component.html',
  styleUrls: ['./random-facts.component.scss']
})
export class RandomFactsComponent implements OnInit {
  authorName;
  funFact;
  factList: Array<any> = [];
  constructor() { }

  factCreator = new FormGroup({
    authorName: new FormControl('', Validators.required),
    funFact: new FormControl('', Validators.required)
  })

  

  showFacts(){
    document.getElementsByTagName('ol')[0].setAttribute('class', 'showFacts')
  }

  // onSubmit Function for Form
  onSubmit(){
    this.authorName = this.factCreator.value.authorName
    this.funFact = this.factCreator.value.funFact

    if(this.factList == []){
      this.factList = [
      ]
    }
    else{
      this.factList.push(this.funFact)
      console.log(this.factList)
    }

    this.factCreator.reset(this.factCreator.value);

  }



  ngOnInit() {
  }

}

