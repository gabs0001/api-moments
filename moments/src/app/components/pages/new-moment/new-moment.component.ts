import { Component, OnInit } from '@angular/core';
import { MomentFormComponent } from "../../moment-form/moment-form.component";
import { Moment } from '../../../Moment';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})

export class NewMomentComponent implements OnInit {
  btnText: string = 'Compartilhar!';

  constructor(
    private momentService: MomentService, 
    private messagesService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  async createHandler(moment: Moment) { 
    const formData = new FormData()
    formData.append('title',moment.title)
    formData.append('description',moment.description)

    if(moment.image) {
      formData.append('image',moment.image)
    }

    //enviar para o service
    this.momentService.createMoment(formData).subscribe({
      next: () => {
        //exibir msg
        this.messagesService.add('Momento adicionado com sucesso!');

        //redirect
        this.router.navigate(['/']);
      }
    })
  }
}
