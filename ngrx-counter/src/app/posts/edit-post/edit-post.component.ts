import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from 'src/app/models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  post?: Post;
  postForm: FormGroup;
  postSubscription?: Subscription;
  constructor(private route:ActivatedRoute, private store: Store<AppState>){
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
   ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('id'));
      const id = params.get('id');
      if(id){
      this.store.select(getPostById,{ id }).subscribe(data => {
        this.post = data;
      });
    }
    });
   }

   

  onSubmit(){

  }

}
