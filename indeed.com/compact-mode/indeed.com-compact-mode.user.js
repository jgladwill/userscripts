// ==UserScript==
// @name			Indeed.com Compact-Mode
// @version			1.0.2
// @description		Provides a more productive browsing experience by enabling full-width layout and compacting most UI elements. CSS Only, Grants GM_addStyle.
// @icon			https://github.com/jgladwill/userscripts/main/indeed.com/compact-mode/icon32.png
// @icon64			https://github.com/jgladwill/userscripts/main/indeed.com/compact-mode/icon32.png
// @license			MIT; https://mit-license.org/
// @author			jgladwill
// @namespace		https://github.com/jgladwill/userscripts/
// @homepageURL		https://github.com/jgladwill/userscripts/
// @downloadURL		https://github.com/jgladwill/userscripts/indeed.com/compact-mode/indeed.com-compact-mode.js
// @updateURL		https://github.com/jgladwill/userscripts/indeed.com/compact-mode/indeed.com-compact-mode.js
// @supportURL		https://github.com/jgladwill/userscripts/issues/
// @match			http*://*.indeed.*/*
// @grant			GM_addStyle
// @grant			GM.addStyle
// @run-at			document-end
// ==/UserScript==

(() => {
	"use strict";

	GM.addStyle(`
		* {outline: 0 !important;}
		@media (min-width: 769px) {
			#gnav-main-container [class*=gnav-header-] {
				margin: 0px !important;
				padding: 0px !important;
				min-height: initial !important;}
			#gnav-main-container [class*=gnav-header-].gnav-Logo {
				margin: 0 !important;}
			#gnav-main-container [class*=gnav-header-] a, #gnav-main-container [class*=gnav-header-] svg, #gnav-main-container [class*=gnav-header-] img, #gnav-main-container [class*=gnav-header-] button {
				margin: 5px !important;
				padding: 0px !important;
				height: 22px !important;
				width:  auto !important;
				min-height: initial !important;
				min-width: initial !important;}
				
			.icl-TextInput {padding: 5px !important;}
			.icl-Autocomplete-list li {padding: 0 5px !important;}
			.icl-TextInput-labelWrapper {margin: 0px 5px !important;}
			.icl-TextInput-labelWrapper label:after {content: ':' !important;}
				
			.yosegi-InlineWhatWhere {margin-bottom: 0px !important;}
			.yosegi-InlineWhatWhere-primaryButton {
				padding: 5px 10px !important;
				min-width: 0px !important;}
			.yosegi-FilterPill-pill {
				height: 22px !important;
				margin-right: 5px !important;
				padding: 15px !important;
				min-width: 0px !important;
				border-radius: 999px !important;}
			.yosegi-FilterPill-pillIcon svg {
				height: 9px !important;
				width: 9px !important;}
				
			.kebabMenu-button, .kebabMenu-button svg {
				height: 16px !important;
				width: 20px !important;}
				
			.attribute_snippet {
				max-width: 200px !important;
				overflow: hidden !important;
				white-space: nowrap !important;}

			.jobsearch-LeftPane .metadata span, .jobsearch-LeftPane .metadata a {
				font-size: .5rem !important;
			}
			
			.tapItem-gutter {margin-bottom: 0 !important;}
			.jobsearch-LeftPane, .jobsearch-RightPane {max-width: initial !important;}
			.jobsearch-LeftPane {width: 40vw !important;}
			.jobsearch-RightPane {width: 60vw !important;}
			.jobsearch-SerpMainContent {padding: 10px 15px !important;}
			.jobsearch-SerpMainContent, .jobsearch-RichSearchBody {
				width: 100% !important;
				justify-content: space-between !important;}
			.jobsearch-JobCountAndSortPane, .jobsearch-JobCountAndSortPane, .jobsearch-JobCountAndSortPane-jobCountInfo {margin: 0 !important; padding: 0 !important;}
			.jobsearch-SerpTitle, .visually-hidden, .fe_logo, .jobCardShelfContainer, .microContentQuestion, .smileyRatingForm, .msdg, #mosaic-aboveJobCards, .job_seen_beacon [class*=css-ot], .job_seen_beacon [class*=css-] div {display: none !important;}
			
			.mosaic-provider-jobcards .tapItem.result.resultWithShelf .slider_container .jobCard_mainContent {padding: 5px 10px !important;}
		}
	`);
})();