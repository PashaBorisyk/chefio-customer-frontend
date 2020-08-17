export class PresentationCarouselItem {
  header: string = null;
  content: string = null;
  hasButton = false;
  valueButton: string = null;
  link: string = null;
  image: string = null;


  constructor(header: string, content: string, hasButton: boolean, valueButton: string, link: string) {
    this.header = header;
    this.content = content;
    this.hasButton = hasButton;
    this.valueButton = valueButton;
    this.link = link;
  }
}
