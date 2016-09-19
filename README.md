<p align="center">
<a href="https://haleks.ca" target="_blank"><img src="https://haleks.ca/images/logo/haleks[markdown-orange].png" alt="haleks logo"></a>
</p>

<h1 align="center">
Vitalize
<br>
<a href="https://travis-ci.org/haleks/vitalize" target="_blank"><img src="https://img.shields.io/travis/haleks/vitalize/master.svg?style=flat-square" alt="travic ci"></a>
<a href="https://github.com/haleks/vitalize/releases" target="_blank"><img src="https://img.shields.io/github/release/haleks/vitalize.svg?style=flat-square" alt="latest release"></a>
<a href="LISCENCE" target="_blank"><img src="https://img.shields.io/badge/license-MIT-ff4c00.svg?style=flat-square" alt="liscense"></a>
</h1>

A flexible cross-browser library of CSS keyframe animations built with Sass. Components based on Dan Eden's [Animate.css](https://github.com/vitalize/animate.css).


## Documentation

### Installation

Installing via [bower](http://bower.io/)

```
bower install vitalize
```


### Settings

You may change the settings of the package by copying the package's `_settings.scss` partial into your sass project.  Afterwards you simply need to uncomment the variables you wish to change  

The settings are organized in 3 priority levels ranging from global, animation group, and finally, the animation itself.  The global settings are inherited by every group animations which in turn are inherited by all animations unless otherwise specified more explicitly.

#### Options

##### Include

The includes variable defines if you want the package to automatically generate all of the animations' classes.

The default is `true`.

```sass
// Include global.
$vitalize-include-class: true;

// Include animations group which inherit the global default.
$vitalize-{animations-group}-include-class: $vitalize-include-class;

// Include animation which inherit his animations group's default.
$vitalize-{animation}-include-class: $vitalize-{animations-group}-include-class;
```

You may set the global include default to `false` if you wish to only use the animations' mixins and create your own classes or simply if you want to generate specific animations group or animations.  But don't forget to set the include of the desired animations group or animations' to `true`.


##### Properties

The properties variable defines the animations' properties.

The default are:

```sass
// The default value of the animation properties.
'count': 1,
'duration': 1s,
'delay': 0s,
'function': 'ease',
'fill-mode': 'both',
'visibility': 'hidden'
```

If wish to make changes to the defaults you may do so by adding the specific key with its new value to the `$vitalize-default-properties` variable like so:

```sass
// The default properties you want to change.
$vitalize-default-properties: (
    'duration': 2s,
    'function': 'linear'
);
```

This will be merged with the global defaults and change defaults of all the animations to:

```sass
// The new default properties.
'count': 1,
'duration': 2s,
'delay': 0s,
'function': 'linear',
'fill-mode': 'both',
'visibility': 'hidden'
```

Just like the include variable, you may set the properties of specific animations group or animations by modifying their respective properties variable.


##### Extensions

The extension variable generate and append a secondary class to the current animation class to overwrite the animation defaults.

The default is an empty map `()`.

You may define your own extensions like this:

```sass
// Exemple of an extension.
$vitalize-default-extensions: (
    'property': (
        'class': value,
        'second-class': value
    ),
    'second-property': (
        'class': value,
    )
);
```

With that in mind, let's say you want to add a 500ms, 1s and 2s delays as a default for all your animations class.  You can accomplish this like so:

```sass
// Exemple of delay extensions.
$vitalize-default-extensions: (
    'delay': (
        '500ms': 500ms,
        'one-second': 1s,
        '2s': 2s,
    )
);
```

This will create classes `&.delay-500ms`,  `&.delay-one-second` and `&.delay-2s` with their respective values.

You will then be able to use the extension class with your animation as follows:

```html
<!-- Will fade in as soon as the default delay is finished -->
<h1 class="fade-in">Title</h1>
<!-- Will fade in at the extension's delay value -->
<h2 class="fade-in delay-500ms"></h2>
```

The available properties for extensions are the same as the default properties variable.


### Animations

#### Custom

It is possible to create your own animations by using the `@include animation-set` mixin.

```sass
.custom-animation {
    @include animation-set('animation-name') {
        //Your custom keyframes here
        0% {
            color: blue;
        }
        100% {
            color: red;
        }
    }
}
```

You may want to pass some properties or extensions of it's own and you may do this with the optional second argument of the mixin.  If no options are passed the animation will use the global default.

```sass
$options: (
    'properties': (
        'function': 'linear'
    ),
    'extensions': (
        'delay': (
            'five-second': 5s
        )
    )
);

.custom-animation {
    @include animation-set('animation-name', $options) {
        //Your custom keyframes here
        0% {
            color: blue;
        }
        100% {
            color: red;
        }
    }
}
```


#### Components

Demo of animations components can be found on Dan Eden's website at [http://daneden.github.io/animate.css](http://daneden.github.io/animate.css).


#### Attentions Seekers

| Animation             | Class                    |
|-----------------------|--------------------------|
| Bounce                | `.bounce`                |
| Flash                 | `.flash`                 |
| Jello                 | `.jello`                 |
| Pulse                 | `.pulse`                 |
| Rubber Band           | `.rubber-band`           |
| Shake                 | `.shake`                 |
| Swing                 | `.swing`                 |
| Tada                  | `.tada`                  |
| Wobble                | `.wobble`                |


#### Bouncing Entrances

| Animation             | Class                    |
|-----------------------|--------------------------|
| Bounce In             | `.bounce-in`             |
| Bounce In Down        | `.bounce-in-down`        |
| Bounce In Left        | `.bounce-in-left`        |
| Bounce In Right       | `.bounce-in-right`       |
| Bounce In Up          | `.bounce-in-up`          |


#### Bouncing Exits

| Animation             | Class                    |
|-----------------------|--------------------------|
| Bounce Out            | `.bounce-out`            |
| Bounce Out Down       | `.bounce-out-down`       |
| Bounce Out Left       | `.bounce-out-left`       |
| Bounce Out Right      | `.bounce-out-right`      |
| Bounce Out Up         | `.bounce-out-up`         |


#### Fading Entrances

| Animation             | Class                    |
|-----------------------|--------------------------|
| Fade In               | `.fade-in`               |
| Fade In Down          | `.fade-in-down`          |
| Fade In Left          | `.fade-in-left`          |
| Fade In Right         | `.fade-in-right`         |
| Fade In Up            | `.fade-in-up`            |


#### Fading Exits

| Animation             | Class                    |
|-----------------------|--------------------------|
| Fade Out              | `.fade-out`              |
| Fade Out Down         | `.fade-out-down`         |
| Fade Out Left         | `.fade-out-left`         |
| Fade Out Right        | `.fade-out-right`        |
| Fade Out Up           | `.fade-out-up`           |


#### Flippers

| Animation             | Class                    |
|-----------------------|--------------------------|
| Flip                  | `.flip`                  |


#### Flipping Entrances

| Animation             | Class                    |
|-----------------------|--------------------------|
| Flip In X             | `.flip-in-x`             |
| Flip In Y             | `.flip-in-y`             |


#### Flipping Exits

| Animation             | Class                    |
|-----------------------|--------------------------|
| Flip Out X            | `.flip-out-x`            |
| Flip Out Y            | `.flip-out-y`            |


#### Lightspeed

| Animation             | Class                    |
|-----------------------|--------------------------|
| Lightspeed In         | `.lightspeed-in`         |
| Lightspeed Out        | `.lightSpeed-out`        |


#### Rotating Entrances

| Animation             | Class                    |
|-----------------------|--------------------------|
| Rotate In             | `.rotate-in`             |
| Rotate In Down Left   | `.rotate-in-down-left`   |
| Rotate In Down Right  | `.rotate-in-down-right`  |
| Rotate In Up Left     | `.rotate-in-up-left`     |
| Rotate In Up Right    | `.rotate-in-up-right`    |


#### Rotating Exits

| Animation             | Class                    |
|-----------------------|--------------------------|
| Rotate Out            | `.rotate-out`            |
| Rotate Out Down Left  | `.rotate-out-down-left`  |
| Rotate Out Down Right | `.rotate-out-down-right` |
| Rotate Out Up Left    | `.rotate-out-up-left`    |
| Rotate Out Up Right   | `.rotate-out-up-right`   |


#### Sliding Entrances

| Animation             | Class                    |
|-----------------------|--------------------------|
| Slide In Down         | `.slide-in-down`         |
| Slide In Left         | `.slide-in-left`         |
| Slide In Right        | `.slide-in-right`        |
| Slide In Up           | `.slide-in-up`           |


#### Sliding Exits

| Animation             | Class                    |
|-----------------------|--------------------------|
| Slide Out Down        | `.slide-out-down`        |
| Slide Out Left        | `.slide-out-left`        |
| Slide Out Right       | `.slide-out-right`       |
| Slide Out Up          | `.slide-out-up`          |


#### Specials

| Animation             | Class                    |
|-----------------------|--------------------------|
| Hinge                 | `.hinge`                 |
| Roll In               | `.roll-in`               |
| Roll Out              | `.roll-out`              |


#### Zooming Entrances

| Animation             | Class                    |
|-----------------------|--------------------------|
| Zoom In               | `.zoom-in`               |
| Zoom In Down          | `.zoom-in-down`          |
| Zoom In Left          | `.zoom-in-left`          |
| Zoom In Right         | `.zoom-in-right`         |
| Zoom In Up            | `.zoom-in-up`            |


#### Zooming Exits

| Animation             | Class                    |
|-----------------------|--------------------------|
| Zoom Out              | `.zoom-out`              |
| Zoom Out Down         | `.zoom-out-down`         |
| Zoom Out Left         | `.zoom-out-left`         |
| Zoom Out Right        | `.zoom-out-right`        |
| Zoom Out Up           | `.zoom-out-up`           |


## License

Vitalize is licensed under [The MIT License (MIT)](LICENSE).
