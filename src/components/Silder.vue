<template>
    <div class="input-range">
        <div class="double-input input-range">
            <label></label>
            <input>
            <label></label>
        </div>
    </div>
</template>

<script>

</script>

<script src="">

</script>

<script>
export default {
    props: ['value', 'valuemin', 'valuemax', 'min', 'max', 'step', 'label'],
    data: function() { return { valuea: this.valuemin, valueb: this.valuemax }; },
    computed: {
        sortedvalues: function() {
            var valuea = +this.valuea,
                valueb = +this.valueb;
            return valuea < valueb ? [valuea, valueb] : [valueb, valuea];
        }
    },
    methods: {
        format: function(x) { return this.label ? this.label(x) : x; },
        onInput: function(event) {
            this.$emit('input', this.sortedvalues);
        },
        onMousemove: function(event) {
            var div = event.target.parentNode;
            if (div.tagName.toLowerCase() != 'div') { return false; }
            var x = (event.clientX - div.offsetLeft) / div.offsetWidth;
            var inputs = div.getElementsByTagName('input');
            var min_dist = Infinity,
                min_index = 0;
            for (var i = 0; i < inputs.length; i++) {
                var dist = (inputs[i].value - inputs[i].min) / (inputs[i].max - inputs[i].min);
                dist = Math.abs(dist - x);
                if (dist < min_dist) {
                    min_dist = dist;
                    min_index = i;
                }
            }
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].style.zIndex = i == min_index ? 1 : 0;
            }
        }
    }

}
</script>

<style lang="css" scoped>
/* Document style */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);
body {
    background: #5af;
    color: white;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    padding: 1em;
    line-height: 1.3;
}

/* Two-thumb input range */

div.input-range {
    display: inline-block;
    position: relative;
    width: 9em;
    height: 1.3em;
    vertical-align: middle;
    margin: 0 1.8em;
    margin-top: -3px;
}

div.input-range>label {
    position: absolute;
    transform: translateY(-50%);
    font-size: 0.7em;
    top: 50%;
}

div.input-range>label:first-child {
    right: 102%;
}

div.input-range>label:last-child {
    left: 102%;
}

div.input-range>input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    padding: 0;
    font: inherit;
    width: 100%;
    height: 100%;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    cursor: pointer;
}

div.input-range>input:focus {
    outline: 0;
}

div.input-range>input::-moz-focus-outer {
    border: 0;
}

div.input-range>input::-webkit-slider-thumb {
    border: none;
    -webkit-appearance: none;
    pointer-events: all;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    background: white;
    z-index: 2;
    position: relative;
    box-shadow: 0 2px 6px -3px rgba(0, 0, 0, 0.5);
    margin-top: -10px;
    /* Chrome needs to shift the thumb up. */
}

@supports (-ms-ime-align:auto) {
    div.input-range>input::-webkit-slider-thumb {
        margin-top: 0;
        /* Remove margin on Edge */
    }
}

div.input-range>input::-moz-range-thumb {
    border: none;
    -moz-appearance: none;
    pointer-events: all;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    background: white;
    z-index: 2;
    position: relative;
    box-shadow: 0 2px 6px -3px rgba(0, 0, 0, 0.5);
}

div.input-range>input::-ms-thumb {
    border: none;
    appearance: none;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    background: white;
    z-index: 2;
    position: relative;
    box-shadow: 0 2px 6px -3px rgba(0, 0, 0, 0.5);
}

div.input-range>input:focus::-webkit-slider-thumb {
    box-shadow: 0 2px 6px -3px rgba(0, 0, 0, 0.5), 0 0 0 4px rgba(0, 0, 0, 0.07);
}

div.input-range>input:focus::-moz-range-thumb {
    box-shadow: 0 2px 6px -3px rgba(0, 0, 0, 0.5), 0 0 0 4px rgba(0, 0, 0, 0.07);
}

div.input-range>input:focus::-ms-thumb {
    box-shadow: 0 2px 6px -3px rgba(0, 0, 0, 0.5), 0 0 0 4px rgba(0, 0, 0, 0.07);
}

div.input-range>input::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    border: none;
    border-radius: 2px;
}

div.input-range>input::-moz-range-track {
    width: 100%;
    height: 4px;
    border: none;
    border-radius: 2px;
}

div.input-range>input::-ms-track {
    background: transparent;
    /* No background color. */
    border-color: transparent;
    /* No border. */
    color: transparent;
    /* No tick marks. */
    width: 100%;
    height: 4px;
    border: none;
}

div.input-range>input::-ms-tooltip {
    display: none;
}

div.input-range>input::-ms-fill-lower,
div.input-range>input::-ms-fill-upper {
    border-radius: 2px;
}

div.input-range>input::-webkit-slider-runnable-track {
    background: rgba(255, 255, 255, 0.6);
}

div.input-range>input:nth-child(2)::-webkit-slider-runnable-track {
    background: none;
}

div.input-range>input::-moz-range-track {
    background: rgba(255, 255, 255, 0.6);
}

div.input-range>input:nth-child(2)::-moz-range-track {
    background: none;
}

div.input-range>input::-ms-fill-lower,
div.input-range>input::-ms-fill-upper {
    background: rgba(255, 255, 255, 0.6);
}

div.input-range>input:nth-child(2)::-ms-fill-lower,
div.input-range>input:nth-child(2)::-ms-fill-upper {
    background: none;
}
</style>