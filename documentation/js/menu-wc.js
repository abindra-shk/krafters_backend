'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">krafters_backend_nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddressModule.html" data-type="entity-link" >AddressModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AddressModule-fbcb2a115e83636c1f73c629afff820835f75fda12680f59f18ff230c1536dbd70236b67e28a16afe53dfc812bd9339089211e8134ba913c45faa8c98cf4c9e3"' : 'data-bs-target="#xs-controllers-links-module-AddressModule-fbcb2a115e83636c1f73c629afff820835f75fda12680f59f18ff230c1536dbd70236b67e28a16afe53dfc812bd9339089211e8134ba913c45faa8c98cf4c9e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddressModule-fbcb2a115e83636c1f73c629afff820835f75fda12680f59f18ff230c1536dbd70236b67e28a16afe53dfc812bd9339089211e8134ba913c45faa8c98cf4c9e3"' :
                                            'id="xs-controllers-links-module-AddressModule-fbcb2a115e83636c1f73c629afff820835f75fda12680f59f18ff230c1536dbd70236b67e28a16afe53dfc812bd9339089211e8134ba913c45faa8c98cf4c9e3"' }>
                                            <li class="link">
                                                <a href="controllers/AddressController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AddressModule-fbcb2a115e83636c1f73c629afff820835f75fda12680f59f18ff230c1536dbd70236b67e28a16afe53dfc812bd9339089211e8134ba913c45faa8c98cf4c9e3"' : 'data-bs-target="#xs-injectables-links-module-AddressModule-fbcb2a115e83636c1f73c629afff820835f75fda12680f59f18ff230c1536dbd70236b67e28a16afe53dfc812bd9339089211e8134ba913c45faa8c98cf4c9e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddressModule-fbcb2a115e83636c1f73c629afff820835f75fda12680f59f18ff230c1536dbd70236b67e28a16afe53dfc812bd9339089211e8134ba913c45faa8c98cf4c9e3"' :
                                        'id="xs-injectables-links-module-AddressModule-fbcb2a115e83636c1f73c629afff820835f75fda12680f59f18ff230c1536dbd70236b67e28a16afe53dfc812bd9339089211e8134ba913c45faa8c98cf4c9e3"' }>
                                        <li class="link">
                                            <a href="injectables/AddressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-8e0b220b65c7db3fd4fc47657852581570e4ada7a8c2652136a0ea423d6688f0af3f7dec229da383af6ba934fddf922c26687cf529180f8c09b734205f8768c3"' : 'data-bs-target="#xs-controllers-links-module-AppModule-8e0b220b65c7db3fd4fc47657852581570e4ada7a8c2652136a0ea423d6688f0af3f7dec229da383af6ba934fddf922c26687cf529180f8c09b734205f8768c3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8e0b220b65c7db3fd4fc47657852581570e4ada7a8c2652136a0ea423d6688f0af3f7dec229da383af6ba934fddf922c26687cf529180f8c09b734205f8768c3"' :
                                            'id="xs-controllers-links-module-AppModule-8e0b220b65c7db3fd4fc47657852581570e4ada7a8c2652136a0ea423d6688f0af3f7dec229da383af6ba934fddf922c26687cf529180f8c09b734205f8768c3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8e0b220b65c7db3fd4fc47657852581570e4ada7a8c2652136a0ea423d6688f0af3f7dec229da383af6ba934fddf922c26687cf529180f8c09b734205f8768c3"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8e0b220b65c7db3fd4fc47657852581570e4ada7a8c2652136a0ea423d6688f0af3f7dec229da383af6ba934fddf922c26687cf529180f8c09b734205f8768c3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8e0b220b65c7db3fd4fc47657852581570e4ada7a8c2652136a0ea423d6688f0af3f7dec229da383af6ba934fddf922c26687cf529180f8c09b734205f8768c3"' :
                                        'id="xs-injectables-links-module-AppModule-8e0b220b65c7db3fd4fc47657852581570e4ada7a8c2652136a0ea423d6688f0af3f7dec229da383af6ba934fddf922c26687cf529180f8c09b734205f8768c3"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthenticationModule-ee741389f77d160af6204894041e4d8d2833e6511be6c0d2b08c61b6ed0ade5178dc73eea7b37cb8f5e5171605f26e8f80b02259eac0b1d6ab0734da9b95a4ae"' : 'data-bs-target="#xs-controllers-links-module-AuthenticationModule-ee741389f77d160af6204894041e4d8d2833e6511be6c0d2b08c61b6ed0ade5178dc73eea7b37cb8f5e5171605f26e8f80b02259eac0b1d6ab0734da9b95a4ae"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-ee741389f77d160af6204894041e4d8d2833e6511be6c0d2b08c61b6ed0ade5178dc73eea7b37cb8f5e5171605f26e8f80b02259eac0b1d6ab0734da9b95a4ae"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-ee741389f77d160af6204894041e4d8d2833e6511be6c0d2b08c61b6ed0ade5178dc73eea7b37cb8f5e5171605f26e8f80b02259eac0b1d6ab0734da9b95a4ae"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthenticationModule-ee741389f77d160af6204894041e4d8d2833e6511be6c0d2b08c61b6ed0ade5178dc73eea7b37cb8f5e5171605f26e8f80b02259eac0b1d6ab0734da9b95a4ae"' : 'data-bs-target="#xs-injectables-links-module-AuthenticationModule-ee741389f77d160af6204894041e4d8d2833e6511be6c0d2b08c61b6ed0ade5178dc73eea7b37cb8f5e5171605f26e8f80b02259eac0b1d6ab0734da9b95a4ae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-ee741389f77d160af6204894041e4d8d2833e6511be6c0d2b08c61b6ed0ade5178dc73eea7b37cb8f5e5171605f26e8f80b02259eac0b1d6ab0734da9b95a4ae"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-ee741389f77d160af6204894041e4d8d2833e6511be6c0d2b08c61b6ed0ade5178dc73eea7b37cb8f5e5171605f26e8f80b02259eac0b1d6ab0734da9b95a4ae"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStorage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStorage</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CategoryModule-e61d041dfbb4c7b2c174b3849ac6a7a748a71c5cd96187f170afef05269a56df891ccaf162b59f9f5f564b23cbe3ea73a7b201b5e0d6f53348dc21e91941abd1"' : 'data-bs-target="#xs-controllers-links-module-CategoryModule-e61d041dfbb4c7b2c174b3849ac6a7a748a71c5cd96187f170afef05269a56df891ccaf162b59f9f5f564b23cbe3ea73a7b201b5e0d6f53348dc21e91941abd1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-e61d041dfbb4c7b2c174b3849ac6a7a748a71c5cd96187f170afef05269a56df891ccaf162b59f9f5f564b23cbe3ea73a7b201b5e0d6f53348dc21e91941abd1"' :
                                            'id="xs-controllers-links-module-CategoryModule-e61d041dfbb4c7b2c174b3849ac6a7a748a71c5cd96187f170afef05269a56df891ccaf162b59f9f5f564b23cbe3ea73a7b201b5e0d6f53348dc21e91941abd1"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoryModule-e61d041dfbb4c7b2c174b3849ac6a7a748a71c5cd96187f170afef05269a56df891ccaf162b59f9f5f564b23cbe3ea73a7b201b5e0d6f53348dc21e91941abd1"' : 'data-bs-target="#xs-injectables-links-module-CategoryModule-e61d041dfbb4c7b2c174b3849ac6a7a748a71c5cd96187f170afef05269a56df891ccaf162b59f9f5f564b23cbe3ea73a7b201b5e0d6f53348dc21e91941abd1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-e61d041dfbb4c7b2c174b3849ac6a7a748a71c5cd96187f170afef05269a56df891ccaf162b59f9f5f564b23cbe3ea73a7b201b5e0d6f53348dc21e91941abd1"' :
                                        'id="xs-injectables-links-module-CategoryModule-e61d041dfbb4c7b2c174b3849ac6a7a748a71c5cd96187f170afef05269a56df891ccaf162b59f9f5f564b23cbe3ea73a7b201b5e0d6f53348dc21e91941abd1"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' : 'data-bs-target="#xs-controllers-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' :
                                            'id="xs-controllers-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' }>
                                            <li class="link">
                                                <a href="controllers/CoreController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoreController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' :
                                        'id="xs-injectables-links-module-CoreModule-edeeec366651a7285c3260522dc03aef6398941c8b4e09d83eb87a6369d8cf6baf5f97d96f2bb1d3020512ac846620ffa4fb9a03b8c067962006cba3af6138e3"' }>
                                        <li class="link">
                                            <a href="injectables/ResponseTransformInterceptor.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponseTransformInterceptor</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link" >CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CoursesModule-6cdb561048f387a8acf3a98cdc3a0d357a9527577d44d041e4aa9fd68ed766470fb4e0094133e006f1b8ce9375522d15de01d9b0b950104fe2b60192d5969cd4"' : 'data-bs-target="#xs-controllers-links-module-CoursesModule-6cdb561048f387a8acf3a98cdc3a0d357a9527577d44d041e4aa9fd68ed766470fb4e0094133e006f1b8ce9375522d15de01d9b0b950104fe2b60192d5969cd4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoursesModule-6cdb561048f387a8acf3a98cdc3a0d357a9527577d44d041e4aa9fd68ed766470fb4e0094133e006f1b8ce9375522d15de01d9b0b950104fe2b60192d5969cd4"' :
                                            'id="xs-controllers-links-module-CoursesModule-6cdb561048f387a8acf3a98cdc3a0d357a9527577d44d041e4aa9fd68ed766470fb4e0094133e006f1b8ce9375522d15de01d9b0b950104fe2b60192d5969cd4"' }>
                                            <li class="link">
                                                <a href="controllers/CoursesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoursesModule-6cdb561048f387a8acf3a98cdc3a0d357a9527577d44d041e4aa9fd68ed766470fb4e0094133e006f1b8ce9375522d15de01d9b0b950104fe2b60192d5969cd4"' : 'data-bs-target="#xs-injectables-links-module-CoursesModule-6cdb561048f387a8acf3a98cdc3a0d357a9527577d44d041e4aa9fd68ed766470fb4e0094133e006f1b8ce9375522d15de01d9b0b950104fe2b60192d5969cd4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoursesModule-6cdb561048f387a8acf3a98cdc3a0d357a9527577d44d041e4aa9fd68ed766470fb4e0094133e006f1b8ce9375522d15de01d9b0b950104fe2b60192d5969cd4"' :
                                        'id="xs-injectables-links-module-CoursesModule-6cdb561048f387a8acf3a98cdc3a0d357a9527577d44d041e4aa9fd68ed766470fb4e0094133e006f1b8ce9375522d15de01d9b0b950104fe2b60192d5969cd4"' }>
                                        <li class="link">
                                            <a href="injectables/CoursesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CoursesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EducationModule.html" data-type="entity-link" >EducationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EducationModule-e5cceba5bf421dfeae392e95c89264896d4e9d3adbd4c3a7b3b78aec292ec118ab00a3555594ae5217ef2b7fe7593d62c9ecb6d9528953c51d56a192ec1e2ef9"' : 'data-bs-target="#xs-controllers-links-module-EducationModule-e5cceba5bf421dfeae392e95c89264896d4e9d3adbd4c3a7b3b78aec292ec118ab00a3555594ae5217ef2b7fe7593d62c9ecb6d9528953c51d56a192ec1e2ef9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EducationModule-e5cceba5bf421dfeae392e95c89264896d4e9d3adbd4c3a7b3b78aec292ec118ab00a3555594ae5217ef2b7fe7593d62c9ecb6d9528953c51d56a192ec1e2ef9"' :
                                            'id="xs-controllers-links-module-EducationModule-e5cceba5bf421dfeae392e95c89264896d4e9d3adbd4c3a7b3b78aec292ec118ab00a3555594ae5217ef2b7fe7593d62c9ecb6d9528953c51d56a192ec1e2ef9"' }>
                                            <li class="link">
                                                <a href="controllers/EducationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EducationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EducationModule-e5cceba5bf421dfeae392e95c89264896d4e9d3adbd4c3a7b3b78aec292ec118ab00a3555594ae5217ef2b7fe7593d62c9ecb6d9528953c51d56a192ec1e2ef9"' : 'data-bs-target="#xs-injectables-links-module-EducationModule-e5cceba5bf421dfeae392e95c89264896d4e9d3adbd4c3a7b3b78aec292ec118ab00a3555594ae5217ef2b7fe7593d62c9ecb6d9528953c51d56a192ec1e2ef9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EducationModule-e5cceba5bf421dfeae392e95c89264896d4e9d3adbd4c3a7b3b78aec292ec118ab00a3555594ae5217ef2b7fe7593d62c9ecb6d9528953c51d56a192ec1e2ef9"' :
                                        'id="xs-injectables-links-module-EducationModule-e5cceba5bf421dfeae392e95c89264896d4e9d3adbd4c3a7b3b78aec292ec118ab00a3555594ae5217ef2b7fe7593d62c9ecb6d9528953c51d56a192ec1e2ef9"' }>
                                        <li class="link">
                                            <a href="injectables/EducationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EducationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExperienceModule.html" data-type="entity-link" >ExperienceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ExperienceModule-c5b09954431c671531f886cb67411084fb4b008529cc9bb640df14248a7b6a00edb91693ddf3c35c879a07eec1801ee766e378e7a87b4b16b40774be1ef1692f"' : 'data-bs-target="#xs-controllers-links-module-ExperienceModule-c5b09954431c671531f886cb67411084fb4b008529cc9bb640df14248a7b6a00edb91693ddf3c35c879a07eec1801ee766e378e7a87b4b16b40774be1ef1692f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExperienceModule-c5b09954431c671531f886cb67411084fb4b008529cc9bb640df14248a7b6a00edb91693ddf3c35c879a07eec1801ee766e378e7a87b4b16b40774be1ef1692f"' :
                                            'id="xs-controllers-links-module-ExperienceModule-c5b09954431c671531f886cb67411084fb4b008529cc9bb640df14248a7b6a00edb91693ddf3c35c879a07eec1801ee766e378e7a87b4b16b40774be1ef1692f"' }>
                                            <li class="link">
                                                <a href="controllers/ExperienceController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExperienceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ExperienceModule-c5b09954431c671531f886cb67411084fb4b008529cc9bb640df14248a7b6a00edb91693ddf3c35c879a07eec1801ee766e378e7a87b4b16b40774be1ef1692f"' : 'data-bs-target="#xs-injectables-links-module-ExperienceModule-c5b09954431c671531f886cb67411084fb4b008529cc9bb640df14248a7b6a00edb91693ddf3c35c879a07eec1801ee766e378e7a87b4b16b40774be1ef1692f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExperienceModule-c5b09954431c671531f886cb67411084fb4b008529cc9bb640df14248a7b6a00edb91693ddf3c35c879a07eec1801ee766e378e7a87b4b16b40774be1ef1692f"' :
                                        'id="xs-injectables-links-module-ExperienceModule-c5b09954431c671531f886cb67411084fb4b008529cc9bb640df14248a7b6a00edb91693ddf3c35c879a07eec1801ee766e378e7a87b4b16b40774be1ef1692f"' }>
                                        <li class="link">
                                            <a href="injectables/ExperienceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExperienceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-a550ef9f9a9f3a3f143105856c1e149ef7754b761313674ad10dba792096e1484c14ea3368c1b33b1ca5e0e58b8be2d44979771e76469503e2d0c82db00fd6c0"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-a550ef9f9a9f3a3f143105856c1e149ef7754b761313674ad10dba792096e1484c14ea3368c1b33b1ca5e0e58b8be2d44979771e76469503e2d0c82db00fd6c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-a550ef9f9a9f3a3f143105856c1e149ef7754b761313674ad10dba792096e1484c14ea3368c1b33b1ca5e0e58b8be2d44979771e76469503e2d0c82db00fd6c0"' :
                                            'id="xs-controllers-links-module-HealthModule-a550ef9f9a9f3a3f143105856c1e149ef7754b761313674ad10dba792096e1484c14ea3368c1b33b1ca5e0e58b8be2d44979771e76469503e2d0c82db00fd6c0"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ImageModule.html" data-type="entity-link" >ImageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ImageModule-5fb3ff6ea0792c0a820aa1c7c3a702fa37340bf559dfbad18a5a421bf7097c202a1c313319348b6460c9d7df40b5c4ddf5baadc6b507bd1e80ec14492fdeea85"' : 'data-bs-target="#xs-controllers-links-module-ImageModule-5fb3ff6ea0792c0a820aa1c7c3a702fa37340bf559dfbad18a5a421bf7097c202a1c313319348b6460c9d7df40b5c4ddf5baadc6b507bd1e80ec14492fdeea85"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ImageModule-5fb3ff6ea0792c0a820aa1c7c3a702fa37340bf559dfbad18a5a421bf7097c202a1c313319348b6460c9d7df40b5c4ddf5baadc6b507bd1e80ec14492fdeea85"' :
                                            'id="xs-controllers-links-module-ImageModule-5fb3ff6ea0792c0a820aa1c7c3a702fa37340bf559dfbad18a5a421bf7097c202a1c313319348b6460c9d7df40b5c4ddf5baadc6b507bd1e80ec14492fdeea85"' }>
                                            <li class="link">
                                                <a href="controllers/ImageController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserdetailsModule.html" data-type="entity-link" >UserdetailsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserdetailsModule-19f9b271c7fe7586bdc481ccefc6060613f82087f91ade002c1bc0294bfc97538255c2140d6360396d4c911ae87852753210990fcea3164aa453f5816aafe420"' : 'data-bs-target="#xs-controllers-links-module-UserdetailsModule-19f9b271c7fe7586bdc481ccefc6060613f82087f91ade002c1bc0294bfc97538255c2140d6360396d4c911ae87852753210990fcea3164aa453f5816aafe420"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserdetailsModule-19f9b271c7fe7586bdc481ccefc6060613f82087f91ade002c1bc0294bfc97538255c2140d6360396d4c911ae87852753210990fcea3164aa453f5816aafe420"' :
                                            'id="xs-controllers-links-module-UserdetailsModule-19f9b271c7fe7586bdc481ccefc6060613f82087f91ade002c1bc0294bfc97538255c2140d6360396d4c911ae87852753210990fcea3164aa453f5816aafe420"' }>
                                            <li class="link">
                                                <a href="controllers/UserdetailsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserdetailsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserdetailsModule-19f9b271c7fe7586bdc481ccefc6060613f82087f91ade002c1bc0294bfc97538255c2140d6360396d4c911ae87852753210990fcea3164aa453f5816aafe420"' : 'data-bs-target="#xs-injectables-links-module-UserdetailsModule-19f9b271c7fe7586bdc481ccefc6060613f82087f91ade002c1bc0294bfc97538255c2140d6360396d4c911ae87852753210990fcea3164aa453f5816aafe420"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserdetailsModule-19f9b271c7fe7586bdc481ccefc6060613f82087f91ade002c1bc0294bfc97538255c2140d6360396d4c911ae87852753210990fcea3164aa453f5816aafe420"' :
                                        'id="xs-injectables-links-module-UserdetailsModule-19f9b271c7fe7586bdc481ccefc6060613f82087f91ade002c1bc0294bfc97538255c2140d6360396d4c911ae87852753210990fcea3164aa453f5816aafe420"' }>
                                        <li class="link">
                                            <a href="injectables/UserdetailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserdetailsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-67bb0a64a67be8af9a372df284c1240c2ebaea1e3a833f2c77dc89d4ee138567ebd75b96672a05b6f99a156eb2d9605cb3358173cdcf1f20a4e430a98e0abfd1"' : 'data-bs-target="#xs-controllers-links-module-UserModule-67bb0a64a67be8af9a372df284c1240c2ebaea1e3a833f2c77dc89d4ee138567ebd75b96672a05b6f99a156eb2d9605cb3358173cdcf1f20a4e430a98e0abfd1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-67bb0a64a67be8af9a372df284c1240c2ebaea1e3a833f2c77dc89d4ee138567ebd75b96672a05b6f99a156eb2d9605cb3358173cdcf1f20a4e430a98e0abfd1"' :
                                            'id="xs-controllers-links-module-UserModule-67bb0a64a67be8af9a372df284c1240c2ebaea1e3a833f2c77dc89d4ee138567ebd75b96672a05b6f99a156eb2d9605cb3358173cdcf1f20a4e430a98e0abfd1"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-67bb0a64a67be8af9a372df284c1240c2ebaea1e3a833f2c77dc89d4ee138567ebd75b96672a05b6f99a156eb2d9605cb3358173cdcf1f20a4e430a98e0abfd1"' : 'data-bs-target="#xs-injectables-links-module-UserModule-67bb0a64a67be8af9a372df284c1240c2ebaea1e3a833f2c77dc89d4ee138567ebd75b96672a05b6f99a156eb2d9605cb3358173cdcf1f20a4e430a98e0abfd1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-67bb0a64a67be8af9a372df284c1240c2ebaea1e3a833f2c77dc89d4ee138567ebd75b96672a05b6f99a156eb2d9605cb3358173cdcf1f20a4e430a98e0abfd1"' :
                                        'id="xs-injectables-links-module-UserModule-67bb0a64a67be8af9a372df284c1240c2ebaea1e3a833f2c77dc89d4ee138567ebd75b96672a05b6f99a156eb2d9605cb3358173cdcf1f20a4e430a98e0abfd1"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AddressController.html" data-type="entity-link" >AddressController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthenticationController.html" data-type="entity-link" >AuthenticationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CoreController.html" data-type="entity-link" >CoreController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CoursesController.html" data-type="entity-link" >CoursesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EducationController.html" data-type="entity-link" >EducationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ExperienceController.html" data-type="entity-link" >ExperienceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ImageController.html" data-type="entity-link" >ImageController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserdetailsController.html" data-type="entity-link" >UserdetailsController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Category.html" data-type="entity-link" >Category</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Courses.html" data-type="entity-link" >Courses</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserDetails.html" data-type="entity-link" >UserDetails</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Address.html" data-type="entity-link" >Address</a>
                            </li>
                            <li class="link">
                                <a href="classes/BcryptService.html" data-type="entity-link" >BcryptService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAddressDto.html" data-type="entity-link" >CreateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCourseDto.html" data-type="entity-link" >CreateCourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEducationDto.html" data-type="entity-link" >CreateEducationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateExperienceDto.html" data-type="entity-link" >CreateExperienceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCommand.html" data-type="entity-link" >CreateUserCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserdetailsDto.html" data-type="entity-link" >CreateUserdetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserException.html" data-type="entity-link" >CreateUserException</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserExceptionFilter.html" data-type="entity-link" >CreateUserExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserHandler.html" data-type="entity-link" >CreateUserHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserRequest.html" data-type="entity-link" >CreateUserRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/DuplicateUserException.html" data-type="entity-link" >DuplicateUserException</a>
                            </li>
                            <li class="link">
                                <a href="classes/DuplicateUserExceptionFilter.html" data-type="entity-link" >DuplicateUserExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Education.html" data-type="entity-link" >Education</a>
                            </li>
                            <li class="link">
                                <a href="classes/Experience.html" data-type="entity-link" >Experience</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchUserByIdCommand.html" data-type="entity-link" >FetchUserByIdCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/FetchUserByIdHandler.html" data-type="entity-link" >FetchUserByIdHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestJwtStrategy.html" data-type="entity-link" >NestJwtStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAddressDto.html" data-type="entity-link" >UpdateAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCourseDto.html" data-type="entity-link" >UpdateCourseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEducationDto.html" data-type="entity-link" >UpdateEducationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateExperienceDto.html" data-type="entity-link" >UpdateExperienceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserdetailDto.html" data-type="entity-link" >UpdateUserdetailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDetailResponse.html" data-type="entity-link" >UserDetailResponse</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddressService.html" data-type="entity-link" >AddressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoursesService.html" data-type="entity-link" >CoursesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseStrategy.html" data-type="entity-link" >DatabaseStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EducationService.html" data-type="entity-link" >EducationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExceptionInterceptor.html" data-type="entity-link" >ExceptionInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExperienceService.html" data-type="entity-link" >ExperienceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStorage.html" data-type="entity-link" >JwtStorage</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResponseTransformInterceptor.html" data-type="entity-link" >ResponseTransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeoutInterceptor.html" data-type="entity-link" >TimeoutInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenGuard.html" data-type="entity-link" >TokenGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserdetailsService.html" data-type="entity-link" >UserdetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IErrorBody.html" data-type="entity-link" >IErrorBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemsBody.html" data-type="entity-link" >ItemsBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginationMetaInterface.html" data-type="entity-link" >PaginationMetaInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Req.html" data-type="entity-link" >Req</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResourceBody.html" data-type="entity-link" >ResourceBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenBody.html" data-type="entity-link" >TokenBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenStorage.html" data-type="entity-link" >TokenStorage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});