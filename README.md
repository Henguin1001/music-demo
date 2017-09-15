# Markto Music
This is a demo of the templating language I have been developing. This demo uses the language to template matlab code in order to produce music.
Since I developed this very quickly the structure isn't the best for building off of (naming and parameters are not thought out).

Here is the main script:
```xml
<track d="2">
  <clip end="0.5">
    <sine f="1000"/>
  </clip>
  <clip start="0.5" end="1">
    <sine f="500"/>
  </clip>
  <clip start="1" end="2">
    <sine f="1500"/>
  </clip>
</track>
```
This produces the `output.m` file when `index.js` is run
```matlab

s = @(d)[0:1/8192:d];
y = @(x) (x > 0 & x < 0.5 ) .* sin(2*pi*1000*x)+(x > 0.5 & x < 1 ) .*     
sin(2*pi*500*x)+(x > 1 & x < 2 ) .*sin(2*pi*1500*x)  ;
out = y(s(2));

```
* The track is the container (with a duration of 2 seconds).
* each clip allows for an equation to run for a window of time between "start" and "end"
* the sine function represents an equation with a given frequency (Hz)

Once the output file is run in matlab there will be an m by 1 vector called `out` storing all the samples (8291 samples per second) that can be heard using the sound function
```matlab
sound(out);
```
Otherwise the `run.m` file can be run in matlab which will run `index.js`, `output.m` and `sound(out)` all at once.
