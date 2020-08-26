# ngx-imgclicker [![npm version](https://badge.fury.io/js/%40flywine93%2Fngx-imgclicker.svg)](https://badge.fury.io/js/%40flywine93%2Fngx-imgclicker) [![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/@flywine93/ngx-imgclicker.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@flywine93/ngx-imgclicker/)

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