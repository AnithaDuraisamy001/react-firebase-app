import React, { useState } from 'react';


function LeftSideComponent({fColor,BtnTextColor1,BtnbgColor,fontSize}) {
  console.log(BtnTextColor1);
    return(
        <>
        <h3 className="cmp-title">Button Component</h3>
            <div class="cmp-wrapper">
            <div style={{color: fColor}} className="button">
              <button style={{ color: BtnTextColor1, backgroundColor: BtnbgColor }} type="button" id="button-5487aab983" className="cmp-button" data-cmp-clickable="" data-cmp-data-layer="{&quot;button-5487aab983&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/button&quot;,&quot;dc:title&quot;:&quot;Button&quot;}}">
                <span className="cmp-button__text">Button</span>
              </button>
              <button style={{ color: BtnTextColor1, borderColor: BtnTextColor1 }} type="button" id="button-5487aab983" className="cmp-button transparent_btn" data-cmp-clickable="" data-cmp-data-layer="{&quot;button-5487aab983&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/button&quot;,&quot;dc:title&quot;:&quot;Button&quot;}}">
                <span className="cmp-button__text">Button</span>
              </button>
            </div>
            </div>
            
            <h3 className="cmp-title">Text Component</h3>
            <div class="cmp-wrapper"> <div className="text" style={{ fontSize: fontSize,color: fColor }}>
              <div data-cmp-data-layer="{&quot;text-7569a6a7ea&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/text&quot;,&quot;xdm:text&quot;:&quot;<p><b>Bold </b>can be used to emphasize a word or phrase, as can <u>underline</u> and <i>italics.&amp;nbsp;</i><sup>Superscript</sup> and <sub>subscript</sub> are useful for mathematical (E = mc<sup>2</sup>) or scientific (h<sub>2</sub>O) expressions. Paragraph styles can provide alternative renderings, such as quote sections:</p><blockquote>&amp;quot;<i>Be yourself; everyone else is already taken&amp;quot;</i></blockquote><blockquote>- Oscar Wilde</blockquote>&quot;}}" id="text-7569a6a7ea" className="cmp-text">
                <p><b>Bold </b>can be used to emphasize a word or phrase, as can <u>underline</u> and <i>italics.&nbsp;</i><sup>Superscript</sup> and <sub>subscript</sub> are useful for mathematical (E = mc<sup>2</sup>) or scientific (h<sub>2</sub>O) expressions. Paragraph styles can provide alternative renderings, such as quote sections:</p>
                <blockquote>"<i>Be yourself; everyone else is already taken"</i></blockquote>
                <blockquote>- Oscar Wilde</blockquote>
              </div>
              </div></div>
           
                  <h3 className="cmp-title">Breadcrumb Component</h3>
                  <div class="cmp-wrapper">
                    <div className="breadcrumb">
                      <nav id="breadcrumb-480245d3af" className="cmp-breadcrumb" aria-label="Breadcrumb" data-cmp-data-layer="{&quot;breadcrumb-480245d3af&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb&quot;}}">
                        <ol className="cmp-breadcrumb__list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                          <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-9bee4d4454&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;repo:modifyDate&quot;:&quot;2019-12-20T18:35:24Z&quot;,&quot;dc:title&quot;:&quot;Component Library&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library.html">
                              <span itemprop="name">Component Library</span>
                            </a>
                          </li>
                          <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-3a0f66ac7b&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;dc:title&quot;:&quot;Component Library&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library.html">
                              <span itemprop="name">Component Library</span>
                            </a>
                          </li>
                          <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-7080538dd6&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;dc:title&quot;:&quot;Breadcrumb&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2/breadcrumb.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2/breadcrumb.html">
                              <span itemprop="name">Breadcrumb</span>
                            </a>
                          </li>
                          <li className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-2ae1704812&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;repo:modifyDate&quot;:&quot;2022-03-08T10:11:15Z&quot;,&quot;dc:title&quot;:&quot;Level 1&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1.html">
                              <span itemprop="name">Level 1</span>
                            </a>
                          </li>
                          <li  className="cmp-breadcrumb__item" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-17eadd49ba&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;repo:modifyDate&quot;:&quot;2022-03-08T10:11:15Z&quot;,&quot;dc:title&quot;:&quot;Level 2&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <a style={{ color: fColor }} className="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable="" href="/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2.html">
                              <span itemprop="name">Level 2</span>
                            </a>
                          </li>
                          <li className="cmp-breadcrumb__item cmp-breadcrumb__item--active" aria-current="page" data-cmp-data-layer="{&quot;breadcrumb-480245d3af-item-ab50f79f36&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/breadcrumb/item&quot;,&quot;repo:modifyDate&quot;:&quot;2022-03-08T10:11:15Z&quot;,&quot;dc:title&quot;:&quot;Breadcrumb&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-structure/breadcrumb/hidden/level-1/level-2/breadcrumb.html&quot;}}" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                            <span itemprop="name">Breadcrumb</span>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>

                  <h3 className="cmp-title">Container With Text and title</h3>
                  <div class="cmp-wrapper">
                    <div style={{ color: fColor }} className="container responsivegrid">
                      <div id="container-97c410ebe3" className="cmp-container">
                        <div className="title">
                          <div data-cmp-data-layer="{&quot;title-77d4082a7c&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/title&quot;,&quot;dc:title&quot;:&quot;Lorem Ipsum&quot;}}" id="title-77d4082a7c" className="cmp-title">
                            <h2 style={{ fontSize: fontSize, color: fColor }} className="cmp-title__text">Lorem Ipsum</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="cmp-title">Form components</h3>
                  <div class="cmp-wrapper">
                    <div style={{ color: fColor,fontSize: fontSize }} className="text aem-GridColumn aem-GridColumn--default--12"><div className="cmp-form-text " data-cmp-is="formText" data-minlen="1" data-maxlen="1" data-rows="2" data-enable-email-verification-endpoint="false" data-enable-password-strength="false" data-disable-jslib="false" data-disable-flagicon="false" data-disable-dropdown="false" data-special-characters="false" data-validation-required="false">
                      <label for="form-text-183451090">First name</label>
                      <input className="cmp-form-text__text" data-cmp-hook-form-text="input" type="text" id="form-text-183451090" name="Test" data-textonly-type="false" aria-invalid="true" />

                    </div>
                    </div>
                    <div style={{ color: fColor,fontSize: fontSize }} className="text aem-GridColumn aem-GridColumn--default--12"><div className="cmp-form-text " data-cmp-is="formText" data-minlen="1" data-maxlen="1" data-rows="2" data-enable-email-verification-endpoint="false" data-enable-password-strength="false" data-disable-jslib="false" data-disable-flagicon="false" data-disable-dropdown="false" data-special-characters="false" data-validation-required="false">
                      <label for="form-text-183451090">Last name</label>
                      <input className="cmp-form-text__text" data-cmp-hook-form-text="input" type="text" id="form-text-183451090" name="Test" data-textonly-type="false" aria-invalid="true" />

                    </div>
                    </div>
                  </div>
                  <h3 className="cmp-title">List component</h3>
                  <div class="cmp-wrapper">
                    <div class="list">
                      <ul style={{ fontSize: fontSize, color: fColor }} id="list-903b78316f" data-cmp-data-layer="{&quot;list-903b78316f&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/list&quot;}}" class="cmp-list">
                        <li class="cmp-list__item" data-cmp-data-layer="{&quot;list-903b78316f-item-c866ae2588&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/list/item&quot;,&quot;repo:modifyDate&quot;:&quot;2022-03-08T10:11:12Z&quot;,&quot;dc:title&quot;:&quot;Carousel&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-content/carousel.html&quot;}}">
                          <span class="cmp-list__item-title">Carousel</span>
                        </li>
                        <li class="cmp-list__item" data-cmp-data-layer="{&quot;list-903b78316f-item-51a846deda&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/list/item&quot;,&quot;repo:modifyDate&quot;:&quot;2022-03-08T10:11:12Z&quot;,&quot;dc:title&quot;:&quot;Teaser&quot;,&quot;xdm:linkURL&quot;:&quot;/content/core-components-examples/library/core-content/teaser.html&quot;}}">
                          <span class="cmp-list__item-title">Teaser</span>
                        </li>
                        <li class="cmp-list__item" data-cmp-data-layer="{&quot;list-903b78316f-item-ec03168352&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/list/item&quot;,&quot;dc:title&quot;:&quot;http://www.adobe.com&quot;,&quot;xdm:linkURL&quot;:&quot;http://www.adobe.com&quot;}}">
                          <span class="cmp-list__item-title">http://www.adobe.com</span>
                        </li>
                        <li class="cmp-list__item" data-cmp-data-layer="{&quot;list-903b78316f-item-52139ce280&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/list/item&quot;,&quot;dc:title&quot;:&quot;Component Library&quot;,&quot;xdm:linkURL&quot;:&quot;https://www.aemcomponents.dev&quot;}}">
                          <span class="cmp-list__item-title">Component Library</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <h3></h3>
                  <div class="cmp-wrapper">
                  <div className="progressbar">
                    <div id="progressbar-d923170fc5" className="cmp-progressbar" data-cmp-data-layer="{&quot;progressbar-d923170fc5&quot;:{&quot;@type&quot;:&quot;core-components-examples/components/progressbar&quot;}}">
                    <span className="cmp-progressbar__label--completed" aria-hidden="true">0</span>
                    <span className="cmp-progressbar__label--remaining" aria-hidden="true">100</span>
                    <div className="cmp-progressbar__bar" role="progressbar" aria-label="0.0% completed" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0</div>
                    </div>
                  </div> 
                  </div>*/}
                 
                  
            </>
    );
}
export default LeftSideComponent;