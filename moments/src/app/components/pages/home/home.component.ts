import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moment';
import { environment } from '../../../../environments/environment.development';
import { RouterModule } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string = ""

  constructor(private momentService: MomentService) { }

  ngOnInit(): void { 
    this.momentService.getMoments().subscribe(({ data }) => {
      // console.log('Momentos recebidos:', data)
      data.map(item => { item.createdAt = new Date(item.createdAt!).toLocaleString('pt-BR') })
      this.allMoments = data
      this.moments = data
    })
  }

  search(event: Event):void { 
    const target = event.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoments.filter(moment => moment.title.toLowerCase().includes(value))
  }
}