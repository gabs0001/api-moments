import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

//importar em outros componentes caso seja necessário
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MessagesComponent } from "./components/messages/messages.component";
//====================================================

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MessagesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'moments';
}

//colocar nos outros componentes caso seja necessário
@NgModule({
  providers: [provideHttpClient(withInterceptorsFromDi())]
})

export class HttpClientModule {}
//====================================================