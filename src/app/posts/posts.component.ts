import { Component, OnInit } from '@angular/core';
import { SafeHtmlPipe } from '../util/pipe.safehtml';

declare var window: any;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts:Post[] = [
    {
        id: 2,
        title: "Inauguração do Blog",
        created: "24 de setembro 2017 14:23h",
        body: "<p>Hoje é um dia para comemorar!</p>"+
              "<p>É o dia que o blog foi disponibilizado no github. Ebaahh</p>",
        category: "Eventos"
    },
    {
        id: 1,
        title: "Hackaton Uni-FACEF 2016",
        created: "24 de agosto 2016 11:56h",
        body: "<p>O hackaton Uni-FACEF 2016 foi um evento que durou 24 horas, realizado no dia 20 e 21 de agosto de 2016.</p>"+
              "<p>Foram desenvolvidos vários projetos pelos alunos das turmas do 3ª e 4ª ano do curso de Sistemas de Informação da Uni-FACEF, os projetos foram apresentados e porteriormente avaliados pela banca examinadora.</p>"+
              "<p>Todos os projetos estiveram relacionados a soluções na area de varejo sugeridos pela empresa Luizalabs de Franca.</p>"+
              "<div class=\"embed-responsive embed-responsive-4by3\">"+
              "<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ejoGz2yilEs?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>"+
              "</div>"+
              "<br>"+
              "<div class=\"embed-responsive embed-responsive-4by3\">"+
              "<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tIQWet1RR-g?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe>"+
              "</div>",
        category: "Eventos"
    }
  ]
  constructor() { }

  ngOnInit() {
    if(window.FB)
      window.FB.XFBML.parse();
  }
}

interface Post{
    id: number;
    title: string;
    created: string;
    body: string;
    category: string;
}