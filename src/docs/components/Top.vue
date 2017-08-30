<template>
    <header>
        <section class="menu container">
            <section class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </section>
        </section>
        <section class="container text-center content">
            <h1 class="lib-name">confere.<span>js</span></h1>
            <h2 >Data & Forms validation made easy</h2>
            <h5>A simple and extensive promise (async) based validation library heavily inspired by <a href="https://laravel.com/docs/master/validation" class="text-danger" target="_blank">laravel</a> validation without overhead of jquery</h5>
            <section class="badges mt-4">
                <a href="https://www.npmjs.com/package/confere.js"><img src="https://img.shields.io/travis/isneezy/confere.js/master.svg?style=flat-square"></a>
                <a href="https://www.npmjs.com/package/confere.js"><img src="https://img.shields.io/gemnasium/sagalbot/vue-select.svg?style=flat-square"></a>
                <a href="https://www.npmjs.com/package/confere.js"><img src="https://img.shields.io/github/license/isneezy/confere.js.svg?style=flat-square"></a>
                <a href="https://www.npmjs.com/package/confere.js"><img src="https://img.shields.io/github/release/isneezy/confere.js.svg?style=flat-square"></a>
            </section>
            <a href="https://github.com/isneezy/confere.js" class="btn btn-outline-primary mt-4">
                <i class="mdi mdi-github-circle"></i> View on GitHub
            </a>
        </section>
        <section class="container text-center link-to-docs">
            <a href="#installation">Install, Example & Documentation <i class="mdi mdi-chevron-down"></i></a>
        </section>
    </header>
</template>
<style scoped="" lang="scss">
    header{
        position: relative;
        min-height: 620px;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,98e3ea+100 */
        background: #ffffff; /* Old browsers */
        background: -moz-linear-gradient(45deg, #ffffff 0%, #98e3ea 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #ffffff 0%,#98e3ea 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #ffffff 0%,#98e3ea 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#98e3ea',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

        .lib-name{
            font-family: 'Great Vibes', cursive;
            font-size: 100px;
            text-align: center;
            color: #514B4B;
            span{
                color: #EE5D5D;
            }
        }

        .content {
            position: absolute;
            width: 100%;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
        .link-to-docs{
            font-size: 24px;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            a{
                color: #3E3636;
            }
        }

        .wrapper{}
        .hamburger{
            $background-color: #2E2E2E;
            $width: 30px;
            cursor: pointer;
            position: relative;
            float: right;
            margin-top: 20px;
            span {
                display: block;
                height: 2px;
                background-color: $background-color;
                width: $width;
                margin-top: 4px;
                transition: all ease .2s;
                &:first-child{
                    margin-top: 0;
                }
            }

            &:hover{
                span{
                    &:first-child{
                        transform: rotate(-4deg);
                    }
                    &:last-child{
                        transform: rotate(4deg);
                    }
                }
            }
        }
    }
</style>