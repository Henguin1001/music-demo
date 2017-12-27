<template name="pi">pi</template>
<template name="angular">2*<pi/>*{{attributes.f|default(1)}}</template>
<template name="sine">{{attributes.a? attributes.a ~ '*':'' }}sin(<angular f="{{attributes.f}}"/>*x)</template>
<template name="clip">(x > {{attributes.start|default(0)}} & x < {{attributes.end}} ) .* {{j(element).text()}}</template>
<template name="track">
s = @(d)[0:1/8192:d];
y = @(x) {% for child in j(element).children() %}{{child.text()|replace({'\n':''})}}{% if loop.last == false %}+{% endif %}{% endfor %};

out = y(s({{attributes.d}}));
</template>
