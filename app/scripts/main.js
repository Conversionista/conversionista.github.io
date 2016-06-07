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
        subtitle: 'Get rock solid testing hypothesis',
        image: {
            src: '/images/red_brain.svg',
            credit: 'Marek Polakovic',
            alt: ''
        },
        link: '//conversionista.github.io/hypothesis-creator',
        cta: 'Get started',
        class: 'btn-success',
        content: 'Unsure whether your hypothesis is solid or not? Use the test hypothesis creator and find out.'
    }, {
        title: 'Can I test that?',
        subtitle: 'AB-test Calculator using your analytics account',
        image: {
            src: '/images/red_cat.svg',
            credit: 'Denis Sazhin',
            alt: ''
        },
        link: '//apps.conversionista.se/can-i-test-that/',
        cta: 'Get started',
        class: 'btn-success',
        content: 'Hook up your Google Analytics account and find out on which pages you can run meaningful experiments.'
    }, {
        title: 'Visual Test Duration Calculator',
        subtitle: 'What kind of change can I detect?',
        image: {
            src: '/images/red_calculator.svg',
            credit: 'Luboš Volkov',
            alt: ''
        },
        link: '//conversionista.github.io/visual-test-duration-calculator/',
        cta: 'Get started',
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
        cta: 'Get started',
        class: 'btn-default',
        content: 'Get a nice $("head").append - string for your CSS.'
    }]
};

var content = Handlebars.compile($('#entry-template').html());
var footer = Handlebars.compile($('#footer-template').html());

$('.container > section').append(content(stuff));
$('.footer .apps-list').append(footer(stuff));


