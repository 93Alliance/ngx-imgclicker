# ngx-imgclicker

![logo](./logo.png)

## Installation

```
npm i @flywine93/ngx-imgclicker -S
npm i panzoom -S
```

## Usage

1.Import module into App Module.

```
import { NgxImgclickerModule } from 'ngx-imgclicker';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, // import
    NgxImgclickerModule // import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
2.demo

```
<p style="text-align:center;">Test ngx-imgclicker</p>

<img src="https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg">

<ngx-imgclicker></ngx-imgclicker>
```

![logo](./demo.gif)