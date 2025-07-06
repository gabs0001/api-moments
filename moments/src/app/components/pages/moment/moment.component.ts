import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment.development';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';
import { Comment } from '../../../Comment';
import { CommentService } from '../../../services/comment.service';
import { 
  FormGroup, 
  FormControl, 
  Validators, 
  FormGroupDirective, 
  FormsModule, 
  ReactiveFormsModule 
} 
from '@angular/forms';

@Component({
  selector: 'app-moment',
  imports: [
    CommonModule, 
    FontAwesomeModule, 
    RouterModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})

export class MomentComponent implements OnInit {
  moment?: Moment
  baseApiUrl = environment.baseApiUrl

  faTimes = faTimes
  faEdit = faEdit
  
  commentForm!: FormGroup

  constructor(
    private momentService: MomentService, 
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: CommentService
  ) { }

  ngOnInit(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.momentService
      .getMoment(id)
      .subscribe(item => this.moment = item.data)

    this.commentForm = new FormGroup({
      text: new FormControl("",[Validators.required]),
      username: new FormControl("",[Validators.required]),
    })
  }

  get text() {
    return this.commentForm.get('text')!
  }

  get username() {
    return this.commentForm.get('username')!
  }

  async removeHandler(id: number) {
    this.momentService.removeMoment(id).subscribe({
      next: () => {
        this.messagesService.add('Momento excluido com sucesso!');
        this.router.navigate(['/']);
      }
    })
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if(this.commentForm.invalid) {
      return
    }

    const data: Comment = this.commentForm.value

    data.momentId = Number(this.moment!.id)

    this.commentService.createComment(data).subscribe({
      next: (comment) => {
        this.moment!.comments!.push(comment.data)
        this.messagesService.add("Comentário adicionado!")
        
        //resetar o form
        this.commentForm.reset()
        formDirective.resetForm()
      }
    })
  }
}