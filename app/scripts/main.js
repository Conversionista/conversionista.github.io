/* global $, WebFont, Handlebars */
WebFont.load({
    typekit: { id: 'fvc2tgi' }
});

Handlebars.registerHelper('if_even', function(conditional, options) {
  'use strict';
  if((conditional % 2) === 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

var stuff = {
    posts: [{
        title: 'Hypothesis Creator',
        subtitle: 'Get rock solid experiment hypothesis',
        image: {
            src: '/images/red_brain.svg',
            credit: 'Marek Polakovic',
            alt: ''
        },
        link: '//conversionista.github.io/hypothesis-creator',
        cta: 'Create your hypothesis',
        class: 'btn-success',
        content: 'Use it as a bullshit detector or make sure your experiment hypothesis is solid and based on measurable metrics and data.'
    }, {
    //     title: 'Can I test that?',
    //     subtitle: 'A/B-test Calculator using your Google Analytics account',
    //     image: {
    //         src: '/images/red_cat.svg',
    //         credit: 'Denis Sazhin',
    //         alt: ''
    //     },
    //     link: '//apps.conversionista.se/can-i-test-that/',
    //     cta: 'Get started',
    //     class: 'btn-success',
    //     content: 'Find out if it’s even possible to run meaningful experiments on certain pages, just hook up your Google Analytics account and we’ll save you some valuable time.'
    // }, {
        title: 'Visual Test Duration Calculator',
        subtitle: 'What kind of change can I detect?',
        image: {
            src: '/images/red_calculator.svg',
            credit: 'Luboš Volkov',
            alt: ''
        },
        link: '//conversionista.github.io/visual-test-duration-calculator/',
        cta: 'Check your duration',
        class: 'btn-default',
        content: 'A more usable alternative to the existing calculators out there.'
    }, {
        title: 'CSS to jQuery Converter',
        subtitle: 'For Optimizely',
        image: {
            src: '/images/red_converter.svg',
            credit: 'Daniele Catalanotto',
            alt: ''
        },
        link: '//conversionista.github.io/css-to-jquery-converter-for-optimizely',
        cta: 'Convert your CSS',
        class: 'btn-default',
        content: 'Get a nice $("head").append for your CSS.'
    }]
};

var content = Handlebars.compile($('#entry-template').html());
var footer = Handlebars.compile($('#footer-template').html());

$('.container > section').append(content(stuff));
$('.footer .apps-list').append(footer(stuff));


