# FLEX-CSS - Grid Library (303 Bytes Gzipped)

Flex Css is a Simple Library Which helps You Create HTML Layouts in Seconds

## Row

Any Layout is a Row in Flex Css

```html
<div class="row"> 
    ....
    your html goes Here
</div>
```

## Col
There are Colums in Rows that Gives Proper Layout

```html
<div class="col-12">
    ... Everthings Else Goes Here
</div>
```

## Naming convention

Flex Css is Mobile First. Each Child of `row`(class="row") specifies its width on a device is as follows.

```html
col-<md|lg|xl>-<1-12>

Eg.
col-md-12
```

### Targets

lg : Large Devices Like Laptop

md : Tablets

xl : Extra Large Device

When No Targets Specified it Targets Mobile and all Screens Eg.

```html
<div class="col-6">
    ....
    ....
</div>
```

Above Element will Take Half of Screen in All kind of Targets

## Example

Here is Example of Row with Elements 6 Cells Wide on Larger Screen and 12 Cells (100%) Wide in Smaller Like Mobile

```html
<div class="row">
    <div class="col-12 col-md-6">
        lorem...
    </div>
</div>
```

