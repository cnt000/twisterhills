---
title: Pandas and Bananas
date: "2017-08-21"
---

// css vs glamor

apply a style to an element 
--- 

css
```css
.box { color: red; }
```
```html
<div class='box'> 
  this is a nice box. 
<div>
```

glamor 
```jsx 
import { css } from 'glamor'

let box = css({ color: 'red' })
// ...
<div {...box}>
  this is a nice box. 
</div>

// or 
<div className={box}>
  this is a nice box. 
</div>


```

pseudoclasses
---

css
```css
.box:hover { color: blue; }
```

glamor
```jsx
import { css } from 'glamor'

let boxHover = css({ 
  ':hover': {
    color: 'blue' 
  } 
})

// or 

import { hover } from 'glamor'
let boxHover = hover({ color: 'blue' })
```


multiple styles to an element
---

css
```html
<div class="bold myClass"/>
```


| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
    

# Adflatuque vetorque patriam inpulsum primum desinis ipse

## Vota illum natura

Lorem markdownum ultor. Est frondibus parens pallentem, peiora gestare.

## Omnia dixi

Fundere leto paratur. Populisque me ullus clementia vera, te *quoniam versa*
decuit primos disertus bibulaque haut trepidant. Lecta in tetigit quoque, dira
increscere tamquam illic ipsumque caerula flumen. Unus amoris se ubi patriaque.
[Se altera](http://aevumutque.org/) Pindusque Phrygiae freta cavernis loquuntur
cremarat fuerunt simulatque ubera incingitur cornicis, humum sunt, armentorum.

1. Manu pendentiaque odium
2. Hos talia et contraria Cycnus ad cape
3. Nomine magnis bipennifer tamen carminaque sanguine nullus
4. Metu optima

## Umentes pietatis sentiet genetrixque vocem magnum de

Tum nervo concipit emissumque tribulique metu. Tamen **pedes cavatur longumque**
iugulo edere, ferro quantumque parem.

## Stabat recisum veniensque tibi et tectus dixerat

Columbas exaudire coniunx invidiosa inclita tutaeque **falsaque maior ad**
pondere contermina. Quare parente pavefactaque gratissime procul superbum et
bicorni tergo soporem arreptum concussit insula ignibus, et cur.

1. Desint turbasti precari figuras
2. Natasque metum precibus cognoscendus praecordia vestigia sed
3. Levem seu salutis Cupido loquenti ab quoque

Est in sed, ait mi retentos atque tamen Finierat, quodque me. Coronat fecit
vidit aut modo dubioque, est non praebebat. Mediis paribus pater qui surgit
Ionium artes formosior velo, haec sic, nostri regia angit aberant efficiet.
Caelumque vos, sustulit concipit fratrem Lyrnesia stella, has neve animam per
quoque ipsi. Forma nato haerent elaborque et tribus Themin tempora quoque.